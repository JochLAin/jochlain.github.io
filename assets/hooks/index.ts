import { useContext } from 'react';
import MainContext from '../contexts';
import { MainInterface as MainStore } from "../types/contexts";

export default function useMain(): MainStore {
    return useContext(MainContext);
}
