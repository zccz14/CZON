import hljs from 'highlight.js';
import { marked, Tokens } from 'marked';
import markedFootnote from 'marked-footnote';
import markedKatex from 'marked-katex-extension';
import { dirname, join, relative, resolve } from 'path';
import { MetaData } from '../metadata';
import { IArticleContent } from '../types';
// 辅助函数：转义 HTML 特殊字符
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
marked.use(markedKatex({ throwOnError: false, nonStandard: true } as any));
marked.use(markedFootnote());

/**
 * 将 Markdown 内容转换为 HTML
 * @param mdContent Markdown 内容字符串
 * @returns 转换后的 HTML 字符串
 */
export const convertMarkdownToHtml = (
  article: IArticleContent,
  path: string,
  lang: string,
  mdContent: string
): void => {
  const { headings } = article;
  const sourceFileMeta = MetaData.files.find(f => f.path === path);
  // 创建自定义渲染器
  const renderer = new marked.Renderer();
  const originalCodeRenderer = renderer.code;

  const originalLinkRenderer = renderer.link;
  renderer.link = function (link: Tokens.Link): string {
    console.info(`🔗 #### Processing link in Markdown: ${link.href} in file: ${path}`);
    if (URL.canParse(link.href)) {
      // 保持原有链接渲染行为
      return originalLinkRenderer.call(this, link);
    }

    if (!sourceFileMeta?.metadata?.slug) {
      console.warn(`⚠️ Source file metadata slug not found for path ${path}`);
      return originalLinkRenderer.call(this, link);
    }

    const sourceFileHtmlPath = resolve('/', lang, `${sourceFileMeta.metadata.slug}.html`);

    const resolvedPath = join(dirname(path), link.href);
    const file = MetaData.files.find(f => f.path === resolvedPath);
    if (!file) {
      console.warn(`⚠️ Link target not found for path ${resolvedPath} in file ${path}`);
      // 链接目标不存在，使用斜体表示损坏的链接，不渲染为 <a> 标签
      return `<em title="Link target not found: ${escapeHtml(link.href)}">${link.text}</em>`;
    }
    if (link.href.endsWith('.md')) {
      if (!file.metadata?.slug) {
        console.warn(`⚠️ Missing slug metadata for file ${file.path}`);
        return originalLinkRenderer.call(this, link);
      }
      const slug = file.metadata.slug;
      const targetPath = resolve('/', lang, `${slug}.html`);
      // 将 .md 链接转换为对应的 HTML 文件链接
      const href = relative(dirname(sourceFileHtmlPath), targetPath);
      const modifiedLink: Tokens.Link = {
        ...link,
        href,
      };
      return originalLinkRenderer.call(this, modifiedLink);
    } else {
      console.info(` 🔗 #### Processing resource link in Markdown: ${link.href} in file: ${path}`);
      // 其他资源链接到 __raw__ 目录
      const resourcePath = resolve('/', dirname(path), link.href);

      const href = relative(dirname(sourceFileHtmlPath), join('/', '__raw__', resourcePath));
      console.info(`     ➡️ Converted resource link to: ${href}`);
      const modifiedLink: Tokens.Link = {
        ...link,
        href: href,
      };
      return originalLinkRenderer.call(this, modifiedLink);
    }
  };

  const originalImageRenderer = renderer.image;
  renderer.image = function (image: Tokens.Image): string {
    console.info(`🖼️ #### Processing image in Markdown: ${image.href} in file: ${path}`);
    if (URL.canParse(image.href)) {
      // 保持原有图片渲染行为
      return originalImageRenderer.call(this, image);
    }
    const imagePath = join(dirname(path), image.href);
    return `<img src="${join('..', '__raw__', imagePath)}" alt="${image.text}" />`;
  };

  renderer.heading = function (heading: Tokens.Heading): string {
    // 添加 id 属性以支持锚点链接

    const id = (function () {
      // 生成唯一的 ID，避免重复
      for (let i = 0; ; i++) {
        const potentialId = i === 0 ? heading.text : `${heading.text}-${i}`;
        if (!headings.find(h => h.id === potentialId)) {
          return potentialId;
        }
      }
    })();

    // 使用 parseInline 渲染 inline tokens（KaTeX、加粗、斜体等）
    const renderedHtml = this.parser.parseInline(heading.tokens);

    headings.push({
      id,
      text: heading.text,
      html: renderedHtml,
      depth: heading.depth,
    });
    // TODO: 处理重复的标题文本以避免重复的 id
    return `<h${heading.depth} id="${id}" class="anchor-heading">${renderedHtml}</h${heading.depth}>`;
  };

  // 重写代码块渲染器以支持 Mermaid - 使用 any 类型绕过类型检查
  (renderer as any).code = function (code: any, language?: string, isEscaped?: boolean) {
    // 在 marked 17+ 中，code 参数是一个对象，包含 text 和 lang 属性
    const codeText = typeof code === 'string' ? code : code?.text || '';
    // 语言信息在 code.lang 中，而不是 language 参数
    const lang = code?.lang || language;

    // 检测 Mermaid 代码块
    if (lang === 'mermaid') {
      // 生成唯一的 ID 用于图表容器
      const chartId = 'mermaid-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      return `
<div class="mermaid-diagram" data-mermaid-id="${chartId}">
  <pre class="mermaid" data-mermaid-content="${encodeURIComponent(codeText)}">${escapeHtml(codeText)}</pre>
</div>
`;
    }

    // 其他代码块使用原有高亮逻辑
    return (originalCodeRenderer as any).call(this, code, language, isEscaped);
  };

  // 使用 marked.parse 的同步版本
  // marked 17+ 默认返回 Promise，但我们可以使用 marked.parseSync 或 marked.parse 的同步模式
  // 这里我们使用 marked.parse 并假设它是同步的（对于简单情况）
  try {
    // 尝试同步解析
    const result = marked.parse(mdContent, {
      renderer,
      highlight: function (code: string, lang: string) {
        // 跳过 Mermaid 代码块的高亮
        if (lang === 'mermaid') {
          return code;
        }

        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang }).value;
          } catch (err) {
            console.warn(`Failed to highlight code with language ${lang}:`, err);
          }
        }
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      async: false, // 强制同步模式
    } as any);

    article.body = result as unknown as string;
  } catch (error) {
    console.error('Error converting Markdown to HTML:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    article.body = `<div class="error">Error converting Markdown: ${errorMessage}</div>`;
  }
};
