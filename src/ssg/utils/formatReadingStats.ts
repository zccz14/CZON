/**
 * 格式化字数和阅读时长的显示文案（多语言）
 */
export function formatReadingStats(
  wordCount: number,
  readingTimeMinutes: number,
  lang: string
): string {
  const formattedCount = wordCount.toLocaleString('en-US');

  if (lang.startsWith('zh')) {
    return `${formattedCount} 字 · 约 ${readingTimeMinutes} 分钟阅读`;
  }
  if (lang.startsWith('ja')) {
    return `${formattedCount} 文字 · 約 ${readingTimeMinutes} 分で読めます`;
  }
  if (lang.startsWith('ko')) {
    return `${formattedCount} 자 · 약 ${readingTimeMinutes} 분 소요`;
  }

  const wordLabel = wordCount === 1 ? 'word' : 'words';
  return `${formattedCount} ${wordLabel} · ~${readingTimeMinutes} min read`;
}
