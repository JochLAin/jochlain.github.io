import React from "react";
import Hexagon from "./components/hexagon";

const now = new Date();
export const MONTHES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const EXPERIENCES = [{
    kind: 'grade',
    grade: 'Bac IST EE',
    info: 'Industrial Sciences and Techniques - Electronic Engineering option',
    icon: 'graduation-cap',
    color: '#f44336',
    start: new Date(2008, 9),
    end: new Date(2010, 6),
}, {
    kind: 'job',
    job: 'Versatile employee',
    company: 'Mac Donald\'s',
    icon: 'flask',
    color: '#9c27b0',
    start: new Date(2010, 7),
    end: new Date(2010, 8),
}, {
    kind: 'grade',
    grade: 'BTS IRIS',
    info: 'IT and Network for Industries and Technical Services',
    icon: 'graduation-cap',
    color: '#3f51b5',
    start: new Date(2010, 9),
    end: new Date(2012, 6),
}, {
    kind: 'job',
    job: 'Web developer',
    company: 'Mairie de Villieu-Loyes-Mollon',
    icon: 'flask',
    color: '#2196f3',
    start: new Date(2011, 7),
    end: new Date(2011, 7),
}, {
    kind: 'job',
    job: 'Versatile employee',
    company: 'Vente privée',
    icon: 'flask',
    color: '#009688',
    start: new Date(2012, 8),
    end: new Date(2012, 8),
}, {
    kind: 'both',
    grade: 'LP IEM',
    info: 'Embedded and Mobile Computing',
    job: 'Web & mobile developer',
    company: 'Urban Link / Meden Agan',
    icon: 'star-half',
    color: '#4caf50',
    start: new Date(2012, 9),
    end: new Date(2013, 9),
}, {
    kind: 'grade',
    grade: 'Web development',
    info: 'Self-taught learning',
    icon: 'graduation-cap',
    color: '#cddc39',
    start: new Date(2013, 10),
    end: new Date(2014, 3),
}, {
    kind: 'job',
    job: 'Web developer',
    company: 'Wanadev',
    icon: 'flask',
    color: '#ffc107',
    start: new Date(2014, 4),
    end: new Date(2018, 10),
}, {
    kind: 'job',
    job: 'Web developer',
    company: 'AMTSolutions',
    icon: 'flask',
    color: '#ff5722',
    start: new Date(2018, 11),
    end: now,
}];

// @ts-ignore
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

export { HEXAGONS };
