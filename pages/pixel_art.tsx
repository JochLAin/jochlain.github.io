import React, { useMemo, useState } from "react";
import { DEFAULT_COLOR, DEFAULT_HEIGHT, DEFAULT_PALETTE, DEFAULT_TOOL, DEFAULT_WIDTH } from "../assets/constants/pixelart";
import PixelArtContext from "../assets/contexts/pixelart";
import { Frame, Store } from "../assets/types/contexts/pixelart";

export default function PixelArt() {
    const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
    const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    const [tool, setTool] = useState<string>(DEFAULT_TOOL);
    const [frame_idx, setFrame] = useState<number>(0);
    const [layer_idx, setLayer] = useState<number>(0);
    const [palette, setPalette] = useState<string[]>(DEFAULT_PALETTE);
    const [history, setHistory] = useState<[]>([]);
    const [data, setData] = useState<Frame[]>([[]]);

    const frame = useMemo(() => data[frame_idx], [data, frame_idx]);
    const layer = useMemo(() => frame[layer_idx], [frame, layer_idx]);

    const store: Store = {
        height, setHeight,
        width, setWidth,
        color, setColor,
        tool, setTool,
        frame, frame_idx, setFrame,
        layer, layer_idx, setLayer,
        history, setHistory,
        palette, setPalette,
        data, setData,
    };

    return <PixelArtContext.Provider value={store}>
        <main id="pixel-art" className="h-100vh w-100vw">
            <h1>Pixel Art with css box-shadow</h1>
            <article id="wrapper">
                <Frames />
                <Layers />
                <Tools />
                <Viewer />
                <Preview />
                <Settings />
            </article>
        </main>
    </PixelArtContext.Provider>;
}

function Frames() {
    return <section id="wrapper-frame" />;
}

function Layers() {
    return <section id="wrapper-layer" />;
}

function Tools() {
    return <section id="wrapper-tool" />;
}

function Viewer() {
    return <section id="wrapper-viewer" />;
}

function Preview() {
    return <section id="wrapper-preview" />;
}

function Settings() {
    return <section id="wrapper-setting" />;
}
