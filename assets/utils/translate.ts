import IntlMessageFormat from 'intl-messageformat';
import CATALOG_HERO_FR from "../../translations/hero.fr.json";
import CATALOG_MESSAGE_FR from "../../translations/messages.fr.json";
import CATALOG_TIMELINE_FR from "../../translations/timeline.fr.json";

export const TRANSLATION_CATALOGS = {
    fr: {
        hero: CATALOG_HERO_FR,
        messages: CATALOG_MESSAGE_FR,
        timeline: CATALOG_TIMELINE_FR,
    },
};

const translate = (key: string, parameters = {}, domain: string = 'messages', locale: string = 'fr'): string|(string|void)[]|void => {
    const message = TRANSLATION_CATALOGS?.[locale.toLowerCase()]?.[domain.toLowerCase()]?.[key];
    if (!message) return key;

    const intl = new IntlMessageFormat(message, locale);
    return intl.format(parameters);
};

const translateDate = (date: Date, format: string = 'yyyy-mm-dd', locale: string = 'fr') => {
    return translate(format, {
        day: String(date.getDay()).padStart(2, '0'),
        month: String(date.getMonth()).padStart(2, '0'),
        year: String(date.getFullYear()).padStart(2, '0'),
    }, 'messages', locale);
};

export default translate;
export { translateDate as date };
