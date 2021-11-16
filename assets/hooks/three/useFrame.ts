import { useEffect } from "react";
import * as THREE from "three";

type DrawFunction = (scene: THREE.Scene) => Function;

export default function useFrame(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, draw: DrawFunction) {
    useEffect(() => {
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
