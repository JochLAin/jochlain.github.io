import { RefObject, useEffect, useState } from "react";
import * as THREE from "three";
import createScene from "../../utils/three/createScene";

export default function useScene(ref_canvas: RefObject<HTMLCanvasElement>) {
    const [scene, setScene] = useState<THREE.Scene>();

    useEffect(() => {
        if (!ref_canvas.current) return;
        setScene(createScene());

        return () => {
            setScene(undefined);
        }
    }, []);

    return scene;
}
