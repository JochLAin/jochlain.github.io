import React from "react";
import useMain from "../hooks/useMain";

const HEXAGONS = {
    angular: { color: '#d2002f', icon: 'fab fa-angular' },
    bootstrap: { color: '#7b11f8', icon: 'fab fa-bootstrap' },
    css: { color: '#2449d8', icon: 'fab fa-css3-alt' },
    docker: { color: '#129fdb', icon: 'fab fa-docker' },
    fortawesome: { color: '#318cdd', icon: 'fab fa-fort-awesome' },
    github: { color: '#333', icon: 'fab fa-github-alt' },
    html: { color: '#dd4b25', icon: 'fab fa-html5' },
    js: { color: '#ead41c', icon: 'fab fa-js' },
    less: { color: '#294f83', icon: 'fab fa-less' },
    node: { color: '#84ba64', icon: 'fab fa-node-js' },
    php: { color: '#8892bf', icon: 'fab fa-php' },
    python: { color: '#224a6c', icon: 'fab fa-python' },
    react: { color: '#5ed3f3', icon: 'fab fa-react' },
    sass: { color: '#c36292', icon: 'fab fa-sass' },
    skype: { color: '#01a7e5', icon: 'fab fa-skype' },
    slack: { color: '#3e123f', icon: 'fab fa-slack' },
    stripe: { color: '#5e56f2', icon: 'fab fa-stripe' },
    trello: { color: '#2e73b1', icon: 'fab fa-trello' },
    facebook: { color: '#385490', icon: 'fab fa-facebook' },
    linkedin: { color: '#0274b3', icon: 'fab fa-linkedin' },
    tiktok: { color: '#000', icon: 'fab fa-tiktok' },
    twitter: { color: '#1c99e7', icon: 'fab fa-twitter' },
    vue: { color: '#40b280', icon: 'fab fa-vuejs' },
    youtube: { color: '#ff0000', icon: 'fab fa-youtube' },
};

export default function Hero() {
    const main = useMain();

    return <article className="hero-wrapper">
        <div className="hero-back">
            <div className="hexagon-row">
                <Hexagon {...HEXAGONS.html} />
                <Hexagon {...HEXAGONS.css} />
                <Hexagon {...HEXAGONS.less} />
                <Hexagon {...HEXAGONS.sass} />
                <Hexagon {...HEXAGONS.js} />
            </div>
            <div className="hexagon-row">
                <Hexagon {...HEXAGONS.php} />
                <Hexagon {...HEXAGONS.node} />
                <Hexagon {...HEXAGONS.github} />
                <Hexagon {...HEXAGONS.docker} />
                <Hexagon {...HEXAGONS.python} />
            </div>
            <div className="hexagon-row">
                <Hexagon {...HEXAGONS.bootstrap} />
                <Hexagon {...HEXAGONS.fortawesome} />
                <Hexagon {...HEXAGONS.angular} />
                <Hexagon {...HEXAGONS.react} />
                <Hexagon {...HEXAGONS.vue} />
            </div>
            <div className="hexagon-row">
                <Hexagon {...HEXAGONS.facebook} />
                <Hexagon {...HEXAGONS.twitter} />
                <Hexagon {...HEXAGONS.youtube} />
                <Hexagon {...HEXAGONS.linkedin} />
                <Hexagon {...HEXAGONS.tiktok} />
            </div>
            {/*<div className="hexagon-row">*/}
            {/*    <Hexagon {...HEXAGONS.slack} />*/}
            {/*    <Hexagon {...HEXAGONS.skype} />*/}
            {/*    <Hexagon {...HEXAGONS.trello} />*/}
            {/*</div>*/}
        </div>
        <div className="hero">
            <h1>Jocelyn Faihy</h1>
            <h2>{main.translate('Web developer (fullstack)', {}, 'hero')}</h2>
            <blockquote>
                Le code aussi bien visuel que structurel.
            </blockquote>
            <footer>
                <span className="fab fa-github fa-2x fa-fw" />
                <span className="fab fa-linkedin fa-2x fa-fw" />
            </footer>
        </div>
    </article>;
}

interface HexagonProps {
    color: string,
    icon: string,
}

function Hexagon(props: HexagonProps) {
    return <div className="hexagon" style={{ [`--hexagon-color`]: props.color }}>
        <span className={`${props.icon} fa-fw`} />
    </div>;
}