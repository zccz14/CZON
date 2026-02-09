import { Command } from 'clipanion';
import { checkLinks, formatCheckResults } from '../process/checkLinks';

export class CheckCommand extends Command {
  static paths = [['check']];

  static usage = Command.Usage({
    description: 'Check Markdown files for broken links and path format issues',
    details: `
      This command scans all Markdown files in the current directory and checks for:
        - Dead links (link targets that do not exist)
        - Path format issues (absolute paths starting with /)

       Examples:
         $ czon check
    `,
  });

  async execute() {
    try {
      const issues = await checkLinks();
      const output = formatCheckResults(issues);
      this.context.stdout.write(output + '\n');
      return issues.length > 0 ? 1 : 0;
    } catch (error) {
      this.context.stderr.write(`Check failed: ${error}\n`);
      return 1;
    }
  }
}
