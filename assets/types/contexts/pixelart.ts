export type Layer = string[];
export type Frame = Layer[];

export interface Store {
    height: number,
    width: number,
    color: string,
    tool: string,
    frame_idx: number,
    frame: Frame,
    layer_idx: number,
    layer: Layer,
    palette: string[],
    history: [],
    data: Frame[],

    setHeight?: (height: number) => void,
    setWidth?: (width: number) => void,
    setColor?: (color: string) => void,
    setTool?: (tool: string) => void,
    setFrame?: (frame_idx: number) => void,
    setLayer?: (layer_idx: number) => void,
    setHistory?: (history: []) => void,
    setPalette?: (palette: string[]) => void,
    setData?: (data: Frame[]) => void,
}
