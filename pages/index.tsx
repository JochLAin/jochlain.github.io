import React from 'react';
import Head from "next/head";
import Footer from "../assets/components/blocks/footer";
import Hero from "../assets/components/blocks/hero";
import TimelineTable from "../assets/components/blocks/timeline/table";

export default function Index() {
    return <>
        <Head>
            <title>Jochlain - Welcome</title>
        </Head>
        <main id="main">
            <Hero />
            <TimelineTable />
            <Footer />
        </main>
    </>;
}
