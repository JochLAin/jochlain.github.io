import { useContext } from 'react';
import PixelArtContext from "../contexts/pixelart";
import MainContext from '../contexts';
import { Store as PixelArtStore } from "../types/contexts/pixelart";
import { MainInterface as MainStore } from "../types/contexts";

export default function useMain(): MainStore {
    return useContext(MainContext);
}

export function usePixelArt(): PixelArtStore {
    return useContext(PixelArtContext);
}
