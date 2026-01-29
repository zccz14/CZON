import React from 'react';
import { NavLink } from '../../types';

const mobileStyle = `
/* Mobile hamburger menu styles */
.nav-links-mobile {
  display: block;
}

@media (min-width: 768px) {
  .nav-links-mobile {
    display: none;
  }
}

.nav-links-mobile-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-links-mobile-trigger:hover {
  background: var(--ls-bg-hover);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Hamburger icon animation */
.nav-links-hamburger {
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.nav-links-hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: all 0.3s ease;
}

#nav-links-toggle:checked ~ .nav-links-mobile-trigger .nav-links-hamburger span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

#nav-links-toggle:checked ~ .nav-links-mobile-trigger .nav-links-hamburger span:nth-child(2) {
  opacity: 0;
}

#nav-links-toggle:checked ~ .nav-links-mobile-trigger .nav-links-hamburger span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile dropdown */
.nav-links-dropdown {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

#nav-links-toggle:checked ~ .nav-links-dropdown {
  max-height: 80vh;
  opacity: 1;
  overflow-y: auto;
}

.nav-links-dropdown-list {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.nav-link-mobile-item {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.15s ease;
}

.nav-link-mobile-item:hover {
  background: var(--ls-bg-hover);
  color: var(--text-primary);
}
`;

const desktopStyle = `
/* Desktop nav styles */
.nav-links-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-links-desktop {
    display: flex;
    max-width: 40vw;
    overflow: hidden;
  }
}

.nav-links-desktop-list {
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
}

.nav-link-item {
  white-space: nowrap;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.nav-link-item:hover {
  background: var(--ls-bg-hover);
  color: var(--text-primary);
}

/* Desktop overflow menu */
.nav-links-more-container {
  position: relative;
}

.nav-links-more-trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

.nav-links-more-trigger:hover {
  background: var(--ls-bg-hover);
  color: var(--text-primary);
}

.nav-links-more-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease;
}

#nav-links-more-toggle:checked ~ .nav-links-more-trigger .nav-links-more-icon {
  transform: rotate(180deg);
}

.nav-links-more-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  min-width: 12rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
}

#nav-links-more-toggle:checked ~ .nav-links-more-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-links-more-list {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.nav-link-more-item {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.15s ease;
}

.nav-link-more-item:hover {
  background: var(--ls-bg-hover);
  color: var(--text-primary);
}
`;

/**
 * 移动端汉堡菜单导航组件
 * 仅在移动端显示（< 768px）
 */
export const NavLinksMobile: React.FC<{
  navLinks: NavLink[];
}> = ({ navLinks }) => {
  if (!navLinks || navLinks.length === 0) {
    return null;
  }

  return (
    <nav className="nav-links-mobile" aria-label="Mobile navigation">
      <style>{mobileStyle}</style>
      <input id="nav-links-toggle" type="checkbox" className="hidden" aria-hidden="true" />
      <label
        htmlFor="nav-links-toggle"
        className="nav-links-mobile-trigger"
        aria-label="Toggle navigation menu"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="nav-links-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <div className="nav-links-dropdown" role="menu" aria-label="Navigation links">
        <div className="nav-links-dropdown-list">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link-mobile-item" role="menuitem">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

/**
 * 计算在 40% 宽度内可以显示的链接数量
 * 由于是 SSG，这里使用固定值，假设每个链接平均宽度约 100px
 * 在 40vw 下大约可以显示 4-6 个链接
 */
const MAX_VISIBLE_LINKS = 5;

/**
 * 桌面端导航组件
 * 仅在桌面端显示（>= 768px），最大宽度 40vw
 */
export const NavLinksDesktop: React.FC<{
  navLinks: NavLink[];
}> = ({ navLinks }) => {
  if (!navLinks || navLinks.length === 0) {
    return null;
  }

  const visibleLinks = navLinks.slice(0, MAX_VISIBLE_LINKS);
  const overflowLinks = navLinks.slice(MAX_VISIBLE_LINKS);
  const hasOverflow = overflowLinks.length > 0;

  return (
    <nav className="nav-links-desktop" aria-label="Main navigation">
      <style>{desktopStyle}</style>
      <div className="nav-links-desktop-list">
        {visibleLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-link-item">
            {link.title}
          </a>
        ))}
      </div>

      {/* Overflow menu for desktop */}
      {hasOverflow && (
        <div className="nav-links-more-container">
          <input id="nav-links-more-toggle" type="checkbox" className="hidden" aria-hidden="true" />
          <label
            htmlFor="nav-links-more-toggle"
            className="nav-links-more-trigger"
            aria-label="More navigation links"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>More</span>
            <svg
              className="nav-links-more-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
          <div
            className="nav-links-more-dropdown"
            role="menu"
            aria-label="Additional navigation links"
          >
            <div className="nav-links-more-list">
              {overflowLinks.map((link, index) => (
                <a key={index} href={link.href} className="nav-link-more-item" role="menuitem">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
