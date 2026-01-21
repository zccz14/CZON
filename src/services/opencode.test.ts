import { test, mock, describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { runOpenCode, RunOpenCodeOptions } from './opencode';

describe('runOpenCode', () => {
  it('should return response from OpenCode', async () => {
    const result = await runOpenCode('hello');
    assert.ok(result.length > 0, 'Should return non-empty response');
  });

  it('should use default model when not specified', async () => {
    const result = await runOpenCode('test prompt');
    assert.ok(typeof result === 'string');
  });

  it('should accept custom model in options', async () => {
    const options: RunOpenCodeOptions = { model: 'opencode/glm-4.7-free' };
    const result = await runOpenCode('test', options);
    assert.ok(typeof result === 'string');
  });

  it('should handle abort signal', async () => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 10);

    await assert.rejects(
      async () => await runOpenCode('long running prompt', { signal: controller.signal }),
      /OpenCode execution was aborted/
    );
  });

  it('should accept cwd option', async () => {
    const options: RunOpenCodeOptions = { cwd: '/tmp' };
    const result = await runOpenCode('test', options);
    assert.ok(typeof result === 'string');
  });
});
