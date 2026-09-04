// 使用 make-fetch-happen 以支持代理选项 (支持环境变量 HTTP_PROXY, HTTPS_PROXY, PROXY, NO_PROXY)
import fetch from 'make-fetch-happen';

/**
 * OpenAI 消息接口
 */
export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * CZON 保持的 Chat Completions 兼容响应接口。
 *
 * 上游已经迁移到 Responses API；此类型保留现有 AI 调用方的读取契约。
 */
export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

type ResponsesUsage = {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
};

export const DEFAULT_OPENAI_BASE_URL = 'https://openai.ntnl.io/v1';
export const DEFAULT_OPENAI_MODEL = 'gpt-5.6-luna';

export const responsesApiUrl = (baseUrl: string) => `${baseUrl.replace(/\/$/, '')}/responses`;

type ResponsesStreamEvent = {
  type?: string;
  delta?: string;
  text?: string;
  error?: { message?: string };
  response?: {
    id?: string;
    model?: string;
    created_at?: number;
    status?: string;
    usage?: ResponsesUsage;
  };
};

const startTime = Date.now();
let totalContentGenerated = 0;
const processingTaskIds = new Set<string>();

const printReport = () => {
  const speed = (totalContentGenerated / ((Date.now() - startTime) / 1000)).toFixed(2);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.error(
    `⏳ AI Processing output speed=${speed} total=${totalContentGenerated} elapsed=${elapsed} s tasks=${processingTaskIds.size}`
  );
  let i = 5;
  for (const id of processingTaskIds) {
    if (i-- <= 0) break;
    console.error(` - processing task: ${id}`);
  }
};

let isReporting = false;
const setupReport = async () => {
  if (isReporting) return;
  isReporting = true;
  while (processingTaskIds.size > 0) {
    printReport();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  isReporting = false;
};

const responseUsage = (usage?: ResponsesUsage): OpenAIResponse['usage'] => ({
  prompt_tokens: usage?.input_tokens ?? 0,
  completion_tokens: usage?.output_tokens ?? 0,
  total_tokens: usage?.total_tokens ?? 0,
});

const appendOutputText = (content: string, event: ResponsesStreamEvent): string => {
  if (event.type === 'response.output_text.delta' && typeof event.delta === 'string') {
    totalContentGenerated += event.delta.length;
    return content + event.delta;
  }
  if (event.type === 'response.output_text.done' && typeof event.text === 'string') {
    return content || event.text;
  }
  return content;
};

const responseInput = (messages: OpenAIMessage[]) =>
  messages.map(message => ({
    role: message.role,
    content: message.content,
  }));

/**
 * 使用 OpenAI Responses API 补全消息。
 * 对外保留 CZON 既有 Chat Completions 兼容返回形状，避免改动全部调用方。
 */
export const completeMessages = async (
  messages: OpenAIMessage[],
  options?: {
    task_id?: string;
    response_format?: { type: 'json_object' | 'text' };
  }
): Promise<OpenAIResponse> => {
  try {
    if (options?.task_id) {
      processingTaskIds.add(options.task_id);
      void setupReport();
    }

    const apiKey = process.env.OPENAI_API_KEY || '';
    const baseUrl = process.env.OPENAI_BASE_URL || DEFAULT_OPENAI_BASE_URL;
    const model = process.env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL;
    const maxOutputTokens = process.env.OPENAI_MAX_TOKENS
      ? +process.env.OPENAI_MAX_TOKENS
      : undefined;

    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    const requestBody: Record<string, unknown> = {
      model,
      input: responseInput(messages),
      temperature: 0,
      stream: true,
    };
    if (maxOutputTokens !== undefined) requestBody.max_output_tokens = maxOutputTokens;
    if (options?.response_format?.type === 'json_object') {
      requestBody.text = { format: { type: 'json_object' } };
    }

    const response = await fetch(responsesApiUrl(baseUrl), {
      method: 'POST',
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`OpenAI Responses API error (${response.status}): ${await response.text()}`);
    }

    const decoder = new TextDecoder();
    let buffer = '';
    let content = '';
    let responseId: string | undefined;
    let responseModel: string | undefined;
    let responseCreated: number | undefined;
    let usage: OpenAIResponse['usage'] | undefined;
    let finishReason = 'stop';

    const handleEvent = (event: ResponsesStreamEvent) => {
      if (event.response) {
        responseId = event.response.id || responseId;
        responseModel = event.response.model || responseModel;
        responseCreated = event.response.created_at || responseCreated;
        if (event.response.usage) usage = responseUsage(event.response.usage);
        if (event.response.status === 'incomplete') finishReason = 'length';
      }
      if (event.type === 'error' || event.type === 'response.failed') {
        throw new Error(event.error?.message || 'OpenAI Responses API stream failed');
      }
      content = appendOutputText(content, event);
    };

    const handleData = (value: Uint8Array) => {
      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split('\n\n');
      buffer = events.pop() || '';
      for (const rawEvent of events) {
        const data = rawEvent
          .split('\n')
          .filter(line => line.startsWith('data:'))
          .map(line => line.slice(5).trimStart())
          .join('\n');
        if (!data || data === '[DONE]') continue;
        let event: ResponsesStreamEvent;
        try {
          event = JSON.parse(data) as ResponsesStreamEvent;
        } catch (error) {
          console.warn('Failed to parse Responses SSE event:', data, error);
          continue;
        }
        handleEvent(event);
      }
    };

    await new Promise<void>((resolve, reject) => {
      response.body.on('data', (value: Uint8Array) => {
        try {
          handleData(value);
        } catch (error) {
          reject(error);
        }
      });
      response.body.on('end', resolve);
      response.body.on('error', reject);
    });

    const finalResponse: OpenAIResponse = {
      id: responseId || `resp-${Date.now()}`,
      object: 'response',
      created: responseCreated || Math.floor(Date.now() / 1000),
      model: responseModel || model,
      choices: [
        {
          index: 0,
          message: { role: 'assistant', content },
          finish_reason: finishReason,
        },
      ],
      usage: usage || { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
    };

    console.info('🤖 AI Token Usages', finalResponse.usage);
    if (!finalResponse.choices[0].message.content.trim()) {
      throw new Error('Empty response from OpenAI Responses API');
    }
    return finalResponse;
  } catch (error) {
    console.error('❌ Failed to call OpenAI Responses API:', error);
    throw error;
  } finally {
    if (options?.task_id) processingTaskIds.delete(options.task_id);
  }
};
