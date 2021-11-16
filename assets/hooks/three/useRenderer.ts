import { RefObject, useEffect, useState } from "react";
import * as THREE from "three";
import createRenderer from "../../utils/three/createRenderer";

export default function useRenderer(ref_canvas: RefObject<HTMLCanvasElement>, options: THREE.WebGLRendererParameters) {
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();

    useEffect(() => {
        if (!ref_canvas.current) return;
        setRenderer(createRenderer(ref_canvas.current, options));

        return () => {
            setRenderer(undefined);
        }
    }, []);

    return renderer;
}
