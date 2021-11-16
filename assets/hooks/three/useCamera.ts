import {RefObject, useEffect, useState} from "react";
import * as THREE from "three";
import createCamera, { PerspectiveCameraOptions } from "../../utils/three/createCamera";

export default function useCamera(ref_canvas: RefObject<HTMLCanvasElement>, options: PerspectiveCameraOptions = {}) {
    const [camera, setCamera] = useState<THREE.PerspectiveCamera>();

    useEffect(() => {
        if (!ref_canvas.current) return;
        setCamera(createCamera(ref_canvas.current, options));

        return () => {
            setCamera(undefined);
        };
    }, []);

    return camera;
}
