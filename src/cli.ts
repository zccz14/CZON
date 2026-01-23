#!/usr/bin/env node

import { Cli, Command, Option } from 'clipanion';
import { config } from 'dotenv';
import { buildSite } from './build/pipeline';
import { CZON_VERSION } from './version';
import { findMarkdownEntries } from './findEntries';

// 加载 .env 文件中的环境变量
config();

// LsFiles 命令
class LsFilesCommand extends Command {
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
      this.context.stderr.write(`❌ Failed to list files: ${error}\n`);
      return 1;
    }
  }
}

// Build 命令
class BuildCommand extends Command {
  static paths = [['build']];

  verbose = Option.Boolean('-v,--verbose');
  lang = Option.Array('--lang', {
    description: 'Target languages for translation (e.g., en-US, ja-JP)',
  });
  baseUrl = Option.String('--baseUrl', {
    description:
      'Base URL for sitemap generation (e.g., https://yoursite.com). If not provided, sitemap will not be generated.',
  });

  static usage = Command.Usage({
    description: 'Build documentation site from Markdown files in current directory',
    details: `
      This command builds a documentation site from Markdown files in the current directory.
      The output will be placed in the .czon/dist directory.

      Examples:
        $ czon build
        $ czon build --lang en-US --lang ja-JP (translate to English and Japanese)
        $ czon build --baseUrl https://yoursite.com (generate sitemap.xml)
    `,
  });

  async execute() {
    try {
      await buildSite({
        verbose: this.verbose,
        langs: this.lang,
        baseUrl: this.baseUrl,
      });

      return 0;
    } catch (error) {
      this.context.stderr.write(`❌ Build failed: ${error}\n`);
      return 1;
    }
  }
}

// 创建 CLI 应用
const cli = new Cli({
  binaryName: 'czon',
  binaryLabel: 'CZON - A minimalist Markdown documentation site builder',
  binaryVersion: CZON_VERSION,
});

// 注册命令
cli.register(BuildCommand);
cli.register(LsFilesCommand);

// 运行 CLI
cli.runExit(process.argv.slice(2), {
  ...Cli.defaultContext,
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
});
