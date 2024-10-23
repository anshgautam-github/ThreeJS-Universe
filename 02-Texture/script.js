import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1,  
    1000, 
); 

camera.position.z = 5;

const light = new THREE.DirectionalLight("white",10);
light.position.set(2,2,2);
scene.add(light);

let textureLoader=new THREE.TextureLoader();
// textureLoader.load("./images/");

const geometry = new THREE.SphereGeometry( 1, 20, 20 );
const material = new THREE.MeshPhysicalMaterial( { color: 0x00ff00, wireframe:true } );
const mesh = new THREE.Mesh( geometry, material );
mesh.rotation.y=1;
scene.add(mesh);

const canvas= document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas:canvas });
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls(camera, renderer.domElement);



function animate() {
    controls.update();
    renderer.render( scene, camera ); 
    
}
 renderer.setAnimationLoop( animate );





