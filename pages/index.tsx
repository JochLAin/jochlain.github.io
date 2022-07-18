import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {SyntheticEvent, useEffect} from 'react';
import Head from "next/head";
import Layout, { Screen } from "../assets/components/layout";
import { Presentation } from "@portfolio/components";

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
                <FontAwesomeIcon icon={duotone('up-right-and-down-left-from-center')} />
            </button>
            <Layout>
                <Screen id="screen-1">
                    <Screen id="presentation">
                        <Presentation />
                    </Screen>
                    <Screen id="aventure">
                        <article style={{ backgroundColor: '#F88' }} />
                    </Screen>
                </Screen>
                <Screen id="screen-2">
                    <Screen id="timeline">
                        <article style={{ backgroundColor: '#5F5' }} />
                    </Screen>
                    <Screen id="timetable">
                        <article style={{ backgroundColor: '#8F8' }} />
                    </Screen>
                </Screen>
                <Screen id="screen-3">
                    <Screen id="projects">
                        <article style={{ backgroundColor: '#44F' }} />
                    </Screen>
                    <Screen id="pixelart">
                        <article style={{ backgroundColor: '#77F' }} />
                    </Screen>
                    <Screen id="translator">
                        <article style={{ backgroundColor: '#AAF' }} />
                    </Screen>
                </Screen>
                <Screen id="screen-4">
                    <Screen id="references">
                        <article style={{ backgroundColor: '#333' }} />
                    </Screen>
                </Screen>
            </Layout>
        </main>
    </>;
}
