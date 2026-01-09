import { join } from 'node:path';
import React from 'react';
import { LANGUAGE_NAMES } from '../../languages';
import { IRenderContext } from '../../types';

export const LanguageSwitcher: React.FC<{
  ctx: IRenderContext;
  lang: string;
  file: IRenderContext['site']['files'][0];
}> = props => {
  return (
    <div className="language-switcher">
      <ul className="lang-list">
        {props.ctx.site.options.langs?.map(lang => {
          const isActive = lang === props.lang;
          const langName = LANGUAGE_NAMES[lang] || lang;
          const link = join('..', lang, `${props.file.metadata!.slug}.html`);
          return (
            <li className={`lang-item ${isActive ? 'active' : ''}`} key={lang}>
              <a href={link} className="lang-link">
                {langName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
