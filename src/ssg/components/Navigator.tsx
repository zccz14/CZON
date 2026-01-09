import React from 'react';
import { IRenderContext } from '../../types';

export const Navigator: React.FC<{
  ctx: IRenderContext;
  file: IRenderContext['site']['files'][0];
  lang: string;
}> = props => {
  return (
    <ul className="nav-list">
      {props.ctx.site.files.map(file => {
        const link = file.metadata!.slug + '.html';
        const isActive = props.file.hash === file.hash;
        const theContent = props.ctx.contents.find(
          c => c.lang === props.lang && c.hash === file.hash
        );
        const theTitle = theContent?.frontmatter?.title || file.metadata!.title || '(no title)';

        return (
          <li className="nav-item" key={file.hash}>
            <a href={link} className={`nav-link ${isActive ? 'active' : ''}`}>
              {theTitle}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
