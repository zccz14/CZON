import { Command, Option } from 'clipanion';
import { processSummary } from '../process/summary';

export class SummaryCommand extends Command {
  static paths = [['summary']];

  model = Option.String('--model', 'opencode/big-pickle', {
    description: 'OpenCode model to use for summarization',
  });

  static usage = Command.Usage({
    description: 'Generate comprehensive multi-style summaries of all markdown files',
    details: `
      This command generates 10 different styles of AI-powered summaries for all markdown files
      in the current repository. The summaries are saved to the SUMMARY directory.

      Generated summary styles include:
      - Objective analysis
      - Critical perspective  
      - Positive encouragement
      - Popular science explanation
      - Artistic interpretation
      - Philosophical analysis
      - Psychological analysis (MBTI)
      - Historical timeline
      - Community discussion
      - Structured debate

      Examples:
        $ czon summary
        $ czon summary --model opencode/gpt-4o
    `,
  });

  async execute() {
    try {
      await processSummary(this.model);

      return 0;
    } catch (error) {
      this.context.stderr.write(`Summary generation failed: ${error}\n`);
      return 1;
    }
  }
}
