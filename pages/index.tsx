import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {SyntheticEvent, useEffect} from 'react';
import Head from "next/head";
import Portfolio from "@portfolio/components";

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
        <button type="button" className="btn-fullscreen" onClick={onClickFullscreen}>
            <FontAwesomeIcon icon={duotone('up-right-and-down-left-from-center')} />
        </button>
        <main>
            <section>
                <section>
                    <article style={{ backgroundColor: '#F55' }} />
                </section>
                <section>
                    <article style={{ backgroundColor: '#F88' }} />
                </section>
            </section>
            <section>
                <section>
                    <article style={{ backgroundColor: '#5F5' }} />
                </section>
                <section>
                    <article style={{ backgroundColor: '#8F8' }} />
                </section>
            </section>
            <section>
                <section>
                    <article style={{ backgroundColor: '#44F' }} />
                </section>
                <section>
                    <article style={{ backgroundColor: '#77F' }} />
                </section>
                <section>
                    <article style={{ backgroundColor: '#AAF' }} />
                </section>
            </section>
            <section>
                <article style={{ backgroundColor: '#333' }} />
            </section>
        </main>
    </>;
}
