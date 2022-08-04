import React, { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { MainContext } from "@assets/hooks/useMain";
import translate from "@assets/utils/translate";
import '@fortawesome/fontawesome-svg-core/styles.css'
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
        date: (date?: Date, format: string = 'yyyy-mm-dd') => {
            if (!date) return '';

            return translate(format, {
                day: String(date.getDate()).padStart(2, '0'),
                month: String(date.getMonth()).padStart(2, '0'),
                year: String(date.getFullYear()).padStart(4, '0'),
            }, 'dates');
        },
    });

    useEffect(() => {
        const locale = localStorage.getItem('locale') || 'fr';
        document.documentElement.lang = locale;
        setLocale(locale);
    }, []);

    return <>
        <Head>
            <title>Jochlain - Blob des internets</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Abel&family=Caveat&family=Lato&display=swap" rel="stylesheet" />
        </Head>
        <MainContext.Provider value={store}>
            <Component {...pageProps} />
        </MainContext.Provider>
    </>;
}
