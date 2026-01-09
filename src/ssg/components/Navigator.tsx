import React from 'react';
import { IRenderContext } from '../../types';

export const Navigator: React.FC<{
  ctx: IRenderContext;
  file: IRenderContext['site']['files'][0];
}> = props => {
  return (
    <ul className="nav-list">
      {props.ctx.site.files.map(file => {
        const link = file.metadata!.slug + '.html';
        const isActive = props.file.hash === file.hash;

        return (
          <li className="nav-item" key={file.hash}>
            <a href={link} className={`nav-link ${isActive ? 'active' : ''}`}>
              {file.metadata!.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
