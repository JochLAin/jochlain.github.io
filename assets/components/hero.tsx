import React, { CSSProperties, cloneElement, useEffect, useMemo, useState } from "react";
import useMain from "../hooks/useMain";

let debounce_timeout: number|undefined;
const debounce = (callback: Function, delay: number = 150) => {
    if (debounce_timeout) window.clearTimeout(debounce_timeout);
    debounce_timeout = window.setTimeout(callback, delay);
};

const HEXAGONS = {
    html: <Hexagon color="#dd4b25" icon="fab fa-html5" />,
    css: <Hexagon color="#2449d8" icon="fab fa-css3-alt" />,
    js: <Hexagon color="#000" text="#ead41c" icon="fab fa-js" />,
    less: <Hexagon color="#294f83" icon="fab fa-less" />,
    sass: <Hexagon color="#c36292" icon="fab fa-sass" />,

    bootstrap: <Hexagon color="#7b11f8" icon="fab fa-bootstrap" />,
    fortawesome: <Hexagon color="#318cdd" icon="fab fa-fort-awesome" />,
    react: <Hexagon color="#5ed3f3" icon="fab fa-react" />,
    vue: <Hexagon color="#40b280" icon="fab fa-vuejs" />,
    angular: <Hexagon color="#d2002f" icon="fab fa-angular" />,

    docker: <Hexagon color="#129fdb" icon="fab fa-docker" />,
    github: <Hexagon color="#e44c30" icon="fab fa-git" />,
    node: <Hexagon color="#84ba64" icon="fab fa-node-js" />,
    php: <Hexagon color="#8892bf" icon="fab fa-php" />,
    python: <Hexagon color="#224a6c" text="#f2ca41" icon="fab fa-python" />,

    facebook: <Hexagon color="#385490" icon="fab fa-facebook" />,
    twitter: <Hexagon color="#1c99e7" icon="fab fa-twitter" />,
    youtube: <Hexagon color="#ff0000" icon="fab fa-youtube" />,
    linkedin: <Hexagon color="#0274b3" icon="fab fa-linkedin" />,
    tiktok: <Hexagon color="#333" icon="fab fa-github" />,

    google: <Hexagon color="#4285f4" icon="fab fa-google" />,
    apple: <Hexagon color="#9ea8ae" icon="fab fa-apple" />,
    fb: <Hexagon color="#385490" icon="fab fa-facebook-square" />,
    amazon: <Hexagon color="#222b3a" text="#f19100" icon="fab fa-amazon" />,
    microsoft: <Hexagon color="#666" icon="fab fa-microsoft" />,

    // euro: <Hexagon color="#9e3a79" icon="far fa-euro-sign" />,
    // sterling: <Hexagon color="#bf3a43" icon="far fa-sterling-sign" />,
    // dollar: <Hexagon color="#1d8650" icon="far fa-dollar-sign" />,
    bitcoin: <Hexagon color="#c7a032" icon="fab fa-btc" />,
    ethereum: <Hexagon color="#5f628c" icon="fab fa-ethereum" />,

    skype: <Hexagon color="#01a7e5" icon="fab fa-skype" />,
    slack: <Hexagon color="#3e123f" icon="fab fa-slack" />,
    trello: <Hexagon color="#2e73b1" icon="fab fa-trello" />,

    mastercard: <Hexagon color="#FFF">
        <span className={`fas fa-circle fa-fw`} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-30%)', color: 'rgba(234, 150, 26)' }} />
        <span className={`fas fa-circle fa-fw`} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-80%)', color: 'rgba(223, 0, 26)' }} />
        <span className={`fas fa-circle fa-fw`} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-30%)', color: 'rgba(234, 150, 26, .5)' }} />
        <span className={`fas fa-circle fa-fw`} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-80%)', color: 'rgba(223, 0, 26, .5)' }} />
    </Hexagon>,
    visa: <Hexagon color="#004a85" icon="fab fa-cc-visa" />,
    amex: <Hexagon color="#0169c5" icon="fab fa-cc-amex" />,
    paypal: <Hexagon color="#032d7f" text="#0094d3" icon="fab fa-paypal" />,
    stripe: <Hexagon color="#5e56f2" icon="fab fa-stripe" />,
};

