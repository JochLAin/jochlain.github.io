import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Caveat&family=Lato&display=swap" rel="stylesheet" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-992KW4CR8X`} />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-992KW4CR8X', { page_path: window.location.pathname, anonymize_ip: ${typeof document === 'undefined' || !document.cookie.includes('cookie_compliance')} });
      ` }} />
      <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="jochlain" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
}
