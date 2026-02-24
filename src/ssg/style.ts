export const style = `
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --border-color: #e9ecef;
  --code-bg: #f8f9fa;
  --link-color: #007bff;
  --sidebar-bg: #ffffff;
  --tag-bg: #e9ecef;
  --tag-text: #495057;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --primary-color: #007bff;
  --text-on-primary: #ffffff;
  --text-strong: #ff5722;
}

html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #262626;
  --text-primary: #e5e5e5;
  --text-secondary: #a3a3a3;
  --border-color: #404040;
  --code-bg: #333333;
  --link-color: #60a5fa;
  --sidebar-bg: #262626;
  --tag-bg: #404040;
  --tag-text: #d4d4d4;
  --shadow-color: rgba(0, 0, 0, 0.5);
  --primary-color: #3b82f6;
  --text-on-primary: #ffffff;
  --text-strong: #ff8a65;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

html[lang='ar-SA'] {
  direction: rtl;
}

html.dark body {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

html:not(.dark) body {
  color: var(--text-primary);
  background: var(--bg-secondary);
}
.czon-header {
  background: var(--bg-secondary);
}
.anchor-heading {
  scroll-margin-top: 72px;
}

       .sidebar {
         background: var(--sidebar-bg);
         border-color: var(--border-color);
         border-bottom: 1px solid var(--border-color);
         padding: 2rem 1rem;
       }

      .sidebar-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .sidebar-header h1 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .sidebar-header p {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }

      .nav-item {
        margin-bottom: 0.5rem;
      }

      .nav-link {
        display: block;
        padding: 0.5rem 1rem;
        color: var(--text-secondary);
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.2s;
      }

      .nav-link:hover {
        background: var(--border-color);
        color: var(--text-primary);
      }

      .nav-link.active {
        background: var(--primary-color);
        color: var(--text-on-primary);
      }

      .nav-submenu {
        list-style: none;
        margin-left: 1rem;
        margin-top: 0.25rem;
      }

      blockquote {
        border-left: 4px solid var(--link-color);
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        background: var(--code-bg);
        color: var(--text-primary);
      }

      .content-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .content-header h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .content-header .meta {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }

      .content-body {
        font-size: 1.125rem;
        line-height: 1.8;
      }

      .content-body h1 {
        font-size: 2rem;
        margin: 2rem 0 1rem;
        color: var(--text-primary);
      }

      .content-body h2 {
        font-size: 1.75rem;
        margin: 1.75rem 0 0.875rem;
        color: var(--text-primary);
      }

      .content-body h3 {
        font-size: 1.5rem;
        margin: 1.5rem 0 0.75rem;
        color: var(--text-primary);
      }

      .content-body h4 {
        font-size: 1.25rem;
        margin: 1.25rem 0 0.625rem;
        color: var(--text-primary);
      }
      
      .content-body h5 {
        font-size: 1.125rem;
        margin: 1.125rem 0 0.5625rem;
        color: var(--text-primary);
      }

      .content-body h6 {
        font-size: 1rem;
        margin: 1rem 0 0.5rem;
        color: var(--text-primary);
      }

      .content-body p {
        margin: 1rem 0;
      }

      .content-body ul {
        list-style: disc outside;
      }

      .content-body ol {
        list-style: decimal outside;
      }

      .content-body ul,
      .content-body ol {
        margin: 1rem 0 1rem 2rem;
      }

      .content-body li {
        margin: 0.5rem 0;
      }

      .content-body strong {
        color: var(--text-strong);
      }

      .content-body blockquote {
        border-left: 4px solid var(--link-color);
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        background: var(--code-bg);
        color: var(--text-primary);
      }

      .content-body code {
        background: var(--code-bg);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: 0.875em;
        color: var(--text-primary);
      }

      .content-body pre {
        background: var(--code-bg);
        padding: 1rem;
        border-radius: 6px;
        overflow-x: auto;
        margin: 1rem 0;
      }

      .content-body pre code {
        background: none;
        padding: 0;
      }

      .content-body table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }

      .content-body th,
      .content-body td {
        border: 1px solid var(--border-color);
        padding: 0.75rem;
        text-align: left;
      }

      .content-body th {
        background: var(--code-bg);
        font-weight: 600;
      }

      .content-body img {
        max-width: 100%;
        height: auto;
        border-radius: 6px;
        margin: 1rem 0;
      }

      html.dark .content-body img {
        filter: brightness(0.85) contrast(1.1);
      }

      a {
        color: var(--link-color);
        text-decoration: none;
      }

      .content-body a:hover {
        text-decoration: underline;
      }

      .footer {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
        color: var(--text-secondary);
        font-size: 0.875rem;
        text-align: center;
      }

      .tags-list {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
        flex-wrap: wrap;
      }

      .tag-item {
        background: var(--tag-bg);
        color: var(--tag-text);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }

       @media (max-width: 768px) {

         .sidebar {
           width: 100%;
           height: auto;
           position: static;
           border-right: none;
           border-bottom: 1px solid var(--border-color);
         }

         .content {
           margin-left: 0;
           padding: 1.5rem;
           max-width: 100%;
         }
       }
      
      /* Mermaid diagram styles */
      .mermaid-diagram {
        margin: 1.5rem 0;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        overflow: hidden;
        background: var(--bg-primary);
      }

      .mermaid-placeholder {
        padding: 2rem;
        background: var(--code-bg);
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      }

      .mermaid-loading {
        color: var(--text-secondary);
        font-style: italic;
        font-size: 0.875rem;
      }

      .mermaid-error {
        color: #f87171;
        padding: 1rem;
        background: rgba(248, 113, 113, 0.1);
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .mermaid-source {
        display: none;
      }

      /* Ensure Mermaid diagrams are responsive */
      .mermaid-diagram svg {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
      }

.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

/* Share feature */
.share-float-btn {
  display: none;
  position: absolute;
  z-index: 1000;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  white-space: nowrap;
  line-height: 1.6;
}
.share-float-btn:hover {
  opacity: 0.9;
}

.share-modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
}
.share-modal-overlay.active {
  display: flex;
}
.share-modal {
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 20px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.share-modal canvas {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.share-modal-actions {
  display: flex;
  gap: 12px;
}
.share-modal-actions button {
  padding: 8px 24px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
}
.share-modal-actions .share-download-btn {
  background: var(--primary-color);
  color: #fff;
}
.share-modal-actions .share-close-btn {
  background: var(--tag-bg);
  color: var(--tag-text);
}
`;
