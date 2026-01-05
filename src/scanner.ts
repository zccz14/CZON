import { FileInfo } from './types';
import * as fs from 'fs/promises';
import * as path from 'path';
import { GitIgnoreProcessor } from './gitignore';

export interface ScanOptions {
  srcDir: string;
  includePattern?: string;
  excludePattern?: string;
  verbose?: boolean;
}

export class FileScanner {
  /**
   * 扫描指定目录下的所有 Markdown 文件，返回文件列表
   */
  async scan(options: ScanOptions): Promise<FileInfo[]> {
    const { srcDir, verbose = false } = options;
    const files: FileInfo[] = [];

    // 创建 GitIgnoreProcessor 并加载 .gitignore 文件
    const gitignoreProcessor = new GitIgnoreProcessor(srcDir);
    await gitignoreProcessor.loadFromFile();

    // 扫描目录
    await this.scanDirectory(srcDir, srcDir, files, gitignoreProcessor, verbose, srcDir);

    if (verbose) {
      console.log(`📄 Scanned ${files.length} Markdown files`);
    }

    return files;
  }

  /**
   * 递归扫描目录
   */
  private async scanDirectory(
    currentPath: string,
    baseDir: string,
    files: FileInfo[],
    gitignoreProcessor: GitIgnoreProcessor,
    verbose: boolean,
    rootDir: string
  ): Promise<void> {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      // 检查是否应该被 .gitignore 忽略
      if (gitignoreProcessor.shouldIgnore(fullPath)) {
        if (verbose) console.log(`  Ignoring (gitignore): ${fullPath}`);
        continue;
      }

      // 忽略 .zen 目录（保持向后兼容）
      if (entry.name === '.zen') {
        if (verbose) console.log(`  Ignoring (.zen): ${fullPath}`);
        continue;
      }

      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath, baseDir, files, gitignoreProcessor, verbose, rootDir);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        try {
          const content = await fs.readFile(fullPath, 'utf-8');
          const relativePath = path.relative(rootDir, fullPath);
          const ext = path.extname(entry.name);
          const name = path.basename(entry.name, ext);

          files.push({
            path: fullPath,
            relativePath,
            name,
            ext,
            content,
          });

          if (verbose) console.log(`  Found: ${relativePath}`);
        } catch (error) {
          console.error(`❌ Failed to read file ${fullPath}:`, error);
        }
      }
    }
  }
}
