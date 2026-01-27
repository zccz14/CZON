import { readFile } from 'fs/promises';
import path from 'path';
import { MetaData } from '../metadata';
import { CZON_SRC_DIR, INPUT_DIR } from '../paths';
import { FileMetaData } from '../types';
import { updateFrontmatter } from '../utils/frontmatter';
import { writeFile } from '../utils/writeFile';

/**
 * 存储母语文件到 .czon/src
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

      // 增强 YAML Frontmatter
      const enhancedContent = updateFrontmatter(originalContent, {
        title: file.metadata.title,
        summary: file.metadata.summary,
        tags: file.metadata.tags,
        date: file.metadata.inferred_date,
      });

      // 进行内链接替换, 将相对链接替换为基于 czon://hash 的链接
      // const replacedContent = replaceInnerLinks(file, enhancedContent);

      await writeFile(filePath, enhancedContent);
    } catch (error) {
      console.warn(`⚠️ Failed to store native file ${file.path}:`, error);
    }
  }

  if (files.length > 0) {
    console.log(`💾 Stored ${files.length} native language files to .czon/src`);
  }
}
