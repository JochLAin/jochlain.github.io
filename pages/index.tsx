import React from 'react';
import Head from "next/head";
import Portfolio from "@portfolio/components";

export default function Index() {
    return <>
        <Head>
            <title>Jochlain - Welcome</title>
        </Head>
        <main>
            <article>
                <section style={{ backgroundColor: '#F00' }} />
                <section style={{ backgroundColor: '#F66' }} />
            </article>
            <article>
                <section style={{ backgroundColor: '#0F0' }} />
                <section style={{ backgroundColor: '#6F6' }} />
            </article>
            <article>
                <section style={{ backgroundColor: '#00F' }} />
                <section style={{ backgroundColor: '#66F' }} />
                <section style={{ backgroundColor: '#AAF' }} />
            </article>
            <article style={{ backgroundColor: '#333' }} />
        </main>
    </>;
}
