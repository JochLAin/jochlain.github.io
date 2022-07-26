import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {SyntheticEvent, useEffect} from 'react';
import Head from "next/head";
import Layout, { Screen } from "../assets/components/layout";
import { Hero, TimelineLine, TimelineTable } from "@portfolio/components";

export default function Index() {
    useEffect(() => {
        const onKeyPress = (evt: KeyboardEvent) => {
            if ('Escape' === evt.key) {
                document.body.classList.toggle('overview');
            }
        };

        document.addEventListener('keyup', onKeyPress);
        return () => {
            document.removeEventListener('keyup', onKeyPress);
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
            <Layout>
                <Screen id="presentation">
                    <Screen id="hero">
                        <Hero />
                    </Screen>
                    {/*<Screen id="aventure">*/}
                    {/*    <article style={{ backgroundColor: '#F88' }} />*/}
                    {/*</Screen>*/}
                </Screen>
                <Screen id="timeline">
                    <Screen id="timeline-line">
                        <TimelineLine />
                    </Screen>
                    <Screen id="timeline-table">
                        <TimelineTable />
                    </Screen>
                </Screen>
                {/*<Screen id="screen-3">*/}
                {/*    <Screen id="projects">*/}
                {/*        <article style={{ backgroundColor: '#44F' }} />*/}
                {/*    </Screen>*/}
                {/*    <Screen id="pixelart">*/}
                {/*        <article style={{ backgroundColor: '#77F' }} />*/}
                {/*    </Screen>*/}
                {/*    <Screen id="translator">*/}
                {/*        <article style={{ backgroundColor: '#AAF' }} />*/}
                {/*    </Screen>*/}
                {/*</Screen>*/}
                {/*<Screen id="screen-4">*/}
                {/*    <Screen id="references">*/}
                {/*        <article style={{ backgroundColor: '#333' }} />*/}
                {/*    </Screen>*/}
                {/*</Screen>*/}
            </Layout>
        </main>
    </>;
}
