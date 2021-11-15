import React, { createRef, useMemo } from "react";
import * as THREE from "three";
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from "../../hooks/useThree";

export default function Adventure() {
    const ref_canvas = createRef<HTMLCanvasElement>();
    useThree(ref_canvas, (scene: THREE.Scene) => {
        const mixers: any[] = [];
        const loader = new GLTFLoader();
        const clock = new THREE.Clock();

        const load = (url: string): Promise<THREE.Object3D> => new Promise((resolve) => {
            loader.load(url, (gltf: GLTF) => {
                const model = gltf.scene.children[0];
                const animation = gltf.animations[0];
                if (animation) {
                    const mixer = new THREE.AnimationMixer(model);
                    const action = mixer.clipAction(animation);
                    mixers.push(mixer);
                    action.play();
                }

                resolve(model);
            });
        });

        {
            // const textureLoader = new THREE.TextureLoader();
            // scene.background = textureLoader.load('https://threejsfundamentals.org/threejs/resources/images/daikanyama.jpg');
        }
        {
            const light = new THREE.DirectionalLight(0xFFFFFF, 1);
            light.position.set(-1, 2, 4);
            scene.add(light);
        }

        load('/models/low_poly_cloud/scene.gltf').then((model: THREE.Object3D) => {
            model.scale.set(0.005, 0.005, 0.005);
            const positions = [
                new THREE.Vector3(-0.5, -0.5, 0),
                new THREE.Vector3(0, -0.5, 0),
                new THREE.Vector3(0.5, -0.5, 0),
                new THREE.Vector3(-0.5, 0, 0),
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0.5, 0, 0),
                new THREE.Vector3(-0.5, 0.5, 0),
                new THREE.Vector3(0, 0.5, 0),
                new THREE.Vector3(0.5, 0.5, 0),
            ];
            for (let idx = 0; idx < positions.length; idx++) {
                const clone = model.clone();
                clone.position.copy(positions[idx]);
                scene.add(clone);
            }
        });

        return () => {
            const delta = clock.getDelta();
            mixers.forEach(mixer => mixer.update(delta));
        };
    });

    return <canvas ref={ref_canvas} className="adventure" />;
}
