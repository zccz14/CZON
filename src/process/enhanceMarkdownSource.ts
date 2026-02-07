import { readFile } from 'fs/promises';
import path from 'path';
import { MetaData } from '../metadata';
import { CZON_SRC_DIR, INPUT_DIR } from '../paths';
import { writeFile } from '../utils/writeFile';

/**
 * 存储母语文件到 .czon/src
 * 直接复制原始文件，metadata 从 meta.json 获取
 */
export async function storeNativeFiles(): Promise<void> {
  const { files } = MetaData;
  for (const file of MetaData.files) {
    if (!file.path.endsWith('.md')) {
      console.info(`ℹ️ Skipping ${file.path}, not a Markdown file`);
      continue;
    }
    try {
      if (!file.metadata?.inferred_lang) throw new Error(`Missing inferred language`);
      const filePath = path.join(CZON_SRC_DIR, file.metadata.inferred_lang, file.path);
      const originalContent = await readFile(path.join(INPUT_DIR, file.path), 'utf-8');

      await writeFile(filePath, originalContent);
    } catch (error) {
      console.warn(`⚠️ Failed to store native file ${file.path}:`, error);
    }
  }

  if (files.length > 0) {
    console.log(`💾 Stored ${files.length} native language files to .czon/src`);
  }
}
