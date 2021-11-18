import { createContext } from "react";
import { Store } from "../types/contexts/pixelart";
import {
    DEFAULT_COLOR, DEFAULT_DATA,
    DEFAULT_HEIGHT,
    DEFAULT_HISTORY,
    DEFAULT_PALETTE,
    DEFAULT_TOOL,
    DEFAULT_WIDTH
} from "../constants/pixelart";

const PixelArtContext = createContext<Store>({
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH,
    color: DEFAULT_COLOR,
    tool: DEFAULT_TOOL,
    frame: [],
    frame_idx: 0,
    layer: [],
    layer_idx: 0,
    history: DEFAULT_HISTORY,
    palette: DEFAULT_PALETTE,
    data: DEFAULT_DATA,
});

export default PixelArtContext;
