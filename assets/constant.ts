import CATALOG_MESSAGE_FR from "../translations/messages.fr.json";
import CATALOG_TIMELINE_FR from "../translations/timeline.fr.json";
import CATALOG_MESSAGE_EN from "../translations/messages.en.json";

const now = new Date();
export const MONTHES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const EXPERIENCES = [{
    kind: 'grade',
    grade: 'Bachelor IST EE',
    info: 'Industrial Sciences and Techniques Electronic Engineering option',
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
    info: 'Self learning',
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

export const TRANSLATION_CATALOGS = {
    fr: {
        messages: CATALOG_MESSAGE_FR,
        timeline: CATALOG_TIMELINE_FR,
    },
    en: {
        messages: CATALOG_MESSAGE_EN,
    },
};
