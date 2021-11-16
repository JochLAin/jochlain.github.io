import { RefObject, useEffect } from "react";
import * as THREE from "three";

const FOV = 75;
const NEAR = 0.1;
const FAR = 5;

type DrawFunction = (scene: THREE.Scene) => Function;

interface CameraOptions {
    readonly fov?: number,
    readonly near?: number,
    readonly far?: number,
}

interface ThreeOptions extends THREE.WebGLRendererParameters, CameraOptions {
}

const DEFAULT_OPTIONS: ThreeOptions = {
    antialias: true,
    alpha: true,
    fov: FOV,
    near: NEAR,
    far: FAR,
};

export function useThree(ref_canvas: RefObject<HTMLCanvasElement>, draw: DrawFunction, options: ThreeOptions = DEFAULT_OPTIONS) {
    useEffect(() => {
        if (!ref_canvas.current) return;
        const canvas = ref_canvas.current;
        const ratio = canvas.clientWidth / canvas.clientHeight;

        const renderer = new THREE.WebGLRenderer({ ...(options as THREE.WebGLRendererParameters), canvas });
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);

        const camera = new THREE.PerspectiveCamera(
            options.fov,
            ratio,
            options.near,
            options.far
        );

        camera.position.z = 2;

        const scene = new THREE.Scene();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        function checkResize() {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        }

        let animationFrameId: number;
        Promise.resolve().then(() => {
            return draw(scene);
        }).then((render) => {
            (function animate() {
                checkResize();

                render();
                renderer.render(scene, camera);
                animationFrameId = window.requestAnimationFrame(animate);
            })();
        });

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        }
    }, []);
}
