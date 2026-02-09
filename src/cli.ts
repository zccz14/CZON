#!/usr/bin/env node

import { Cli } from 'clipanion';
import { config } from 'dotenv';
import {
  BuildCommand,
  CheckCommand,
  ConfigGithubCommand,
  LsFilesCommand,
  SummaryCommand,
} from './commands';
import { CZON_VERSION } from './version';

// 加载 .env 文件中的环境变量
config();

// 创建 CLI 应用
const cli = new Cli({
  binaryName: 'czon',
  binaryLabel: 'CZON - A minimalist Markdown documentation site builder',
  binaryVersion: CZON_VERSION,
});

// 注册命令
cli.register(BuildCommand);
cli.register(CheckCommand);
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
