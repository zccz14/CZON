import { Command } from 'clipanion';
import * as fs from 'fs/promises';
import * as path from 'path';
import { writeFile } from '../utils/writeFile';

export class ConfigGithubCommand extends Command {
  static paths = [['config', 'github']];

  static usage = Command.Usage({
    description: 'Copy GitHub Pages deployment workflow template to .github/workflows/pages.yml',
    details: `
      This command copies the GitHub Pages deployment workflow template (templates/pages.yml)
      to the current directory's .github/workflows/pages.yml location.

      Examples:
        $ czon config github
    `,
  });

  async execute() {
    try {
      const targetDir = process.cwd();
      const templatePath = path.join(__dirname, '..', '..', 'templates', 'pages.yml');
      const targetPath = path.join(targetDir, '.github', 'workflows', 'pages.yml');

      // 检查模板文件是否存在
      try {
        await fs.access(templatePath);
      } catch {
        this.context.stderr.write(`Template file not found: ${templatePath}\n`);
        return 1;
      }

      // 读取模板文件
      const content = await fs.readFile(templatePath, 'utf-8');

      // 确保目标目录存在并写入文件
      await writeFile(targetPath, content);

      this.context.stdout.write(`GitHub Actions workflow copied to ${targetPath}\n`);
      return 0;
    } catch (error) {
      this.context.stderr.write(`Failed to copy workflow template: ${error}\n`);
      return 1;
    }
  }
}
