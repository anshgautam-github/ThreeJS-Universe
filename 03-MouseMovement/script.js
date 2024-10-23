import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1,  
    1000, 
); 

camera.position.z = 6;

const geometry = new THREE.BoxGeometry( 1, 2,3);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
const mesh = new THREE.Mesh( geometry, material );

//lookat -> part of object3D -> with the help of it, we can point the object to look at any point, needs 3 points in vector
// mesh.lookAt(-1,1,0);   ->>> we can givepoints like this also , but it is not the right way
//correct way is ->>
mesh.lookAt(new THREE.Vector3(-1,1,0))

scene.add(mesh);

const canvas= document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas:canvas });
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls(camera, renderer.domElement);



const mouse={
    x:0,
    y:0,
}
window.addEventListener("mouseleave",function(e){
    mouse.x=e.clientX/window.innerWidth;
    mouse.y=e.clientY/window.innerHeight;
})

function animate() {
    window.requestAnimationFrame(animate);
    controls.update();
    mesh.lookAt(mouse.x,mouse.y,0);
    renderer.render( scene, camera ); 
    
}
renderer.setAnimationLoop( animate );





