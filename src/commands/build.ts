import { Command, Option } from 'clipanion';
import { buildSite } from '../build/pipeline';

export class BuildCommand extends Command {
  static paths = [['build']];

  lang = Option.Array('--lang', {
    description: 'Target languages for translation (e.g., en-US, ja-JP)',
  });

  static usage = Command.Usage({
    description: 'Build documentation site from Markdown files in current directory',
    details: `
      This command builds a documentation site from Markdown files in the current directory.
      The output will be placed in the .czon/dist directory.

       Examples:
         $ czon build
         $ czon build --lang en-US --lang ja-JP (translate to English and Japanese)
    `,
  });

  async execute() {
    try {
      await buildSite({
        langs: this.lang,
      });

      return 0;
    } catch (error) {
      this.context.stderr.write(`Build failed: ${error}\n`);
      return 1;
    }
  }
}
