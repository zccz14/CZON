#!/usr/bin/env node

import { Cli, Command, Option } from 'clipanion';
import { config } from 'dotenv';
import * as fs from 'fs/promises';
import * as path from 'path';
import { buildSite } from './build/pipeline';
import { findMarkdownEntries } from './findEntries';
import { processSummary } from './process/summary';
import { writeFile } from './utils/writeFile';
import { CZON_VERSION } from './version';

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

// Summary 命令
class SummaryCommand extends Command {
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
      this.context.stderr.write(`❌ Summary generation failed: ${error}\n`);
      return 1;
    }
  }
}

// ConfigGithub 命令
class ConfigGithubCommand extends Command {
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
      const templatePath = 'templates/pages.yml';
      const targetPath = path.join(targetDir, '.github', 'workflows', 'pages.yml');

      // 检查模板文件是否存在
      try {
        await fs.access(templatePath);
      } catch {
        this.context.stderr.write(`❌ Template file not found: ${templatePath}\n`);
        return 1;
      }

      // 读取模板文件
      const content = await fs.readFile(templatePath, 'utf-8');

      // 确保目标目录存在并写入文件
      await writeFile(targetPath, content);

      this.context.stdout.write(`✅ GitHub Actions workflow copied to ${targetPath}\n`);
      return 0;
    } catch (error) {
      this.context.stderr.write(`❌ Failed to copy workflow template: ${error}\n`);
      return 1;
    }
  }
}

// Build 命令
class BuildCommand extends Command {
  static paths = [['build']];

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
cli.register(SummaryCommand);
cli.register(ConfigGithubCommand);

// 运行 CLI
cli.runExit(process.argv.slice(2), {
  ...Cli.defaultContext,
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
});
