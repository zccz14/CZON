import { Command, Option } from 'clipanion';
import { findEntries } from '../findEntries';

export class LsFilesCommand extends Command {
  static paths = [['ls-files']];

  aigc = Option.Boolean('--aigc', false, {
    description: 'Include files under .czon/AIGC directory',
  });

  allTypes = Option.Boolean('--all-types', false, {
    description: 'List all file types, not just Markdown files',
  });

  static usage = Command.Usage({
    description: 'List all markdown files in the current directory',
    details: `
      This command lists all markdown files in the current directory using git.
      It uses the same logic as the internal findEntries function.
      Use --all-types to list all file types, not just Markdown.

      Examples:
        $ czon ls-files
        $ czon ls-files --all-types
    `,
  });

  async execute() {
    try {
      const files = await findEntries(process.cwd(), { aigc: this.aigc, allTypes: this.allTypes });

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
