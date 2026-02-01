import React from 'react';
import { IRenderContext } from '../../types';
import { DarkModeSwitch } from './DarkModeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { NavLinksDesktop, NavLinksMobile } from './NavLinks';

export const CZONHeader: React.FC<{
  ctx: IRenderContext;
  lang?: string;
  file?: IRenderContext['site']['files'][0];
}> = props => {
  const navLinks = props.ctx.site.options.site?.navLinks;
  const hasNavLinks = navLinks && navLinks.length > 0;
  const home = props.ctx.site.options.site?.home ?? 'index.html';

  return (
    <header className="czon-header py-4 border-b flex justify-between items-center px-6">
      {/* Left section: hamburger menu (mobile) + title + nav (desktop) */}
      <div className="flex items-center gap-4">
        {/* Mobile hamburger menu - left of title */}
        {hasNavLinks && <NavLinksMobile navLinks={navLinks} />}
        <h1 className="text-2xl font-bold">
          <a href={home}>{props.ctx.site.options.site?.title ?? 'CZON'}</a>
        </h1>
        {/* Desktop nav - right of title */}
        {hasNavLinks && <NavLinksDesktop navLinks={navLinks} />}
      </div>
      {/* Right section: dark mode + language switch */}
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        {props.lang && <LanguageSwitch ctx={props.ctx} lang={props.lang} file={props.file} />}
      </div>
    </header>
  );
};
