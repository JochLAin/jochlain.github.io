import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

useGLTF.preload('/models/low_poly_cloud/scene.gltf');
// const CLOUDS = Array(10).fill(0).map(() => [
//     Math.random() * 500,
//     Math.random() * 500,
//     -300
// ]);

const SCREEN_X_MIN = -575;
const SCREEN_X_MAX = 500;

const CLOUDS = [
    [-400, 150, -300],
    [-175, 100, -300],
    [50, 175, -300],
    [250, 125, -300],
    [400, 200, -300],
];

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 3;
            controls.maxDistance = 20;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

function GridGround() {
    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;

    const MAX_X = SCREEN_WIDTH / 2;
    const MIN_X = 0 - (SCREEN_WIDTH / 2);
    const MAX_Y = SCREEN_HEIGHT / 2;
    const MIN_Y = 0 - (SCREEN_HEIGHT / 2);

    const NUM_HORIZONTAL_LINES = 50;

    // Determine the size of a grid block (square)
    const gridBlockSize = SCREEN_HEIGHT / NUM_HORIZONTAL_LINES;

    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(MIN_X, MAX_Y, 0));
    geometry.vertices.push(new THREE.Vector3(MAX_X, MAX_Y, 0));

    const material = new THREE.LineBasicMaterial({
        color: 0x000000,
        opacity: 0.2
    });

    for (var c = 0; c <= NUM_HORIZONTAL_LINES; c++) {
        var line = new THREE.Line(geometry, material);
        line.position.y = MAX_Y - (c * gridBlockSize);
        this.scene.add(line);
    }

    return <>
        {Array(NUM_HORIZONTAL_LINES).fill(0).map((a, idx) => {
            return <line
                key={`grid-line-${idx}`}
            />;
        })}
    </>;
}

export default function Adventure() {
    return <Canvas id="adventure">
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <React.Suspense fallback={null}>
            <Clouds />
        </React.Suspense>
    </Canvas>;
}

function Clouds() {
    const { scene } = useGLTF('/models/low_poly_cloud/scene.gltf');

    return <>
        {CLOUDS.map((position, idx) => {
            return <Cloud
                key={`cloud-${idx}`}
                scene={scene.clone()}
                position={position}
            />;
        })}
    </>;
}

interface CloudProps {
    scene: THREE.Group,
    position: number[],
}

function Cloud(props: CloudProps) {
    const ref_cloud = useRef();

    useFrame(() => {
        if (ref_cloud.current) {
            ref_cloud.current.position.x -= 1;
            if (ref_cloud.current.position.x < SCREEN_X_MIN) {
                ref_cloud.current.position.x = SCREEN_X_MAX;
            }
        }
    });

    return <primitive ref={ref_cloud} object={props.scene} position={props.position} />;
}
