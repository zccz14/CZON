import { readFile } from 'fs/promises';
import { Marked, Token, Tokens } from 'marked';

/**
 * 独立的 marked 实例，仅用于链接检查的词法分析。
 * 不加载 marked-footnote / marked-katex 等全局扩展，避免扩展 tokenizer 的兼容性问题。
 */
const lexer = new Marked({ gfm: true });
import path from 'path';
import { findMarkdownEntries } from '../findEntries';
import { INPUT_DIR } from '../paths';
import { isExists } from '../utils/isExists';

export interface LinkIssue {
  /** 源文件相对路径 */
  file: string;
  /** 行号 */
  line: number;
  /** 原始链接文本（如 [text](href) 或 ![alt](href)） */
  raw: string;
  /** 链接目标 href */
  href: string;
  /** 问题类型 */
  type: 'dead-link' | 'absolute-path';
  /** 问题描述 */
  message: string;
}

interface ExtractedLink {
  raw: string;
  href: string;
  isImage: boolean;
}

/**
 * 递归遍历 marked token 树，收集所有真实的 link 和 image token。
 * 自动跳过 code（代码块）和 codespan（行内代码）中的内容。
 */
function collectLinksFromTokens(tokens: Token[], results: ExtractedLink[]): void {
  for (const token of tokens) {
    if (token.type === 'link') {
      const link = token as Tokens.Link;
      // 跳过脚注引用 — 无 marked-footnote 时 [^label] 会被误解析为链接
      if (/^\[\^[^\]]+\]/.test(link.raw)) continue;
      results.push({ raw: link.raw, href: link.href, isImage: false });
    } else if (token.type === 'image') {
      const image = token as Tokens.Image;
      results.push({ raw: image.raw, href: image.href, isImage: true });
    }

    // 跳过 code / codespan — 其中的链接语法不是真正的链接
    if (token.type === 'code' || token.type === 'codespan') continue;

    // 递归子 token
    if ('tokens' in token && Array.isArray(token.tokens)) {
      collectLinksFromTokens(token.tokens, results);
    }

    // list -> items
    if (token.type === 'list') {
      const list = token as Tokens.List;
      for (const item of list.items) {
        if (item.tokens) {
          collectLinksFromTokens(item.tokens, results);
        }
      }
    }

    // table -> header cells + row cells
    if (token.type === 'table') {
      const table = token as Tokens.Table;
      for (const cell of table.header) {
        if (cell.tokens) {
          collectLinksFromTokens(cell.tokens, results);
        }
      }
      for (const row of table.rows) {
        for (const cell of row) {
          if (cell.tokens) {
            collectLinksFromTokens(cell.tokens, results);
          }
        }
      }
    }
  }
}

/**
 * 根据 token 的 raw 字段在原始内容中定位行号（1-based）。
 * 使用递增的 searchIndex 来正确处理重复出现的相同 raw 文本。
 */
function findLineNumber(
  content: string,
  raw: string,
  startIndex: number
): { line: number; nextIndex: number } {
  const idx = content.indexOf(raw, startIndex);
  if (idx === -1) {
    return { line: -1, nextIndex: startIndex };
  }
  const line = content.substring(0, idx).split('\n').length;
  return { line, nextIndex: idx + raw.length };
}

/**
 * 使用 marked 词法分析器从 Markdown 内容中提取所有真实链接及其行号。
 * 代码块和行内代码中的链接语法会被正确忽略。
 */
function extractLinksWithLineNumbers(
  content: string
): Array<{ line: number; raw: string; href: string; isImage: boolean }> {
  const tokens = lexer.lexer(content);
  const extracted: ExtractedLink[] = [];
  collectLinksFromTokens(tokens, extracted);

  // 通过 raw 字段在原始内容中搜索来确定行号
  const results: Array<{ line: number; raw: string; href: string; isImage: boolean }> = [];
  let searchIndex = 0;
  for (const link of extracted) {
    const { line, nextIndex } = findLineNumber(content, link.raw, searchIndex);
    searchIndex = nextIndex;
    results.push({ line, raw: link.raw, href: link.href, isImage: link.isImage });
  }

  return results;
}

