import React from 'react';
import Hero from "../assets/components/hero";
import TimelineTable from "../assets/components/timeline/table";
import { EXPERIENCES } from "../assets/constant";

export default function Index() {
    return <>
        <main id="main">
            <Hero />
            <TimelineTable experiences={EXPERIENCES} />
        </main>
        <footer id="main-footer">
            JOCHLAIN — 2018 – {new Date().getFullYear()}
        </footer>
    </>;
}
