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
        gtag('config', '${process.env.GA_KEY}', { page_path: window.location.pathname, anonymize_ip: ${!document.cookie.includes('cookie_compliance')} });
      ` }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
}
