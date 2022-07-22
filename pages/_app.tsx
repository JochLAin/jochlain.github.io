import React, { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { MainContext } from "@assets/hooks/useMain";
import translate from "@assets/utils/translate";
import "../stylesheets/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    const [locale, setLocale] = useState('fr');
    const store = Object.assign(
        { locale },
    );

    Object.assign(store, {
        setLocale: (locale: string) => {
            if (document?.documentElement) {
                document.documentElement.lang = locale;
            }
            setLocale(locale);
        },
        translate: (message: string, parameters = {}, domain: string) => {
            return translate(message, parameters, domain, locale);
        },
    });

    useEffect(() => {
        document.documentElement.lang = locale;
        setLocale(locale);
    }, []);

    return <>
        <Head>
            <title>Jochlain - Blob des internets</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MainContext.Provider value={store}>
            <Component {...pageProps} />
        </MainContext.Provider>
    </>;
}
