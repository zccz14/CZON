import * as fs from 'fs/promises';
import * as path from 'path';
import { loadMetaData, MetaData, saveMetaData } from '../metadata';
import { CZON_DIR, CZON_DIST_DIR, CZON_DIST_RAW_CONTENT_DIR, INPUT_DIR } from '../paths';
import { processExtractCategory } from '../process/category';
import { storeNativeFiles } from '../process/enhanceMarkdownSource';
import { extractMetadataByAI } from '../process/extractMetadataByAI';
import { processTranslations } from '../process/processTranslations';
import { scanSourceFiles } from '../process/scanSourceFiles';
import { spiderStaticSiteGenerator } from '../process/template';
import { installAgentsToGlobal } from '../services/opencode';
import { BuildOptions } from '../types';
import { writeFile } from '../utils/writeFile';
import { generateRobotsTxt } from './robots';
import { generateSitemap } from './sitemap';

/**
 * 验证构建配置
 */
async function validateConfig(options: BuildOptions): Promise<void> {
  const { verbose = false } = options;

  if (verbose) {
    console.log(`🚀 Starting CZON build...`);
    if (options.langs && options.langs.length > 0) {
      console.log(`🌐 Target languages: ${options.langs.join(', ')}`);
    }
    console.log(`🔍 Verbose mode enabled`);
  }

  MetaData.options = options;
}

/**
 * 构建管道（函数组合）
 */
async function buildPipeline(options: BuildOptions): Promise<void> {
  // 安装 OpenCode 代理到全局目录
  await installAgentsToGlobal();
  // 验证配置
  await validateConfig(options);

  // 清理输出目录
  await fs.rm(CZON_DIST_DIR, { recursive: true, force: true });

  // 确保 .czon/.gitignore 文件
  await writeFile(path.join(CZON_DIR, '.gitignore'), 'dist\n');

  // 扫描源文件
  await scanSourceFiles();

  // 写入 .raw 目录用于存储原始文件 (非翻译文件)
  for (const file of MetaData.files) {
    try {
      if (!file.hash) throw new Error(`Missing hash`);
      const ext = path.extname(file.path);
      const targetPath = path.join(CZON_DIST_RAW_CONTENT_DIR, file.hash + ext);
      const sourcePath = path.join(INPUT_DIR, file.path);
      console.info(`💾 Writing raw content for file ${file.path} to ${targetPath} ...`);
      const content = await fs.readFile(sourcePath);
      await writeFile(targetPath, content);
    } catch (error) {
      console.warn(`⚠️ Failed to write raw content for file ${file.path}:`, error);
    }
  }

  // 运行 AI 元数据提取
  await extractMetadataByAI();

  // 提取分类信息
  await processExtractCategory();

  // 存储母语文件，并进行内容增强预处理
  await storeNativeFiles();

  // 处理翻译
  await processTranslations();

  // 渲染模板
  await spiderStaticSiteGenerator();

  // 生成 robots.txt
  await generateRobotsTxt();

  // 生成 sitemap.xml
  if (MetaData.options.baseUrl) {
    await generateSitemap(MetaData.options.baseUrl);
  } else {
    console.log('ℹ️ Skipping sitemap generation (--baseUrl not provided)');
  }
}

/**
 * 主构建函数
 */
export async function buildSite(options: BuildOptions): Promise<void> {
  const startTime = Date.now();

  try {
    await loadMetaData();
    await buildPipeline(options);

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    console.log(`🎉 Build completed in ${duration}s`);
  } catch (error) {
    console.error(`❌ Build failed:`, error);
    throw error;
  } finally {
    await saveMetaData();
  }
}
