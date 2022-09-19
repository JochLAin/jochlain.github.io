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
        <title>{main.translate('title')}</title>
        <meta name="description" content={main.translate('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>;
}
