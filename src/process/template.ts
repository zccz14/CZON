import * as fs from 'fs/promises';
import * as path from 'path';
import {
  clearSitemapCollection,
  collectCategoryPage,
  collectIndexPage,
  collectUrl,
} from '../build/sitemap';
import { MetaData } from '../metadata';
import { CZON_DIST_DIR, CZON_SRC_DIR } from '../paths';
import { renderToHTML } from '../ssg';
import { EXTERNAL_RESOURCES } from '../ssg/resourceMap';
import { IRenderContext } from '../types';
import { convertMarkdownToHtml } from '../utils/convertMarkdownToHtml';
import { parseFrontmatter } from '../utils/frontmatter';
import { writeFile } from '../utils/writeFile';

/**
 * 使用简单的爬虫抓取生成的站点页面
 */
export const spiderStaticSiteGenerator = async () => {
  clearSitemapCollection();

  const queue = ['/index.html', '/404.html'];

  // 将每个语言的首页加入队列
  for (const lang of MetaData.options.langs || []) {
    queue.push(`/${lang}/index.html`);
  }

  const isVisited = new Set<string>();
  const contents: IRenderContext['contents'] = [];

  // 预加载所有 Markdown 内容，因为 React 内部异步渲染比较麻烦
  for (const file of MetaData.files) {
    if (!file.path.endsWith('.md')) continue;
    for (const lang of MetaData.options.langs || []) {
      const markdown = await fs.readFile(path.join(CZON_SRC_DIR, lang, file.path), 'utf-8');
      const { frontmatter, body } = parseFrontmatter(markdown);
      const markdownHtml = convertMarkdownToHtml(file.path, lang, body);

      contents.push({
        lang,
        file,
        body: markdownHtml,
        frontmatter,
      });
    }
  }

  while (queue.length > 0) {
    const currentPath = queue.shift()!;
    if (isVisited.has(currentPath)) continue;
    isVisited.add(currentPath);

    let html =
      '<!DOCTYPE html>\n' +
      renderToHTML({
        path: currentPath,
        site: MetaData,
        contents,
      });

    console.info(`🕷️ Crawled ${currentPath}`);

    // 收集 URL 用于 sitemap
    const urlMatch = currentPath.match(/^\/([^/]+)\/(.+)\.html$/);
    if (urlMatch) {
      const lang = urlMatch[1];
      const page = urlMatch[2];

      if (page === 'index') {
        collectIndexPage(lang);
      } else if (page.startsWith('categories_')) {
        const category = page.replace('categories_', '');
        collectCategoryPage(lang, category);
      } else {
        collectUrl(lang, page);
      }
    }

    await writeFile(path.join(CZON_DIST_DIR, currentPath), html);

    // 提取生成的 HTML 中的站内链接，加入爬取队列
    const linkRegex = /href="([^"]+)"/g;
    for (const match of html.matchAll(linkRegex)) {
      const link = match[1];
      if (URL.canParse(link)) continue; // 跳过绝对 URL
      if (link.startsWith('#')) continue; // 跳过页面内锚点链接
      const resolvedPath = path.resolve('/', path.dirname(currentPath), link);
      if (resolvedPath.startsWith('/__raw__/')) continue; // 跳过原始内容目录

      console.info(
        `   ➕ Found link: ${link} -> ${resolvedPath} (${isVisited.has(resolvedPath) ? 'visited' : 'new'})`
      );
      if (!isVisited.has(resolvedPath)) {
        queue.push(resolvedPath);
      }
    }
  }
};

export const downloadCDNResources = async () => {
  for (const resource of EXTERNAL_RESOURCES) {
    const targetFilePath = path.join(CZON_DIST_DIR, 'assets', resource.name);

    console.info(`⬇️ Downloading resource: ${resource.url} -> ${targetFilePath}`);
    const response = await fetch(resource.url);
    if (!response.ok) {
      console.error(`❌ Failed to download resource: ${resource.url}, status: ${response.status}`);
      throw new Error(`Failed to download resource: ${resource.url}`);
    }
    const buffer = await response.arrayBuffer();
    await writeFile(targetFilePath, Buffer.from(buffer));
    console.info(`✅ Resource downloaded: ${targetFilePath}`);
  }
};
