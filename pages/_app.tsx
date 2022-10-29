import React from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import '@fortawesome/fontawesome-svg-core/styles.css'
import useMain, { MainProvider } from "@assets/hooks/useMain";
import "../assets/stylesheets/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    return <MainProvider>
        <HtmlHead />
        <Component {...pageProps} />
    </MainProvider>;
}

function HtmlHead() {
    const main = useMain();

    return <Head>
        <title>{main.translate('Jochlain - Internets\' blob')}</title>
        <meta name="description" content={main.translate('Jocelyn Faihy\'s portfolio')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>;
}
