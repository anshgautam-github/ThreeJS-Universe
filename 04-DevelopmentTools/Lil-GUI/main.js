import * as THREE from "three";
import GUI from 'lil-gui';

// Create scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 6;

// Create initial cube geometry and material
const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Initialize renderer
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Lil GUI setup
const gui = new GUI();  //INSTANCE

// Object for GUI options
const cubeOptions = {
    color: "#0000ff", // Initial color (blue)
    width: 1,
    height: 2,
    depth: 3,
    rotationX: 0,
    rotationY: 0
};

// Function to update the geometry
function updateGeometry() {
    // Dispose of old geometry to free memory
    mesh.geometry.dispose();

    // Create and assign new geometry directly to mesh.geometry
    mesh.geometry = new THREE.BoxGeometry(cubeOptions.width, cubeOptions.height, cubeOptions.depth);
}

// Add GUI controls for color, size, and rotation
gui.addColor(cubeOptions, 'color').onChange((value) => {
    mesh.material.color.set(value); // Update color
});

// Sliders for controlling width, height, and depth, with updateGeometry call
gui.add(cubeOptions, 'width', 0.1, 5).onChange(() => updateGeometry());
gui.add(cubeOptions, 'height', 0.1, 5).onChange(() => updateGeometry());
gui.add(cubeOptions, 'depth', 0.1, 5).onChange(() => updateGeometry());

// Rotation controls
gui.add(cubeOptions, 'rotationX', 0, Math.PI * 2).name("Rotate X").onChange((value) => {
    mesh.rotation.x = value; // Update rotation on X with the new value
});
gui.add(cubeOptions, 'rotationY', 0, Math.PI * 2).name("Rotate Y").onChange((value) => {
    mesh.rotation.y = value; // Update rotation on Y with the new value
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Apply the rotation based on the current rotation options
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
