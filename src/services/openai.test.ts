import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import test from 'node:test';
import {
  completeMessages,
  DEFAULT_OPENAI_BASE_URL,
  DEFAULT_OPENAI_MODEL,
  responsesApiUrl,
} from './openai';

const withResponsesServer = async (
  handler: (body: Record<string, unknown>, respond: (events: string[]) => void) => void,
  run: () => Promise<void>
) => {
  const server = createServer((request, response) => {
    assert.equal(request.method, 'POST');
    assert.equal(request.url, '/v1/responses');
    let raw = '';
    request.setEncoding('utf8');
    request.on('data', chunk => (raw += chunk));
    request.on('end', () => {
      const respond = (events: string[]) => {
        response.writeHead(200, { 'content-type': 'text/event-stream' });
        for (const event of events) response.write(event);
        response.end();
      };
      handler(JSON.parse(raw) as Record<string, unknown>, respond);
    });
  });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  assert.ok(address && typeof address !== 'string');
  const oldBaseUrl = process.env.OPENAI_BASE_URL;
  const oldApiKey = process.env.OPENAI_API_KEY;
  const oldModel = process.env.OPENAI_MODEL;
  const oldMaxTokens = process.env.OPENAI_MAX_TOKENS;
  process.env.OPENAI_BASE_URL = `http://127.0.0.1:${address.port}/v1`;
  process.env.OPENAI_API_KEY = 'test-key';
  process.env.OPENAI_MODEL = 'test-model';
  process.env.OPENAI_MAX_TOKENS = '123';
  try {
    await run();
  } finally {
    process.env.OPENAI_BASE_URL = oldBaseUrl;
    process.env.OPENAI_API_KEY = oldApiKey;
    process.env.OPENAI_MODEL = oldModel;
    process.env.OPENAI_MAX_TOKENS = oldMaxTokens;
    await new Promise<void>((resolve, reject) =>
      server.close(error => (error ? reject(error) : resolve()))
    );
  }
};

test('uses OpenAI LB and gpt-5.6-luna as the default Responses configuration', () => {
  assert.equal(DEFAULT_OPENAI_BASE_URL, 'https://openai.ntnl.io/v1');
  assert.equal(DEFAULT_OPENAI_MODEL, 'gpt-5.6-luna');
  assert.equal(responsesApiUrl(DEFAULT_OPENAI_BASE_URL), 'https://openai.ntnl.io/v1/responses');
  assert.equal(
    responsesApiUrl(`${DEFAULT_OPENAI_BASE_URL}/`),
    'https://openai.ntnl.io/v1/responses'
  );
});

test('completeMessages sends a Responses request and converts streamed output', async () => {
  await withResponsesServer(
    (body, respond) => {
      assert.equal(body.model, 'test-model');
      assert.equal(body.stream, true);
      assert.equal(body.temperature, 0);
      assert.equal(body.max_output_tokens, 123);
      assert.deepEqual(body.input, [
        { role: 'system', content: 'Follow instructions.' },
        { role: 'user', content: 'Return JSON.' },
      ]);
      assert.deepEqual(body.text, { format: { type: 'json_object' } });
      respond([
        'event: response.created\ndata: {"type":"response.created","response":{"id":"resp_test","model":"test-model","created_at":123}}\n\n',
        'event: response.output_text.delta\ndata: {"type":"response.output_text.delta","delta":"{\\"ok\\": "}\n\n',
        'event: response.output_text.delta\ndata: {"type":"response.output_text.delta","delta":"true}"}\n\n',
        'event: response.completed\ndata: {"type":"response.completed","response":{"id":"resp_test","model":"test-model","created_at":123,"status":"completed","usage":{"input_tokens":7,"output_tokens":4,"total_tokens":11}}}\n\n',
      ]);
    },
    async () => {
      const response = await completeMessages(
        [
          { role: 'system', content: 'Follow instructions.' },
          { role: 'user', content: 'Return JSON.' },
        ],
        { response_format: { type: 'json_object' } }
      );
      assert.equal(response.id, 'resp_test');
      assert.equal(response.object, 'response');
      assert.equal(response.created, 123);
      assert.equal(response.choices[0].message.content, '{"ok": true}');
      assert.deepEqual(response.usage, {
        prompt_tokens: 7,
        completion_tokens: 4,
        total_tokens: 11,
      });
    }
  );
});

test('completeMessages accepts response.output_text.done when no deltas were sent', async () => {
  await withResponsesServer(
    (_body, respond) => {
      respond([
        'data: {"type":"response.output_text.done","text":"translated markdown"}\n\n',
        'data: {"type":"response.completed","response":{"id":"resp_done","usage":{"input_tokens":1,"output_tokens":2,"total_tokens":3}}}\n\n',
      ]);
    },
    async () => {
      const response = await completeMessages([{ role: 'user', content: 'Translate.' }]);
      assert.equal(response.choices[0].message.content, 'translated markdown');
      assert.deepEqual(response.usage, { prompt_tokens: 1, completion_tokens: 2, total_tokens: 3 });
    }
  );
});

test('completeMessages fails when the Responses stream reports a terminal error', async () => {
  await withResponsesServer(
    (_body, respond) => {
      respond(['data: {"type":"response.failed","error":{"message":"upstream failed"}}\n\n']);
    },
    async () => {
      await assert.rejects(
        () => completeMessages([{ role: 'user', content: 'Fail.' }]),
        /upstream failed/
      );
    }
  );
});
