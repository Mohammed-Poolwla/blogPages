/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">

      <Head >
      <meta name="google-adsense-account" content="ca-pub-9979240102739736" />
      
   {/* {   <!-- Google tag (gtag.js) -->} */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-BTFC14534W"/>
<Script id="google-analytics">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BTFC14534W');
  `}
</Script>
        </Head>
      <body className="antialiased">
        
        <Main />
        <NextScript />
        
        <Script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js" />
      </body>
    </Html>
  );
}
