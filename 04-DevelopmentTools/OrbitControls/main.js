import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //import line
//It basically helps us mouse ko drag karkke we can move the object 
//here , camera revolves around the object , nt the object 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1,  
    1000, 
); 

camera.position.z = 6;

const geometry = new THREE.BoxGeometry( 1, 2,3);
const material = new THREE.MeshBasicMaterial( { color: "blue"} );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);

const canvas= document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas:canvas });
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls(camera, renderer.domElement); 
//here we give 2 things (kon ghumega, kiske around ghumega [canvas])

controls.enableDamping= true; //drag krne ke baad it will keep continuin for few seconds
// controls.dampingFactor=0.1;   //to control damping 
// controls.enableRotate=false; //disable the horizomtrol and vertical drag, only zoom in zoom outpossible
// controls.enableZoom=false;   //to disable the zooom 
// controls.minZoom=2;     //these 2 usually work well on the orthogrpaic camera pe 
// controls.maxZoom=1;
// controls.minDistance=2;   these will work on our perspective camera
// controls.maxDistance=3; 

// controls.minAzimuthAngle=-Math.PI;  restrics the horixontal rotation angle
// controls.maxAzimuthAngle= Math.PI;
// controls.minPolarAngle=Math.PI/4;  restrics the vertical rotation angle

function animate() {
    window.requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera ); 
    
}
renderer.setAnimationLoop( animate );





