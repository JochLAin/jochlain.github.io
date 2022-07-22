import { createContext, useContext } from 'react';

export interface MainInterface {
    locale: string,
    setLocale: Function,
    translate: Function,
}

export const MainContext = createContext<MainInterface>({
    locale: 'en',
    setLocale: () => {},
    translate: (message: string) => message,
});

export default function useMain(): MainInterface {
    return useContext(MainContext);
}
