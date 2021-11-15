import React from 'react';
import Footer from "../assets/components/blocks/footer";
import Hero from "../assets/components/blocks/hero";
import TimelineTable from "../assets/components/blocks/timeline/table";

export default function Index() {
    return <>
        <main id="main">
            <Hero />
            <TimelineTable />
            <Footer />
        </main>
    </>;
}