const HEXAGON_COMPONENTS = [...Object.values(HEXAGONS)];
const HEXAGON_DEFAULTS = [...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS].map((hexagon, idx) => cloneElement(hexagon, { key: `hexagon-${idx}` }));

export default function Hero() {
    const main = useMain();
    const [hexagons, setHexagons] = useState(HEXAGON_DEFAULTS);

    useEffect(() => {
        const onResize = () => {
            debounce(() => {
                const { clientHeight: client_height, clientWidth: client_width } = document.documentElement;
                const hexagon = document.querySelector('.hero-wrapper .hexagon');
                if (hexagon) {
                    const style = window.getComputedStyle(hexagon);
                    const style_font_size = Number(style.getPropertyValue('font-size').replace(/(r?em|px)$/, ''));
                    const style_border_height = Number(style.getPropertyValue('--hexagon-border-height').replace(/(r?em|px)$/, ''));
                    const style_gutter = Number(style.getPropertyValue('--hexagon-height').replace(/(r?em|px)$/, ''));
                    const style_height = Number(style.getPropertyValue('--hexagon-height').replace(/(r?em|px)$/, ''));
                    const style_width = Number(style.getPropertyValue('--hexagon-width').replace(/(r?em|px)$/, ''));

                    const offset_y = style_border_height * style_font_size / 2;
                    const hexagon_height = (style_height + style_border_height) * style_font_size + style_gutter * 2;
                    const hexagon_width = style_width * style_font_size + style_gutter;

                    const nb_hexagon = Math.floor(client_width / hexagon_width) * Math.floor((client_height - offset_y * 2) / hexagon_height);
                    const tmp = [...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS].slice(0, nb_hexagon);
                    for (let idx = 1; idx < tmp.length; idx++) {
                        const rdm = Math.floor(Math.random() * idx);
                        [tmp[idx], tmp[rdm]] = [tmp[rdm], tmp[idx]];
                    }

                    setHexagons(tmp.map((hexagon) => cloneElement(hexagon, { key: `hexagon-${Math.random().toString(36).slice(2, 9)}` })));
                }
            });
        };

        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return <article className="hero-wrapper">
        <div className={`hero-back`}>
            <div className="hexagon-grid">
                {hexagons}
            </div>
        </div>
        <div className="hero bg-green">
            <h1>Jocelyn Faihy</h1>
            <h2>{main.translate('Web developer (fullstack)', {}, 'hero')}</h2>
            <blockquote>
                {main.translate('Le code aussi bien visuel que structurel.', {}, 'hero')}
            </blockquote>
            <footer>
                <span className="fab fa-github fa-2x fa-fw" />
                <span className="fab fa-linkedin fa-2x fa-fw" />
            </footer>
        </div>
    </article>;
}

interface HexagonProps {
    name?: string,
    color: string,
    icon?: string,
    text?: string,
    children?: any,
}

const EFFECTS = ['rotate', 'scale', 'shine', 'turn'];
const MIN_DELAY = 1000;
const MAX_DELAY = 5000;
const MIN_DURATION = 3000;
const MAX_DURATION = 5000;

const getDuration = (): number => Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION);
const getDelay = (): number => Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);

function Hexagon(props: HexagonProps) {
    const [effect, setEffect] = useState<string>(EFFECTS[0]);
    const [duration, setDuration] = useState<number>(0);
    const [delay, setDelay] = useState<number>(0);

    useEffect(() => {
        let timeout: number;
        const refresh = (delay: number) => {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                const idx = Math.floor(Math.random() * EFFECTS.length)
                const duration = getDuration();
                const delay = getDelay();
                setEffect(EFFECTS[idx]);
                setDuration(duration);
                setDelay(delay);
                refresh(duration + delay);
            }, delay);
        };

        const delay = getDelay();
        setDelay(delay);
        refresh(delay);

        return () => {
            window.clearTimeout(timeout);
        }
    }, []);

    const style = {
        '--hexagon-animation-delay': `${delay}ms`,
        '--hexagon-animation-duration': `${duration}ms`,
        '--hexagon-color-background': props.color,
        '--hexagon-color-text': props.text || '#FFF',
    };

    return <div className={`hexagon ${effect}`} style={style as CSSProperties}>
        {props.icon && (
            <span className={`${props.icon} fa-fw`} />
        )}
        {props.children}
    </div>;
}
