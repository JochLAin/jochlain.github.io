import IntlMessageFormat from 'intl-messageformat';
import { TRANSLATION_CATALOGS } from "../constant";

const translate = (key: string, parameters: { [key: string]: string|number|boolean } = {}, domain: string = 'messages', locale: string = 'fr'): string|(string|void)[]|void => {
    const message = TRANSLATION_CATALOGS?.[locale.toLowerCase()]?.[domain.toLowerCase()]?.[key];
    if (!message) return key;

    const intl = new IntlMessageFormat(message, locale);
    return intl.format(parameters);
};

export default translate;
