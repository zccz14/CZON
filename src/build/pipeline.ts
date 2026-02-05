import * as fs from 'fs/promises';
import * as path from 'path';
import { loadMetaData, MetaData, saveMetaData } from '../metadata';
import {
  CZON_DIR,
  CZON_DIST_DIR,
  CZON_DIST_RAW_CONTENT_DIR,
  CZON_SRC_DIR,
  INPUT_DIR,
} from '../paths';
import { processExtractCategory } from '../process/category';
import { processTranslateCategories } from '../process/translateCategories';
import { processTranslateMetadata } from '../process/translateMetadata';
import { processTranslateNavLinks } from '../process/translateNavLinks';
import { storeNativeFiles } from '../process/enhanceMarkdownSource';
import { extractMetadataByAI } from '../process/extractMetadataByAI';
import { processTranslations } from '../process/processTranslations';
import { scanSourceFiles } from '../process/scanSourceFiles';
import { downloadCDNResources, spiderStaticSiteGenerator } from '../process/template';
import { installAgentsToGlobal } from '../services/opencode';
import { BuildOptions } from '../types';
import { writeFile } from '../utils/writeFile';
import { generateRobotsTxt } from './robots';
import { generateSitemap } from './sitemap';

/**
 * 验证构建配置
 */
async function applyConfig(options: BuildOptions): Promise<void> {
  MetaData.options ??= {};

  if (options.langs !== undefined) {
    console.log(`🌐 Target languages: ${options.langs.join(', ')}`);
    MetaData.options.langs = options.langs;
  }
}

/**
 * 构建管道（函数组合）
 */
async function buildPipeline(options: BuildOptions): Promise<void> {
  // 验证配置
  await applyConfig(options);
  // 安装 OpenCode 代理到全局目录
  await installAgentsToGlobal();

  // 清理输出目录
  await fs.rm(CZON_DIST_DIR, { recursive: true, force: true });

  // 确保 .czon/.gitignore 文件
  await writeFile(
    path.join(CZON_DIR, '.gitignore'),
    [
      'dist',
      'tmp',
      // 忽略所有非 md 文件: 先忽略所有文件，再排除 Markdown 文件不忽略
      'src/**/*.*',
      '!src/**/*.md',
    ].join('\n')
  );

  // 扫描源文件
  await scanSourceFiles();

  // 链接资源文件 (非翻译文件)
  for (const file of MetaData.files) {
    if (file.path.endsWith('.md')) continue; // 仅处理非 Markdown 文件
    for (const lang of MetaData.options.langs || []) {
      // 创建硬链接以节省磁盘空间
      const targetPath = path.join(CZON_SRC_DIR, lang, file.path);
      const sourcePath = path.join(INPUT_DIR, file.path);
      console.info(`🔗 Linking file ${file.path} to ${targetPath} ...`);

      // 确保 link 成功
      await fs.mkdir(path.dirname(targetPath), { recursive: true });
      await fs.rm(targetPath, { force: true });
      await fs.link(sourcePath, targetPath);
    }
    // 拷贝一份到 __raw__ 目录以供 dist 使用
    const rawTargetPath = path.join(CZON_DIST_RAW_CONTENT_DIR, file.path);
    const rawSourcePath = path.join(INPUT_DIR, file.path);
    console.info(`📄 Copying raw file ${file.path} to ${rawTargetPath} ...`);
    await fs.mkdir(path.dirname(rawTargetPath), { recursive: true });
    await fs.copyFile(rawSourcePath, rawTargetPath);
  }

  // 运行 AI 元数据提取
  await extractMetadataByAI();

  // 翻译 AI 提取的 metadata JSON
  await processTranslateMetadata();

  // 提取分类信息
  await processExtractCategory();

  // 翻译分类
  await processTranslateCategories();

  // 翻译 navLinks
  await processTranslateNavLinks();

  // 存储母语文件，并进行内容增强预处理
  await storeNativeFiles();

  // 处理翻译
  await processTranslations();

  // 渲染模板
  await spiderStaticSiteGenerator();
  await downloadCDNResources();

  // 生成 robots.txt
  await generateRobotsTxt();

  // 生成 sitemap.xml
  if (MetaData.options.site?.baseUrl) {
    await generateSitemap(MetaData.options.site.baseUrl);
  } else {
    console.log('ℹ️ Skipping sitemap generation (site.baseUrl not configured)');
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
