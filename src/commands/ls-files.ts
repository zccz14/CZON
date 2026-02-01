import { Command } from 'clipanion';
import { findMarkdownEntries } from '../findEntries';

export class LsFilesCommand extends Command {
  static paths = [['ls-files']];

  static usage = Command.Usage({
    description: 'List all markdown files in the current directory',
    details: `
      This command lists all markdown files in the current directory using git.
      It uses the same logic as the internal findMarkdownEntries function.

      Examples:
        $ czon ls-files
    `,
  });

  async execute() {
    try {
      const files = await findMarkdownEntries(process.cwd());

      if (files.length === 0) {
        this.context.stdout.write('No markdown files found.\n');
      } else {
        files.forEach(file => {
          this.context.stdout.write(`${file}\n`);
        });
      }

      return 0;
    } catch (error) {
      this.context.stderr.write(`Failed to list files: ${error}\n`);
      return 1;
    }
  }
}
