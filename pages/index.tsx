import React from 'react';
import Head from "next/head";
import Footer from "../assets/components/blocks/footer";
import Hero from "../assets/components/blocks/hero";
import Timeline from "../assets/components/blocks/timeline";

export default function Index() {
    return <>
        <Head>
            <title>Jochlain - Welcome</title>
        </Head>
        <main id="main" className="block-wrapper">
            <Hero />
            <Timeline />
            <Footer />
        </main>
    </>;
}
