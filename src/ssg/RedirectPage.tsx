import { dirname, relative } from 'node:path';
import React from 'react';
import { getFaviconUrlFrom } from './resourceMap';

export const RedirectPage: React.FC<{ from: string; to: string }> = props => {
  const toURL = relative(dirname(props.from), props.to);
  const faviconUrl = getFaviconUrlFrom(props.from);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="refresh" content={`0; url=${toURL}`} />
        <title>Redirecting...</title>
        <link rel="icon" href={faviconUrl} type="image/x-icon" />
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
        <p>
          Redirecting to <a href={toURL}>{toURL}</a>
        </p>
      </body>
    </html>
  );
};
