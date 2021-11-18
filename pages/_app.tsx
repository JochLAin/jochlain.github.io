import React, { useState } from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import MainContext from "../assets/contexts";
import translate from "../assets/utils/translate";
import "../stylesheets/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    const [locale, setLocale] = useState('fr');
    const store = Object.assign(
        { locale },
    );

    Object.assign(store, {
        setLocale: (locale: string) => {
            if (document?.body?.parentElement) {
                document.body.parentElement.lang = locale;
            }
            setLocale(locale);
        },
        translate: (message: string, parameters = {}, domain: string) => {
            return translate(message, parameters, domain, locale);
        },
    });

    return <>
        <Head>
            <title>Jochlain - GitHub</title>
        </Head>
        <MainContext.Provider value={store}>
            <Component {...pageProps} />
        </MainContext.Provider>
    </>;
}
