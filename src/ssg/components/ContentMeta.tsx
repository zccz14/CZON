import React from 'react';
import { getCategoryDisplayName } from '../utils/getCategoryDisplayName';
import { getLocalizedMetadata } from '../utils/getLocalizedMetadata';
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
  const date = props.file.metadata?.inferred_date || '--';
  const tags = metadata?.tags || [];
  const category = props.file.category;

  return (
    <header className="content-header mb-4 pb-2 border-b">
      <h2 className="text-2xl font-bold mb-2">
        <a href={`${props.file.metadata?.slug}.html`}>{title}</a>
      </h2>
      <p className="font-semibold">
        {getCategoryDisplayName(props.ctx.site, category, props.lang)}
      </p>
      <blockquote>{summary}</blockquote>
      <div>📅 {date}</div>
      <div className="tags">
        <TagList tags={tags} />
      </div>
    </header>
  );
};
