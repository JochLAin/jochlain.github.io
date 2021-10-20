import { createContext } from "react";
import { MainInterface } from "./types/context";

const MainContext = createContext<MainInterface>({
    locale: 'en',
    setLocale: () => {},
    translate: (message: string) => message,
});

export default MainContext;