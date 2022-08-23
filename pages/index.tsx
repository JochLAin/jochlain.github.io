import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { SyntheticEvent, useEffect } from 'react';
import Head from "next/head";
import Layout from "../assets/components/layout";
import { AboutMe, Hero, Project, Skill, TimelineLine, TimelineTable } from "@portfolio/components";

const COMPONENTS = {
    about_me: AboutMe,
    hero: Hero,
    project: Project,
    timeline_line: TimelineLine,
    timeline_table: TimelineTable,
    skill: Skill,
};

const GRID = [
    ['hero'],
    ['about_me', 'skill'],
    ['timeline_line', 'timeline_table'],
    ['project'],
];

export default function Index() {
    useEffect(() => {
        // Open all details for desktop
        if (document.body.clientWidth > 1200) {
            document.querySelectorAll('details').forEach((details) => {
                details.open = true;
            });
        }
    }, []);

    const onClickFullscreen = (evt: SyntheticEvent) => {
        evt.preventDefault();
        document.body.classList.toggle('overview');
    };

    return <>
        <Head>
            <title>Jochlain - Blob des internets</title>
        </Head>
        <main>
            <button type="button" className="btn-fullscreen" onClick={onClickFullscreen}>
                <FontAwesomeIcon icon={duotone('bars-staggered')} />
            </button>
            <Layout components={COMPONENTS} grid={GRID} />
            {/*    <Screen id="line-1">*/}
            {/*        <Screen id="hero">*/}
            {/*            <Hero />*/}
            {/*        </Screen>*/}
            {/*        /!*<Screen id="aventure">*!/*/}
            {/*        /!*    <article style={{ backgroundColor: '#F88' }} />*!/*/}
            {/*        /!*</Screen>*!/*/}
            {/*    </Screen>*/}
            {/*    <Screen id="line-2">*/}
            {/*        <Screen id="about">*/}
            {/*            <AboutMe />*/}
            {/*        </Screen>*/}
            {/*        <Screen id="skill">*/}
            {/*            <Skill />*/}
            {/*        </Screen>*/}
            {/*    </Screen>*/}
            {/*    <Screen id="line-3">*/}
            {/*        <Screen id="timeline-line">*/}
            {/*            <TimelineLine />*/}
            {/*        </Screen>*/}
            {/*        <Screen id="timeline-table">*/}
            {/*            <TimelineTable />*/}
            {/*        </Screen>*/}
            {/*    </Screen>*/}
            {/*    <Screen id="line-4">*/}
            {/*        <Screen id="projects">*/}
            {/*            <Project />*/}
            {/*        </Screen>*/}
            {/*    /!*    <Screen id="pixelart">*!/*/}
            {/*    /!*        <article style={{ backgroundColor: '#77F' }} />*!/*/}
            {/*    /!*    </Screen>*!/*/}
            {/*    /!*    <Screen id="translator">*!/*/}
            {/*    /!*        <article style={{ backgroundColor: '#AAF' }} />*!/*/}
            {/*    /!*    </Screen>*!/*/}
            {/*    </Screen>*/}
            {/*    /!*<Screen id="screen-4">*!/*/}
            {/*    /!*    <Screen id="references">*!/*/}
            {/*    /!*        <article style={{ backgroundColor: '#333' }} />*!/*/}
            {/*    /!*    </Screen>*!/*/}
            {/*    /!*</Screen>*!/*/}
            {/*</Layout>*/}
        </main>
    </>;
}
