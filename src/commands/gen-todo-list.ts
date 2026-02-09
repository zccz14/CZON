import { Command, Option } from 'clipanion';
import { processTodoSummary } from '../process/todoSummary';

export class GenTodoListCommand extends Command {
  static paths = [['gen', 'todo-list']];

  model = Option.String('--model', 'opencode/big-pickle', {
    description: 'OpenCode model to use for TODO extraction',
  });

  static usage = Command.Usage({
    description: 'Generate a TODO summary by extracting TODOs from all markdown files',
    details: `
      This command uses AI to read all markdown files in the repository,
      extract TODO items (both explicit and implicit), determine their
      completion status, and assign priority levels.

      The generated report is saved to .czon/AIGC/TODO/todo-summary.md

      Examples:
        $ czon gen todo-list
        $ czon gen todo-list --model opencode/gpt-4o
    `,
  });

  async execute() {
    try {
      await processTodoSummary(this.model);

      return 0;
    } catch (error) {
      this.context.stderr.write(`TODO summary generation failed: ${error}\n`);
      return 1;
    }
  }
}
