import { spawn } from 'child_process';

export interface RunOpenCodeOptions {
  model?: string;
  signal?: AbortSignal;
  cwd?: string;
}

/**
 * Run OpenCode CLI to generate AI response for a given prompt.
 *
 * This function spawns the OpenCode CLI process and captures its output.
 * It serves as a fallback when OpenAI API is not available.
 *
 * @param prompt - The prompt to send to OpenCode
 * @param options - Optional configuration
 * @returns Promise resolving to the raw AI response string
 *
 * @important
 * The returned string has **no guaranteed format**. It may be plain text, JSON,
 * Markdown, or any other format depending on the model and context.
 * Do NOT parse or assume a specific structure. Treat it as raw content to be
 * processed by downstream AI components (e.g., pass to another LLM call,
 * write to a temp file for a Supervisor Agent, etc.).
 *
 * @example
 * const response = await runOpenCode('Explain closures in JavaScript');
 * // response format is unpredictable - pass it to another AI for processing
 * const analyzed = await completeMessages([
 *   { role: 'user', content: `Analyze this AI output:\n${response}` }
 * ]);
 */
export const runOpenCode = (prompt: string, options?: RunOpenCodeOptions): Promise<string> => {
  const model = options?.model ?? 'opencode/minimax-m2.1-free';
  const signal = options?.signal;
  const cwd = options?.cwd;

  return new Promise<string>((resolve, reject) => {
    console.info(`🚀 Running OpenCode with model ${model}`);

    const proc = spawn('npx', ['opencode-ai', 'run', prompt, '--model', model], {
      stdio: ['ignore', 'pipe', 'inherit'],
      cwd,
    });

    let output = '';

    proc.stdout.on('data', data => {
      output += data.toString();
    });

    proc.on('error', err => {
      reject(new Error(`Failed to start OpenCode process: ${err.message}`));
    });

    proc.on('close', code => {
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(new Error(`OpenCode process exited with code ${code}`));
      }
    });

    if (signal) {
      signal.addEventListener('abort', () => {
        proc.kill('SIGTERM');
        reject(new Error('OpenCode execution was aborted'));
      });
    }
  });
};
