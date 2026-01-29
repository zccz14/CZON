import React from 'react';
import { IRenderContext } from '../../types';

/**
 * Google Analytics and Microsoft Clarity integration component.
 * Renders tracking scripts in <head> when IDs are configured.
 */
export const Analytics: React.FC<{ ctx: IRenderContext }> = ({ ctx }) => {
  const gaID = ctx.site.options.site?.gaID;
  const clarityID = ctx.site.options.site?.clarityID;

  if (!gaID && !clarityID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      {gaID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaID}');
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity */}
      {clarityID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityID}");
            `,
          }}
        />
      )}
    </>
  );
};
