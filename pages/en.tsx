import React, { useLayoutEffect } from 'react';
import Head from "next/head";
import Portfolio from "@assets/components";
import useMain from "@assets/hooks/useMain";

export default function Index() {
    const main = useMain();

    useLayoutEffect(() => {
        main.initialize('en');
    }, [main]);

    return <>
        <Head>
            <title>{main.translate('Jochlain - Internets blob')}</title>
        </Head>
        <Portfolio />
    </>;
}
