import * as THREE from "three";

const FOV = 75;
const NEAR = 0.1;
const FAR = 5;
const POSITION = new THREE.Vector3(0, 0, 2);

export interface PerspectiveCameraOptions {
    far?: number,
    fov?: number,
    near?: number,
    position?: THREE.Vector3,
}

const DEFAULT_OPTIONS: PerspectiveCameraOptions = {
    far: FAR,
    fov: FOV,
    near: NEAR,
    position: POSITION,
};

export default function createCamera(canvas: HTMLCanvasElement, options: PerspectiveCameraOptions = {}) {
    options = { ...DEFAULT_OPTIONS, ...options };
    const { far, fov, near, position } = options;
    const ratio = canvas.clientWidth / canvas.clientHeight;
    const camera = new THREE.PerspectiveCamera(fov, ratio, near, far);
    if (position) camera.position.copy(position);

    return camera
}
