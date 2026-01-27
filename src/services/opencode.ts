import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
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

/**
 * Run OpenCode to generate AI response for a given prompt.
 *
 * This function uses the OpenCode SDK to connect to a running OpenCode server.
 * Assumes an OpenCode server is already running externally.
 *
 * @param prompt - The prompt to send to OpenCode
 * @param options - Optional configuration
 * @returns Promise that resolves when the operation completes
 *
 * @important
 * The AI response is handled internally by OpenCode. This function does not
 * return the response content. Any output files or results are managed by
 * the OpenCode agent or session directly.
 */
export const runOpenCode = (prompt: string, options?: RunOpenCodeOptions): Promise<void> => {
  const model = options?.model ?? 'opencode/gpt-5-nano';
  const signal = options?.signal;
  const cwd = options?.cwd || process.cwd();
  const agent = options?.agent;
  console.info(
    `🛠️  Running OpenCode with model: ${model}, agent: ${agent || 'none'}, prompt: ${prompt}`
  );

  return new Promise<void>(async (resolve, reject) => {
    const agentInfo = agent ? ` with agent ${agent}` : '';
    console.info(`🚀 Running OpenCode with model ${model}${agentInfo}`);

    let cancelled = false;

    const cleanup = () => {
      if (signal) {
        signal.removeEventListener('abort', onAbort);
      }
    };

    const onAbort = () => {
      cancelled = true;
      cleanup();
      reject(new Error('OpenCode execution was aborted'));
    };

    if (signal) {
      signal.addEventListener('abort', onAbort);
      if (signal.aborted) {
        onAbort();
        return;
      }
    }

    try {
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

      options?.signal?.addEventListener('abort', () => {
        console.info(`🛑 Aborting OpenCode session ${session.data.id}...`);
        client.session.abort({
          path: {
            id: session.data.id,
          },
        });
      });

      const directoryBase64 = Buffer.from(session.data.directory).toString('base64');
      const url = `${baseUrl}/${directoryBase64}/session/${session.data.id}`;
      console.info('OpenCode Session Created', url);

      const response = await client.session.prompt({
        path: {
          id: session.data.id,
        },
        body: {
          model: modelObj,
          agent,
          parts: [
            {
              type: 'text',
              text: prompt,
            },
          ],
        },
        query: {
          directory: cwd,
        },
        signal,
      });

      if (cancelled) {
        throw new Error('Cancelled');
      }

      if (response.error) {
        throw new Error(`OpenCode API error: ${JSON.stringify(response.error)}`);
      }

      // await client.session.delete({
      //   path: {
      //     id: session.data.id,
      //   },
      // });

      cleanup();
      resolve();
    } catch (err) {
      if (cancelled) {
        return;
      }
      cleanup();
      reject(
        new Error(
          `OpenCode SDK error: ${err instanceof Error ? err.message : String(err)}. Make sure an OpenCode server is running.`
        )
      );
    }
  });
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
