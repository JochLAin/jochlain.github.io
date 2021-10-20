import { useContext } from 'react';
import MainContext from '../context';
import { MainInterface } from "../types/context";

export default function useMain(): MainInterface {
    return useContext(MainContext);
}
