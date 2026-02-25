import { dirname, resolve } from 'node:path';
import React from 'react';
import { IArticleContent, IRenderContext } from '../types';
import { Analytics } from './components/Analytics';
import { ContentMeta } from './components/ContentMeta';
import { CZONFooter } from './components/CZONFooter';
import { CZONHeader } from './components/CZONHeader';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Navigator } from './components/Navigator';
import { PageLayout } from './layouts/PageLayout';
import { getFaviconUrlFrom, getCustomStyleUrlFrom, getResourceUrlFrom } from './resourceMap';
import { style } from './style';
import { getLocalizedMetadata } from './utils/getLocalizedMetadata';

export const ContentPage: React.FC<{
  ctx: IRenderContext;
  file: IRenderContext['site']['files'][0];
  lang: string;
  content: IArticleContent;
}> = props => {
  const metadata = getLocalizedMetadata(props.file, props.lang);
  const title = metadata?.title || '(no title)';
  const summary = metadata?.summary || '';
  const date = props.file.metadata?.inferred_date || '--';
  const tags = metadata?.tags || [];
  const category = props.file.category;

  const relatedContents = props.ctx.site.files.filter(
    f => f.category === category && f.path !== props.file.path
  );

  // 查找指向当前文章的其他文章
  const thisPath = resolve('/', props.file.path);
  const referencedFiles = props.ctx.site.files.filter(f =>
    f.links.some(link => resolve('/', dirname(f.path), link) === thisPath)
  );

  const faviconUrl = getFaviconUrlFrom(props.ctx.path);
  const customStyleUrl = props.ctx.hasCustomStyle ? getCustomStyleUrlFrom(props.ctx.path) : null;

  return (
    <html lang={props.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href={faviconUrl} type="image/x-icon" />
        {
          // 使用 short_summary 作为 description，有利于 SEO 和社交分享预览
          metadata?.short_summary && (
            <meta name="description" content={metadata?.short_summary.slice(0, 150)} />
          )
        }
        {
          // Keywords meta tag for SEO (using tags, if available)
          tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />
        }
        <Analytics ctx={props.ctx} />
        <script src={getResourceUrlFrom(props.ctx.path, 'tailwindcss.js')}></script>
        <style>{style}</style>
        {customStyleUrl && <link rel="stylesheet" href={customStyleUrl} />}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            const saved = localStorage.getItem('theme');
            const theme = saved || 'auto';
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDark = theme === 'auto' ? prefersDark : theme === 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            if (isDark) {
              document.documentElement.classList.add('dark');
            }
          })();
        `,
          }}
        />
      </head>
      <body>
        <PageLayout
          header={<CZONHeader ctx={props.ctx} lang={props.lang} file={props.file} />}
          navigator={
            <nav className="sidebar border-r">
              <Navigator ctx={props.ctx} file={props.file} lang={props.lang} />
            </nav>
          }
          rightSidebar={
            props.content.headings.length > 0 ? (
              <aside className="sidebar border-l">
                <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
                {props.content.headings.map(heading => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block ms-${(heading.depth - 1) * 4} mb-2 border-b`}
                    dangerouslySetInnerHTML={{ __html: heading.html }}
                  />
                ))}
              </aside>
            ) : undefined
          }
          main={
            <main className="content max-w-4xl mx-auto my-8 px-4">
              <ContentMeta ctx={props.ctx} file={props.file} lang={props.lang} />
              {props.content.headings.length > 0 && (
                <div className="border-b mb-4 pb-2 xl:hidden">
                  <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
                  {props.content.headings.map(heading => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      // 按照 heading.depth 设置缩进
                      className={`block ps-${heading.depth * 4} mb-2`}
                      dangerouslySetInnerHTML={{ __html: heading.html }}
                    />
                  ))}
                </div>
              )}

              <div className="content-body">
                <article dangerouslySetInnerHTML={{ __html: props.content.body }} />
                {/* 阅读同类文章 */}
                {relatedContents.length > 0 && (
                  <>
                    <h2>See Also</h2>
                    <ul>
                      {relatedContents.map(f => {
                        const theMetadata = getLocalizedMetadata(f, props.lang);
                        return (
                          <li key={f.path}>
                            <a href={`${f.metadata?.slug}.html`}>
                              {theMetadata?.title || '(no title)'}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                {/* 反向引用 */}
                {referencedFiles.length > 0 && (
                  <>
                    <h2>Referenced By</h2>
                    <ul>
                      {referencedFiles.map(f => {
                        const theMetadata = getLocalizedMetadata(f, props.lang);
                        return (
                          <li key={f.path}>
                            <a href={`${f.metadata?.slug}.html`}>
                              {theMetadata?.title || '(no title)'}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
              <footer className="footer">
                <LanguageSwitcher ctx={props.ctx} lang={props.lang} file={props.file} />
                <CZONFooter />
              </footer>
            </main>
          }
        />

        {/* Share feature */}
        <button className="share-float-btn" id="share-float-btn">
          Share
        </button>
        <div className="share-modal-overlay" id="share-modal-overlay">
          <div className="share-modal">
            <img
              className="share-preview"
              id="share-preview"
              alt="Share preview"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
            <div className="share-modal-actions">
              <button className="share-download-btn" id="share-download-btn">
                Save Image
              </button>
              <button className="share-close-btn" id="share-close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
        <div className="share-card" id="share-card">
          <div className="share-card-header">
            <div className="share-card-header-left">
              <div className="share-card-site" id="share-card-site"></div>
              <div className="share-card-title" id="share-card-title"></div>
            </div>
            <div className="share-card-qr">
              <canvas id="share-qr-canvas" width="64" height="64"></canvas>
              <span className="share-card-qr-hint">Scan to read</span>
            </div>
          </div>
          <div className="share-card-divider"></div>
          <div className="share-card-body" id="share-card-body"></div>
        </div>
        <script
          id="qrcode-lib"
          src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"
          defer
        ></script>
        <script
          id="html2canvas-lib"
          src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  var floatBtn = document.getElementById('share-float-btn');
  var overlay = document.getElementById('share-modal-overlay');
  var preview = document.getElementById('share-preview');
  var downloadBtn = document.getElementById('share-download-btn');
  var closeBtn = document.getElementById('share-close-btn');
  var shareCard = document.getElementById('share-card');
  var cardSite = document.getElementById('share-card-site');
  var cardTitle = document.getElementById('share-card-title');
  var cardBody = document.getElementById('share-card-body');
  var qrCanvas = document.getElementById('share-qr-canvas');
  var savedRange = null;
  var articleTitle = ${JSON.stringify(title)};
  var siteName = ${JSON.stringify(props.ctx.site.options?.site?.title || 'CZON')};

  // Detect text selection within .content-body
  document.addEventListener('selectionchange', function() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
      floatBtn.style.display = 'none';
      return;
    }
    var range = sel.getRangeAt(0);
    var container = document.querySelector('.content-body');
    if (!container || !container.contains(range.commonAncestorContainer)) {
      floatBtn.style.display = 'none';
      return;
    }
    var text = sel.toString().trim();
    if (!text) {
      floatBtn.style.display = 'none';
      return;
    }
    savedRange = range.cloneRange();
    var rect = range.getBoundingClientRect();
    floatBtn.style.display = 'block';
    floatBtn.style.top = (window.scrollY + rect.bottom + 6) + 'px';
    floatBtn.style.left = (window.scrollX + rect.left + rect.width / 2 - 30) + 'px';
  });

  floatBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!savedRange) return;
    renderShareCard(savedRange);
    floatBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', function() {
    overlay.classList.remove('active');
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  downloadBtn.addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = preview.src;
    a.download = 'share.png';
    a.click();
  });

  function renderQR() {
    if (typeof qrcode === 'undefined') return;
    var size = 64;
    var qr = qrcode(0, 'M');
    qr.addData(window.location.href);
    qr.make();
    var moduleCount = qr.getModuleCount();
    var cellSize = size / moduleCount;
    var ctx = qrCanvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#1a1a1a';
    for (var r = 0; r < moduleCount; r++) {
      for (var c = 0; c < moduleCount; c++) {
        if (qr.isDark(r, c)) {
          ctx.fillRect(c * cellSize, r * cellSize, cellSize + 0.5, cellSize + 0.5);
        }
      }
    }
  }

  function renderShareCard(range) {
    // Populate card content
    cardSite.textContent = siteName;
    cardTitle.textContent = articleTitle;

    // Clone selected DOM fragment with rich formatting
    var fragment = range.cloneContents();
    cardBody.innerHTML = '';
    cardBody.appendChild(fragment);

    // Copy computed styles for elements that need them (e.g. KaTeX)
    var allStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
    var styleClones = [];
    allStyles.forEach(function(s) {
      styleClones.push(s.cloneNode(true));
    });

    // Render QR code
    renderQR();

    // Show card for html2canvas to capture
    shareCard.classList.add('rendering');

    // Wait a frame for layout
    requestAnimationFrame(function() {
      // Enforce minimum 3:4 aspect ratio
      var cardW = shareCard.offsetWidth;
      var cardH = shareCard.offsetHeight;
      var minH = Math.round(cardW * 4 / 3);
      if (cardH < minH) {
        shareCard.style.minHeight = minH + 'px';
      }

      html2canvas(shareCard, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      }).then(function(canvas) {
        shareCard.classList.remove('rendering');
        shareCard.style.minHeight = '';

        preview.src = canvas.toDataURL('image/png');
        overlay.classList.add('active');
      }).catch(function(err) {
        console.error('Share card render error:', err);
        shareCard.classList.remove('rendering');
        shareCard.style.minHeight = '';
      });
    });
  }
})();
`,
          }}
        />

        <script
          id="hljs-lib"
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
          defer
        ></script>
        <script>{`
        document.getElementById('hljs-lib').addEventListener('load', () => {
            console.log('Highlight.js loaded');
            hljs.highlightAll();
        });
        `}</script>
        <script
          id="mermaid-lib"
          src="https://cdn.jsdelivr.net/npm/mermaid@11.4.0/dist/mermaid.min.js"
          defer
        ></script>
        <script>{`
        function runMermaid() {
            mermaid.initialize({
              startOnLoad: true,
              theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
              securityLevel: 'strict',
              flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis',
              },
              sequence: {
                useMaxWidth: true,
                diagramMarginX: 50,
                diagramMarginY: 10,
                actorMargin: 50,
              },
              gantt: {
                useMaxWidth: true,
                barHeight: 20,
                barGap: 4,
              },
            });
            mermaid.run().catch(err => {
              console.error('Mermaid render error:', err);
            });
        }
        document.getElementById('mermaid-lib').addEventListener('load', () => {
            console.log('Mermaid loaded');
            runMermaid();
        });
        `}</script>
        <script>{`
        // 异步加载CSS函数
        function loadCSS(href, id) {
          return new Promise((resolve) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            if (id) link.id = id;
            link.onload = resolve;
            document.head.appendChild(link);
          });
        }
        
        // 页面主要内容加载完成后加载非关键CSS
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
        } else {
          loadNonCriticalCSS();
        }
        
        function loadNonCriticalCSS() {
          // 延迟一点，确保首屏渲染完成
          setTimeout(() => {
            loadCSS("https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css", 'katex-css');
            const isDark = document.documentElement.classList.contains('dark');
            const hljsTheme = isDark
              ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css"
              : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css";
            loadCSS(hljsTheme, 'hljs-css');
          }, 300);
        }
        
        `}</script>
        <script>{`
        // 页面加载后将当前激活的导航链接滚动到可视区域
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', scrollActiveNavLink);
        } else {
          scrollActiveNavLink();
        }
        function scrollActiveNavLink() {
          var el = document.querySelector('.nav-link.active');
          if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
        `}</script>
        <script
          id="embla-lib"
          src="https://unpkg.com/embla-carousel/embla-carousel.umd.js"
          defer
        ></script>
        <script
          id="embla-autoplay-lib"
          src="https://unpkg.com/embla-carousel-autoplay/embla-carousel-autoplay.umd.js"
          defer
        ></script>
        <script>
          {`
          Promise.all([
            new Promise(resolve => {document.getElementById('embla-lib').addEventListener('load', resolve)}),
            new Promise(resolve => {document.getElementById('embla-autoplay-lib').addEventListener('load', resolve)}),
          ]).then(() => {
            console.log('Embla Carousel and Autoplay loaded');
            renderEmblaCarousels();
          });

          function renderEmblaCarousels() {
            // Detect image groups, make them carousels automatically
            Map.groupBy(document.querySelectorAll('.content-body img'), x => x.parentNode).entries().forEach(([container, images]) => {
                const outer = document.createElement('div');
                outer.classList.add('embla');
                container.appendChild(outer);
                
                const inner = document.createElement('div');
                inner.classList.add('embla__container');
                outer.appendChild(inner);

                images.forEach(img => {
                    container.removeChild(img);

                    const slide = document.createElement('div');
                    slide.classList.add('embla__slide');
                    
                    slide.appendChild(img);
                    inner.appendChild(slide);
                });

                EmblaCarousel(outer, { loop: true }, [EmblaCarouselAutoplay()]);
            });

          }
            `}
        </script>
      </body>
    </html>
  );
};
