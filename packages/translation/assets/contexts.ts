import { createElement, createContext, useContext, useEffect, useMemo, useState } from "react";

export type CatalogType = { [key: string]: CatalogType|string };
export type DomainType = { [domain: string]: CatalogType };
export type TranslationType = { [locale: string]: DomainType };
export type Settings = {
  allowFlag?: boolean,
  field?: string,
  from?: string,
  to?: string,
  lang?: string,
};

export type AppContextType = {
  domains?: string[],
  keys?: string[],
  languages?: string[],
  ready: boolean,
  settings: Settings,
  translations?: TranslationType,
  setReady: () => void,
  setSetting: (name: string, value: any) => void,
  setSettings: (settings: Settings) => void,
  setTranslations: (translations: TranslationType) => void,
  setTranslation: (lang: string, domain: string, key: string, value: string) => void,
  translate: (key: string) => string,
};

export const AppContext = createContext<AppContextType>({
  ready: false,
  settings: {},
  setReady: () => {},
  setSetting: () => {},
  setSettings: () => {},
  setTranslations: () => {},
  setTranslation: () => {},
  translate: (key: string) => key,
});

export function AppProvider(props: { children: any, translations?: TranslationType }) {
  const [translations, setTranslations] = useState<TranslationType|undefined>(props.translations);
  const [currentDomain, setCurrentDomain] = useState<string|undefined>();
  const [currentKey, setCurrentKey] = useState<string|undefined>();
  const [currentLangFrom, setCurrentLangFrom] = useState<string|undefined>();
  const [currentLangTo, setCurrentLangTo] = useState<string|undefined>();
  const [ready, setReady] = useState<boolean>(false);

  const languages = useMemo<undefined|string[]>(() => {
    if (!translations) return undefined;
    return Object.keys(translations);
  }, [translations]);

  const domains = useMemo<undefined|string[]>(() => {
    if (!translations || !languages) return undefined;
    const mergedDomains: string[] = languages.reduce((accu: string[], lang) => {
      const keys = Object.keys(translations[lang]);
      return [...accu, ...keys];
    }, []);

    return mergedDomains.filter((lang, idx, languages) => {
      return languages.indexOf(lang) === idx;
    });
  }, [translations, languages]);

  const [settings, setSettings] = useState<Settings>({});

  const keys: undefined|string[] = useMemo<undefined|string[]>(() => {
    if (!currentDomain) return undefined;
    if (!translations) return undefined;
    return languages?.reduce((accu: string[], lang: string) => {
      return [...accu, ...Object.keys(translations[lang][currentDomain])];
    }, []).filter((key, idx, keys) => keys.indexOf(key) === idx);
  }, [translations, currentDomain]);

  const saveSettings = (settings: Settings) => {
    localStorage.setItem('configuration', JSON.stringify(settings));
  };

  useEffect(() => {
    setReady(!!Number(localStorage.getItem('configured') || 0));
    setTranslations(JSON.parse(localStorage.getItem('translations') || 'null'));
    setSettings(JSON.parse(localStorage.getItem('configuration') || 'null') || {
      allowFlag: false,
      field: 'tag',
      lang: languages?.[0],
    });
  }, []);

  const store: AppContextType = {
    domains,
    keys,
    languages,
    ready,
    settings,
    translations,
    setReady() {
      localStorage.setItem('configured', '1');
      setReady(true);
    },
    setSettings(value: Settings) {
      const _settings = { ...settings, ...value };
      setSettings(_settings);
      saveSettings(_settings);
    },
    setSetting(name: string, value: any) {
      store.setSettings({ [name]: value });
    },
    setTranslations(translations: TranslationType) {
      setTranslations(translations);
      localStorage.setItem('translations', JSON.stringify(translations));
    },
    setTranslation(lang: string, domain: string, key: string, value: string) {
      store.setTranslations({
        ...(translations || {}),
        [lang]: {
          ...(translations?.[lang] || {}),
          [domain]: {
            ...(translations?.[lang]?.[domain] || {}),
            [key]: value,
          }
        }
      });
    },
    translate: (key: string) => key,
  };

  return createElement(
    AppContext.Provider,
    { value: store },
    props.children
  );
}

export default function useApp(): AppContextType {
  return useContext(AppContext);
}
