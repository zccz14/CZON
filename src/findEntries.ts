import { exec } from 'child_process';
import { resolve } from 'path';
import { promisify } from 'util';
import { isExists } from './utils/isExists';

const execAsync = promisify(exec);

/**
 * 使用git命令查找项目中的文件
 * 使用git ls-files --others --cached --exclude-standard获取所有文件
 * 然后过滤掉.czon目录，默认只保留.md文件
 *
 * @param dirPath 要扫描的目录路径
 * @param options 可选参数
 * @param options.aigc 是否包含 .czon/AIGC 目录下的文件
 * @param options.allTypes 是否返回所有类型的文件（默认 false，仅返回 .md 文件）
 * @returns Promise<string[]> 返回文件的相对路径数组
 */
export const findEntries = async (
  dirPath: string,
  options?: { aigc?: boolean; allTypes?: boolean }
): Promise<string[]> => {
  const aigc = options?.aigc ?? false;
  const allTypes = options?.allTypes ?? false;
  // 获取git仓库的根目录
  const gitRoot = (
    await execAsync('git rev-parse --show-toplevel', { cwd: dirPath })
  ).stdout.trim();

  // 使用git命令获取所有文件（包括已跟踪和未跟踪的文件）
  // 在指定的目录下执行git命令
  // 使用 -z 选项以空字符分隔文件名，方便处理文件名中包含特殊字符 (UTF-8) 的情况
  const { stdout } = await execAsync('git ls-files --others --cached --exclude-standard -z', {
    cwd: gitRoot,
  });

  // 按行分割并过滤
  const files = stdout
    .split('\0') // 按空字符分割文件名
    .filter(line => line.trim() !== '') // 移除空行
    .filter(file => !file.startsWith('.') || (aigc && file.startsWith('.czon/AIGC/'))) // 过滤掉隐藏目录下的文件（aigc 模式下保留 .czon/AIGC/）
    .filter(file => allTypes || file.endsWith('.md')); // allTypes 时返回所有文件，否则只保留 .md 文件

  // 排除文件系统中不存在的文件
  const existingFiles = [];

  for (const file of files) {
    if (await isExists(resolve(gitRoot, file))) {
      existingFiles.push(file);
    }
  }

  return existingFiles;
};
