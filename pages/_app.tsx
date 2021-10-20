import React, { useState } from "react";
import Head from "next/head";
import MainContext from "../assets/context";
import translate from "../assets/utils/translate";
import "../stylesheets/index.scss";

export default function App({ Component, pageProps }) {
    const [locale, setLocale] = useState('fr');
    const store = Object.assign(
        { locale },
    );

    Object.assign(store, {
        setLocale: (locale) => {
            document.body.parentElement.lang = locale;
            setLocale(locale);
        },
        translate: (message, parameters, domain) => {
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
