import type { AssistantMessage, OpencodeClient, Part } from '@opencode-ai/sdk';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Retry delays for transient network errors (exponential back-off). */
const RETRY_DELAYS_MS = [1000, 2000, 4000];

/** Interval between status polls while waiting for a session to become idle. */
const POLL_INTERVAL_MS = 2000;

/** Maximum time to wait for a session to become idle (10 minutes). */
const POLL_MAX_DURATION_MS = 600_000;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseModelString(model: string): { providerID: string; modelID: string } {
  const parts = model.split('/');
  if (parts.length === 2) {
    return { providerID: parts[0], modelID: parts[1] };
  }
  // Default provider if no slash
  return { providerID: 'opencode', modelID: model };
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry `fn` on transient network errors (TypeError / "fetch failed").
 * Non-network errors are re-thrown immediately.
 */
async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= RETRY_DELAYS_MS.length) throw err;
      const isNetworkError =
        err instanceof TypeError || (err instanceof Error && err.message.includes('fetch failed'));
      if (!isNetworkError) throw err;
      const delay = RETRY_DELAYS_MS[attempt];
      console.warn(
        `⚠️ Network error, retrying in ${delay}ms... (${attempt + 1}/${RETRY_DELAYS_MS.length})`
      );
      await sleep(delay);
    }
  }
}

/**
 * Poll `session.status()` until the given session becomes idle.
 * Individual poll failures are silently retried (the server is still running,
 * just a transient network hiccup).
 */
async function pollUntilIdle(
  client: OpencodeClient,
  sessionId: string,
  cwd: string,
  signal?: AbortSignal
): Promise<void> {
  const deadline = Date.now() + POLL_MAX_DURATION_MS;

  while (Date.now() < deadline) {
    if (signal?.aborted) {
      throw new Error('OpenCode execution was aborted');
    }

    await sleep(POLL_INTERVAL_MS);

    try {
      const statusResp = await client.session.status({
        query: { directory: cwd },
      });
      const statuses = statusResp.data ?? {};
      const sessionStatus = statuses[sessionId];

      if (!sessionStatus || sessionStatus.type === 'idle') {
        return; // done
      }
      // busy / retry → keep polling
    } catch {
      // Network error → ignore, keep polling
      console.warn('⚠️ Status poll failed, will retry...');
    }
  }

  throw new Error(`OpenCode session timed out after ${POLL_MAX_DURATION_MS / 1000}s`);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

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
 * Internally uses `promptAsync()` + status polling instead of the blocking
 * `prompt()` call, so that long-running AI tasks survive transient network
 * interruptions.
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

      // Step 1: Send the message asynchronously (short request, returns 204)
      await withRetry(async () => {
        const resp = await client.session.promptAsync({
          path: { id: sessionId },
          body: {
            model: modelObj,
            agent,
            parts: [{ type: 'text' as const, text }],
          },
          query: { directory: cwd },
          signal: promptSignal,
        });
        if (resp.error) {
          throw new Error(`OpenCode API error: ${JSON.stringify(resp.error)}`);
        }
      });

      // Step 2: Poll until the session becomes idle
      await pollUntilIdle(client, sessionId, cwd, promptSignal);

      // Step 3: Fetch the latest assistant message
      const msgs = await withRetry(() =>
        client.session.messages({
          path: { id: sessionId },
          query: { directory: cwd },
        })
      );

      const allMessages = msgs.data ?? [];
      const lastAssistant = [...allMessages].reverse().find(m => m.info.role === 'assistant');

      if (!lastAssistant) {
        throw new Error('No assistant response found after prompt');
      }

      return lastAssistant as SessionPromptResult;
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
