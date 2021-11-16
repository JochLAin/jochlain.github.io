import * as THREE from "three";

export default function createCamera(canvas: HTMLCanvasElement, options: THREE.WebGLRendererParameters = {}) {
    const renderer = new THREE.WebGLRenderer({ ...options, canvas });
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    return renderer;
}