/**
 * 检查所有 Markdown 文件中的超链接
 * @returns 发现的问题列表
 */
export async function checkLinks(): Promise<LinkIssue[]> {
  console.log('🔍 正在扫描 Markdown 文件...');

  const markdownFiles = await findMarkdownEntries(INPUT_DIR, { aigc: true });
  const issues: LinkIssue[] = [];

  // 构建已知文件集合，用于死链接检测
  const knownFiles = new Set(markdownFiles);

  console.log(`📄 发现 ${markdownFiles.length} 个 Markdown 文件\n`);

  for (const filePath of markdownFiles) {
    const fullPath = path.join(INPUT_DIR, filePath);
    const content = await readFile(fullPath, 'utf-8');
    const links = extractLinksWithLineNumbers(content);

    for (const link of links) {
      // 跳过外部 URL
      if (URL.canParse(link.href)) continue;
      // 跳过锚点链接
      if (link.href.startsWith('#')) continue;

      // 去掉锚点部分
      const hrefWithoutHash = link.href.split('#')[0];
      if (!hrefWithoutHash) continue;

      // 检查 1: 路径格式规范 — 不应使用 / 开头的绝对路径
      if (hrefWithoutHash.startsWith('/')) {
        issues.push({
          file: filePath,
          line: link.line,
          raw: link.raw,
          href: link.href,
          type: 'absolute-path',
          message: '不应使用 / 开头的绝对路径，请使用相对路径',
        });
        // 绝对路径无法正确解析，跳过死链接检测
        continue;
      }

      // 解析相对路径
      const resolvedRelative = path.normalize(path.join(path.dirname(filePath), hrefWithoutHash));

      // 检查是否跳出项目目录
      if (resolvedRelative.startsWith('..')) {
        issues.push({
          file: filePath,
          line: link.line,
          raw: link.raw,
          href: link.href,
          type: 'dead-link',
          message: '链接指向项目目录之外',
        });
        continue;
      }

      // 检查 2: 死链接检测 — 目标文件是否存在
      // 先检查已知的 Markdown 文件集合
      if (hrefWithoutHash.endsWith('.md') && knownFiles.has(resolvedRelative)) {
        continue; // 文件存在于已知集合中
      }

      // 再检查文件系统
      const resolvedFullPath = path.join(INPUT_DIR, resolvedRelative);
      if (!(await isExists(resolvedFullPath))) {
        issues.push({
          file: filePath,
          line: link.line,
          raw: link.raw,
          href: link.href,
          type: 'dead-link',
          message: '目标文件不存在',
        });
      }
    }
  }

  return issues;
}

/**
 * 格式化并输出检查结果到终端
 */
export function formatCheckResults(issues: LinkIssue[]): string {
  if (issues.length === 0) {
    return '✅ 未发现链接问题。';
  }

  const lines: string[] = [];

  // 按文件分组
  const grouped = new Map<string, LinkIssue[]>();
  for (const issue of issues) {
    const list = grouped.get(issue.file) ?? [];
    list.push(issue);
    grouped.set(issue.file, list);
  }

  for (const [file, fileIssues] of grouped) {
    lines.push(file);
    for (const issue of fileIssues) {
      const icon = issue.type === 'dead-link' ? '✖' : '⚠';
      lines.push(`  line ${issue.line}: ${icon} ${issue.raw}`);
      lines.push(`    ${issue.message}`);
    }
    lines.push('');
  }

  const deadCount = issues.filter(i => i.type === 'dead-link').length;
  const formatCount = issues.filter(i => i.type === 'absolute-path').length;

  const parts: string[] = [];
  if (deadCount > 0) parts.push(`${deadCount} 个死链接`);
  if (formatCount > 0) parts.push(`${formatCount} 个路径格式问题`);

  lines.push(`发现 ${issues.length} 个问题（${parts.join('，')}），涉及 ${grouped.size} 个文件。`);

  return lines.join('\n');
}
