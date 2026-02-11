/**
 * 多语言感知的字数统计与阅读时长估算
 */

// CJK 字符正则：中文、日文假名、韩文
const CJK_REGEX = /[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;

/**
 * 从 Markdown 文本中剥离语法标记，保留可读文本
 */
function stripMarkdown(md: string): string {
  return (
    md
      // 移除代码块
      .replace(/```[\s\S]*?```/g, '')
      // 移除行内代码
      .replace(/`[^`]*`/g, '')
      // 移除 HTML 标签
      .replace(/<[^>]+>/g, '')
      // 移除图片 ![alt](url)
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      // 链接 [text](url) -> 保留 text
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      // 移除标题标记
      .replace(/^#{1,6}\s+/gm, '')
      // 移除粗体/斜体标记
      .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
      // 移除删除线
      .replace(/~~(.*?)~~/g, '$1')
      // 移除引用标记
      .replace(/^\s*>\s?/gm, '')
      // 移除水平线
      .replace(/^[-*_]{3,}\s*$/gm, '')
      // 移除列表标记
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
  );
}

export interface WordCountResult {
  /** 总字数（CJK 字符数 + 拉丁单词数） */
  total: number;
  /** CJK 字符数 */
  cjk: number;
  /** 拉丁单词数 */
  latin: number;
}

/**
 * 统计 Markdown 文本的字数（多语言感知）
 * @param markdownBody 去除 frontmatter 后的 Markdown 文本
 */
export function countWords(markdownBody: string): WordCountResult {
  const text = stripMarkdown(markdownBody);

  // 统计 CJK 字符
  const cjkMatches = text.match(CJK_REGEX);
  const cjk = cjkMatches ? cjkMatches.length : 0;

  // 移除 CJK 字符后，按空白分词统计拉丁单词
  const latinText = text.replace(CJK_REGEX, ' ').trim();
  const latinWords = latinText.split(/\s+/).filter(w => w.length > 0);
  const latin = latinWords.length;

  return { total: cjk + latin, cjk, latin };
}

// 阅读速度（字/分钟）
const CJK_WPM = 300;
const LATIN_WPM = 225;

/**
 * 估算阅读时长（分钟）
 * @param markdownBody 去除 frontmatter 后的 Markdown 文本
 */
export function estimateReadingTime(markdownBody: string): number {
  const { cjk, latin } = countWords(markdownBody);
  const minutes = cjk / CJK_WPM + latin / LATIN_WPM;
  return Math.max(1, Math.ceil(minutes));
}
