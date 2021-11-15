import { RefObject, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const FOV = 75;
const NEAR = 0.1;
const FAR = 5;

type DrawFunction = (scene: THREE.Scene) => Function;

export function useThree(ref_canvas: RefObject<HTMLCanvasElement>, draw: DrawFunction) {
    useEffect(() => {
        if (!ref_canvas.current) return;
        const canvas = ref_canvas.current;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);

        const camera = new THREE.PerspectiveCamera(FOV, canvas.clientWidth / canvas.clientHeight, NEAR, FAR);
        camera.position.z = 2;

        const scene = new THREE.Scene();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        const controls = new OrbitControls(camera, canvas);

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

        Promise.resolve().then(() => {
            return draw(scene);
        }).then((render) => {
            (function animate() {
                checkResize();

                render();
                renderer.render(scene, camera);
                window.requestAnimationFrame(animate);
            })();
        });
    }, []);
}
