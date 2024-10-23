import * as THREE from "three";
//for standard and physical materials , we need to have ligh to see them 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 6;

//AmbientLight-->>>>>>

// let light=new THREE.AmbientLight("white",5);  //color, intensity
// scene.add(light);

//DirectionalLight-->>>>>>

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );  //directional light
// directionalLight.position.set( 1, 1, 1 );  // direction of the light source, here it is in positive direction of x,y,z axis
// scene.add( directionalLight ); //it is like a TORCH
// const helper = new THREE.DirectionalLightHelper( directionalLight, 1 );
// scene.add( helper );

//Point Light------>>>>>>>>>>   
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set(1,1,1 );
scene.add( light );

const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshPhysicalMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
