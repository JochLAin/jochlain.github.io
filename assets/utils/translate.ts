import IntlMessageFormat from 'intl-messageformat';
import CATALOG_ABOUT_FR from "../../translations/about.fr.json";
import CATALOG_DATE_FR from "../../translations/date.fr.json";
import CATALOG_HERO_FR from "../../translations/hero.fr.json";
import CATALOG_MESSAGE_FR from "../../translations/messages.fr.json";
import CATALOG_TIMELINE_FR from "../../translations/timeline.fr.json";
import CATALOG_DATE_EN from "../../translations/date.en.json";

export const TRANSLATION_CATALOGS = {
    fr: {
        about: CATALOG_ABOUT_FR,
        hero: CATALOG_HERO_FR,
        messages: CATALOG_MESSAGE_FR,
        timeline: CATALOG_TIMELINE_FR,
        dates: CATALOG_DATE_FR,
    },
    en: {
        dates: CATALOG_DATE_EN,
    }
};

const translate = (key: string, parameters = {}, domain: string = 'messages', locale: string = 'fr'): string|(string|void)[]|void => {
    let message = TRANSLATION_CATALOGS?.[locale.toLowerCase()]?.[domain.toLowerCase()]?.[key];
    if (!message) message = key;

    const intl = new IntlMessageFormat(message, locale);
    return intl.format(parameters);
};

export default translate;
