import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import type { AssistantMessage, Part } from '@opencode-ai/sdk';
import { MetaData } from '../metadata';
import { GLOBAL_OPENCODE_AGENT_DIR, LOCAL_OPENCODE_AGENT_DIR } from '../paths';
import { writeFile } from '../utils/writeFile';

function parseModelString(model: string): { providerID: string; modelID: string } {
  const parts = model.split('/');
  if (parts.length === 2) {
    return { providerID: parts[0], modelID: parts[1] };
  }
  // Default provider if no slash
  return { providerID: 'opencode', modelID: model };
}

export interface RunOpenCodeOptions {
  model?: string;
  signal?: AbortSignal;
  agent?: string;
  cwd?: string;
}

/** Response from a session prompt call. */
export interface SessionPromptResult {
  info: AssistantMessage;
  parts: Part[];
}

/**
 * A handle to an OpenCode session that allows sending additional prompts
 * to the same conversation.
 */
export interface OpenCodeSessionHandle {
  /** Session ID */
  readonly sessionId: string;
  /** Session URL for debugging */
  readonly url: string;
  /** Send a prompt to this session and wait for response */
  prompt(text: string, options?: { signal?: AbortSignal }): Promise<SessionPromptResult>;
  /** Abort the current running prompt */
  abort(): Promise<void>;
  /** Delete the session */
  delete(): Promise<void>;
}

/**
 * Run OpenCode to generate AI response for a given prompt.
 *
 * This function uses the OpenCode SDK to connect to a running OpenCode server.
 * Assumes an OpenCode server is already running externally.
 *
 * Creates a new session, sends the initial prompt, and returns a handle that
 * can be used to continue the conversation by calling `handle.prompt()`.
 *
 * @param prompt - The prompt to send to OpenCode
 * @param options - Optional configuration
 * @returns A session handle for continued interaction
 */
export const runOpenCode = async (
  prompt: string,
  options?: RunOpenCodeOptions
): Promise<OpenCodeSessionHandle> => {
  const model = options?.model ?? 'opencode/gpt-5-nano';
  const signal = options?.signal;
  const cwd = options?.cwd || process.cwd();
  const agent = options?.agent;
  const agentInfo = agent ? ` with agent ${agent}` : '';
  console.info(`🚀 Running OpenCode with model ${model}${agentInfo}`);

  const { createOpencodeClient } = await import('@opencode-ai/sdk');
  const baseUrl = 'http://localhost:4096';
  const client = createOpencodeClient({
    baseUrl: baseUrl,
    directory: cwd,
  });

  const modelObj = parseModelString(model);

  const session = await client.session.create();

  if (!session.data?.id)
    throw new Error('Failed to create OpenCode session', { cause: session.error });

  const sessionId = session.data.id;

  const directoryBase64 = Buffer.from(session.data.directory).toString('base64');
  const url = `${baseUrl}/${directoryBase64}/session/${sessionId}`;
  console.info('OpenCode Session Created', url);

  const handle: OpenCodeSessionHandle = {
    sessionId,
    url,

    async prompt(text: string, promptOptions?: { signal?: AbortSignal }) {
      const promptSignal = promptOptions?.signal;

      const response = await client.session.prompt({
        path: { id: sessionId },
        body: {
          model: modelObj,
          agent,
          parts: [{ type: 'text' as const, text }],
        },
        query: { directory: cwd },
        signal: promptSignal,
      });

      if (response.error) {
        throw new Error(`OpenCode API error: ${JSON.stringify(response.error)}`);
      }

      return response.data as SessionPromptResult;
    },

    async abort() {
      await client.session.abort({ path: { id: sessionId } });
    },

    async delete() {
      await client.session.delete({ path: { id: sessionId } });
    },
  };

  // Send the initial prompt
  await handle.prompt(prompt, { signal });

  return handle;
};

export const installAgentsToGlobal = async (): Promise<void> => {
  const installedAgents = await readdir(LOCAL_OPENCODE_AGENT_DIR)
    .then(files => files.filter(f => f.startsWith('czon-')))
    .catch(() => []);

  // 3. Copy local agents from .opencode/agent to global directory
  for (const agentFile of installedAgents) {
    console.log(`📁 Installing OpenCode agent: ${agentFile} to global directory...`);
    await writeFile(
      join(GLOBAL_OPENCODE_AGENT_DIR, agentFile),
      await readFile(join(LOCAL_OPENCODE_AGENT_DIR, agentFile))
    );
  }

  console.log(`✅ Installed ${installedAgents.length} OpenCode agents to global directory.`);
};
