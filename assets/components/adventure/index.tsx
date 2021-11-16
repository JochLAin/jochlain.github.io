import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/models/low_poly_cloud/scene.gltf');
// const CLOUDS = Array(10).fill(0).map(() => [
//     Math.random() * 500,
//     Math.random() * 500,
//     -300
// ]);

// Limit x [;385]

const CLOUDS = [
    [-300, -100, -300],
    [385, -50, -300],
];

export default function Adventure() {
    return <Canvas>
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

function Cloud(props) {
    const ref_cloud = useRef();

    // useFrame(() => {
    //     if (ref_cloud.current) {
    //         ref_cloud.current.position.x -= 1;
    //         if (ref_cloud.current.position.x < -600) {
    //             ref_cloud.current.position.x = 600;
    //         }
    //     }
    // });

    return <primitive ref={ref_cloud} object={props.scene} position={props.position} />;
}
