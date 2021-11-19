import React, {createRef, HTMLProps, RefObject, useEffect, useMemo, useState} from "react";
import { DEFAULT_COLOR, DEFAULT_DATA, DEFAULT_HEIGHT, DEFAULT_PALETTE, DEFAULT_TOOL, DEFAULT_WIDTH } from "../assets/constants/pixelart";
import PixelArtContext from "../assets/contexts/pixelart";
import { Store } from "../assets/types/contexts/pixelart";
import {usePixelArt} from "../assets/hooks";
import Classnames from "classnames";

function useDraw(ref_canvas: RefObject<HTMLCanvasElement>, width: number, height: number, callback: (context: CanvasRenderingContext2D, width: number, height: number) => void, dependencies: any[]) {
    useEffect(() => {
        if (!ref_canvas.current) return;
        const canvas = ref_canvas.current;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);

        const pixel_height = Math.floor(canvas.height / height);
        const pixel_width = Math.floor(canvas.width / width);

        callback(context, pixel_width, pixel_height);
    }, [ref_canvas, height, width, ...dependencies]);
}

export default function PixelArt() {
    const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
    const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    const [tool, setTool] = useState<string>(DEFAULT_TOOL);
    const [frame_idx, setFrame] = useState<number>(0);
    const [layer_idx, setLayer] = useState<number>(0);
    const [palette, setPalette] = useState<string[]>(DEFAULT_PALETTE);
    const [history, setHistory] = useState<[]>([]);
    const [data, setData] = useState<(string|undefined)[][][]>(DEFAULT_DATA);

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
                <section id="wrapper-frame">
                    <button className="btn">+</button>
                    <div id="container-frame">
                        {data.map((frame, idx) => {
                            return <FrameCanvas
                                key={`frame-${idx}`}
                                layers={frame}
                                height={height}
                                width={width}
                            />;
                        })}
                    </div>
                </section>
                <section id="wrapper-layer">
                    <button className="btn">+</button>
                    <div id="container-layer-helper">
                        n<span>..</span>1
                    </div>
                    <div id="container-layer">
                        {frame.map((layer, idx) => {
                            const className = Classnames(idx === layer_idx && 'active');

                            return <LayerCanvas
                                key={`layer-${idx}`}
                                className={className}
                                pixels={layer}
                                height={store.height}
                                width={store.width}
                            />;
                        })}
                    </div>
                </section>
                <Preview />
                <Tools />
                <Settings />
                <Viewer />
            </article>
        </main>
    </PixelArtContext.Provider>;
}

function FrameCanvas({ layers, height, width, ...props }: { layers: (string|undefined)[][], height: number, width: number } & HTMLProps<HTMLCanvasElement>) {
    const ref_canvas = createRef<HTMLCanvasElement>();

    useEffect(() => {
        const onResize = () => {
            if (!ref_canvas.current) return;
            const { height, width } = ref_canvas.current.getBoundingClientRect();
            if (width > height) {
                ref_canvas.current.style.height = `${height}px`;
                ref_canvas.current.style.width = 'auto';
            } else {
                ref_canvas.current.style.height = 'auto';
                ref_canvas.current.style.width = `${width}px`;
            }
        };

        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [ref_canvas]);

    useDraw(ref_canvas, width, height, (context, pixel_width, pixel_height) => {
        for (let idx = 0; idx < layers.length; idx++) {
            for (let index = 0; index < layers[idx].length; idx++) {
                if (!layers[idx][index]) continue;
                const y = Math.floor(idx / width) * pixel_height;
                const x = (idx % width) * pixel_width;
                context.fillStyle = layers[idx][index];
                context.fillRect(x, y, pixel_width, pixel_height);
            }
        }
    }, [layers]);

    return <canvas
        ref={ref_canvas}
        {...props}
        className={Classnames('pixelart-canvas', props.className)}
        style={{ ...props.style, aspectRatio: `${width} / ${height}` }}
    />;
}

function LayerCanvas({ pixels, height, width, ...props }: { pixels: (string|undefined)[], height: number, width: number } & HTMLProps<HTMLCanvasElement>) {
    const ref_canvas = createRef<HTMLCanvasElement>();

    useDraw(ref_canvas, width, height, (context, pixel_width, pixel_height) => {
        for (let idx = 0; idx < layers.length; idx++) {
            for (let index = 0; index < layers[idx].length; idx++) {
                if (!layers[idx][index]) continue;
                const y = Math.floor(idx / width) * pixel_height;
                const x = (idx % width) * pixel_width;
                context.fillStyle = layers[idx][index];
                context.fillRect(x, y, pixel_width, pixel_height);
            }
        }
    }, [layers]);

    useEffect(() => {
        const onResize = () => {
            if (!ref_canvas.current) return;
            const { height, width } = ref_canvas.current.getBoundingClientRect();
            if (width > height) {
                ref_canvas.current.style.height = `${height}px`;
                ref_canvas.current.style.width = 'auto';
            } else {
                ref_canvas.current.style.height = 'auto';
                ref_canvas.current.style.width = `${width}px`;
            }
        };

        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [ref_canvas]);

    useEffect(() => {
        if (!ref_canvas.current) return;
        const canvas = ref_canvas.current;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);

        const pixel_height = Math.floor(canvas.height / height);
        const pixel_width = Math.floor(canvas.width / width);

        for (let idx = 0; idx < pixels.length; idx++) {
            if (!pixels[idx]) continue;
            const y = Math.floor(idx / width) * pixel_height;
            const x = (idx % width) * pixel_width;
            context.fillStyle = pixels[idx];
            context.fillRect(x, y, pixel_width, pixel_height);
        }
    }, [ref_canvas, pixels, height, width]);

    return <canvas
        ref={ref_canvas}
        {...props}
        className={Classnames('pixelart-canvas', props.className)}
        style={{ ...props.style, aspectRatio: `${width} / ${height}` }}
    />;
}

function Tools() {
    return <section id="wrapper-tool" />;
}

function Viewer() {
    return <section id="wrapper-viewer" />;
}

function Preview() {
    const store = usePixelArt();

    return <section id="wrapper-preview">
        <LayerCanvas pixels={store.data[0][0]} height={store.height} width={store.width} />
    </section>;
}

function Settings() {
    return <section id="wrapper-setting" />;
}
