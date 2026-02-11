import React from 'react';
import { getCategoryDisplayName } from '../utils/getCategoryDisplayName';
import { getLocalizedMetadata } from '../utils/getLocalizedMetadata';
import { formatReadingStats } from '../utils/formatReadingStats';
import { IRenderContext } from '../../types';
import { TagList } from './TagList';

export const ContentMeta: React.FC<{
  ctx: IRenderContext;
  file: IRenderContext['site']['files'][0];
  showShortSummary?: boolean;
  showSummary?: boolean;
  lang: string;
}> = props => {
  const metadata = getLocalizedMetadata(props.file, props.lang);
  const title = metadata?.title || '(no title)';
  const summary = metadata?.summary || '';
  const audience = metadata?.audience || '';
  const keyPoints = metadata?.key_points || [];
  const date = props.file.metadata?.inferred_date || '--';
  const tags = metadata?.tags || [];
  const category = props.file.category;

  // 从 ctx.contents 中查找对应的文章内容，获取字数和阅读时长
  const content = props.ctx.contents.find(
    c => c.file.path === props.file.path && c.lang === props.lang
  );
  const wordCount = content?.wordCount ?? 0;
  const readingTimeMinutes = content?.readingTimeMinutes ?? 0;

  return (
    <header className="content-header mb-4 pb-2 border-b">
      <h2 className="text-2xl font-bold mb-2">
        <a href={`${props.file.metadata?.slug}.html`}>{title}</a>
      </h2>
      <p className="font-semibold mb-2">
        {getCategoryDisplayName(props.ctx.site, category, props.lang)}
      </p>
      {audience && <div>👤 {audience}</div>}
      <blockquote>{summary}</blockquote>
      {keyPoints.length > 0 && (
        <ul className="key-points list-inside my-2">
          {keyPoints.slice(0, 5).map((point, index) => (
            <li key={index}>✨ {point}</li>
          ))}
        </ul>
      )}
      <div className="text-sm opacity-70 my-1">
        {date && date !== '--' && <span>📅 {date}</span>}
        {wordCount > 0 && (
          <span>
            {date && date !== '--' ? ' · ' : ''}
            {formatReadingStats(wordCount, readingTimeMinutes, props.lang)}
          </span>
        )}
      </div>
      <div className="tags">
        <TagList tags={tags} />
      </div>
    </header>
  );
};
