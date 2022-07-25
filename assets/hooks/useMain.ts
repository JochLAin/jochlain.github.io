import { createContext, useContext } from 'react';

export interface MainInterface {
    locale: string,
    setLocale: Function,
    translate: Function,
    date: Function,
}

export const MainContext = createContext<MainInterface>({
    locale: 'fr',
    setLocale: () => {},
    translate: (message: string) => message,
    date: (date: Date) => date.toLocaleString(),
});

export default function useMain(): MainInterface {
    return useContext(MainContext);
}
