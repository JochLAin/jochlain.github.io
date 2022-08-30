import React, { useEffect, useRef, useState } from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { MainContext } from "@assets/hooks/useMain";
import translate from "@assets/utils/translate";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../stylesheets/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    const [locale, setLocale] = useState('fr');
    const rendered = useRef<boolean>(false);
    const store = Object.assign(
        { locale },
    );

    Object.assign(store, {
        initialize: (locale: string) => {
            if (!rendered.current) {
                store.setLocale(locale);
            }
        },
        setLocale: (value: string) => {
            if (value !== locale) {
                if (document?.documentElement) {
                    document.documentElement.lang = value;
                }
                localStorage.setItem('locale', value);
                setLocale(value);
                history.replaceState({}, '', `/${value}`);
            }
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
        rendered.current = true;
    }, []);

    return <>
        <Head>
            <title>{store.translate('Jochlain - Internets\' blob')}</title>
            <meta name="description" content={store.translate('Jocelyn Faihy\'s portfolio')} />
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
