import React from 'react';
import Hero from "../assets/components/hero";
import Hexagons from "../assets/components/hexagons";
import TimelineTable from "../assets/components/timeline/table";

export default function Index() {
    return <>
        <main id="main">
            <Hero />
            <TimelineTable />
            <Hexagons />
        </main>
        <footer id="main-footer">
            JOCELYN FAIHY — 2018 – {new Date().getFullYear()}
        </footer>
    </>;
}
