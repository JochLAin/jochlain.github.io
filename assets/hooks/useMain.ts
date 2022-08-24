import { createContext, useContext } from 'react';

export interface MainInterface {
    initialize: Function,
    locale: string,
    setLocale: Function,
    translate: Function,
    date: Function,
}

export const MainContext = createContext<MainInterface>({
    locale: 'fr',
    initialize: () => {},
    setLocale: () => {},
    translate: (message: string) => message,
    date: (date: Date) => date.toLocaleString(),
});

export default function useMain(): MainInterface {
    return useContext(MainContext);
}
