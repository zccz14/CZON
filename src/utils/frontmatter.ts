import { parse } from 'yaml';

const frontmatterRegex = /^---\n([\s\S]*?)\n---/;

export const parseFrontmatter = (content: string): { frontmatter: any; body: string } => {
  const match = content.match(frontmatterRegex);
  if (match) {
    const frontmatterContent = match[1];
    const body = content.slice(match[0].length).trim();
    return { frontmatter: parse(frontmatterContent.trim()), body };
  }
  return { frontmatter: {}, body: content };
};

/**
 * 移除 Markdown 内容中的 YAML FrontMatter，只返回正文
 */
export const stripFrontmatter = (content: string): string => {
  const match = content.match(frontmatterRegex);
  if (match) {
    return content.slice(match[0].length).trim();
  }
  return content;
};
