/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">

      <Head >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#050816" />
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
