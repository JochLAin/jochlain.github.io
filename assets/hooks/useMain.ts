import { createContext, createElement, useContext, useEffect, useRef, useState } from 'react';
import * as analytics from "../utils/analytics";
import translate from "../utils/translate";

export type MainType = {
  initialize: Function,
  locale: string,
  setLocale: Function,
  translate: Function,
  date: Function,
}

export const MainContext = createContext<MainType>({
  locale: 'fr',
  initialize: () => {},
  setLocale: () => {},
  translate: (message: string) => message,
  date: (date: Date) => date.toLocaleString(),
});

export default function useMain(): MainType {
  return useContext(MainContext);
}

export function MainProvider(props: { locale?: string|undefined, children: any }) {
  const [locale, setLocale] = useState(props.locale || 'fr');
  const rendered = useRef(false);
  const store = Object.assign(
    { locale },
  );

  Object.assign(store, {
    initialize: (locale: string) => {
      if (!rendered.current) {
        store.setLocale(locale);
      }
    },
    setLocale: (value: string) => {
      if (value !== locale) {
        if (document?.documentElement) {
          document.documentElement.lang = value;
        }
        localStorage.setItem('locale', value);
        setLocale(value);
        history.replaceState({}, '', `/${value}`);
        analytics.pageview(`/${value}`);
      }
    },
    translate: (message: string, parameters = {}, domain?: string) => {
      return translate(message, parameters, domain, locale);
    },
    date: (date: Date, format = 'yyyy-mm-dd') => {
      if (!date) return '';

      return store.translate(format, {
        day: String(date.getDate()).padStart(2, '0'),
        month: String(date.getMonth() + 1).padStart(2, '0'),
        year: String(date.getFullYear()).padStart(4, '0'),
      }, 'dates');
    },
  });

  useEffect(() => {
    rendered.current = true;
  }, []);

  return createElement(
    MainContext.Provider,
    { value: store },
    props.children
  );
}
