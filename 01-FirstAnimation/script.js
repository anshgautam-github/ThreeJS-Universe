//CDN is not reliable and a bit of slow so in future we won't use it much
//with the cdn we are getting THREE-> inside this whole three js is there

//WHat CDN do is it brings all the things of the THREE.jS , eg-> there are 500 thungs, so it brigna all
//but u only used 10, -> so 490 are waste , they make it slow so we don't use it 

//then inside THREE we hve a scene -> means a DUNIYA -> we can add anything in scene -> eg-> scene.add(animal)

const scene = new THREE.Scene();

//PerspectiveCamera->> in real word, jb tumahre pass aati h woh cheez badi dikhti h , jo dur jati h woh choti 
//so PerspectiveCamera can represent our eyes like that
//fov (field of view) ->>kitna humari eyes can see , jb fov kam hoga - then tum bhayankar level pe zoomed in ho (binocular wala action), then humko duniya ni blki ek cheez dikh rhi h pointed 
//so fov kam krne se hum pointed kisi ek product ko dekhenge
//fov-> badhnaynge to puri duniya ko dekh rhe hn, zyada duniya (owl look) 
//usually, we take the 75 value, normal view where we can view many things (normal insan ka view hota h 75)
//aspect ratio-> we have to tell that apka camera kitna heght aur width ko dekhe in ratio
//near->>kitni pass ki cheezei u can see -> means if it's value is 10-> then jo bhi cheez camera se 10 point peeche hogi we can't see that
//far->> kitni dur ki cheezei u can see->> means if it's value is 100-> then jo bhi cheez camera se 100 point aage hogi we can't see that

//WHY WE DO THIS? jitna zyada pass aur jitna zayad dur rakhoge, then aap bahut bada world bana doge , toh utna hi computer ko zyada proces
//krna hoga apke world ko dikhane ke liye , bcoz comp needs to calculte how those far things will look , so u don;t want ki aap bahut pass
//ya bahut dur tk leke ja rhe ho

//so here we made a camera that can replicate eyes 
const camera = new THREE.PerspectiveCamera(
    75, //fov
    window.innerWidth / window.innerHeight, //aspect ratio
    0.1,  //near
    1000, //far 
); 


//think of geometry ->as a figure made up of sticks (cube) -> gemorty h dandiyo se bana hua shape 
//this tells us what kind of geometry we want, here we are using box gemotry (width,height,depth)
//material-> represtens that uss figure ko kis cheez se wrap karenge  -> material iske kapde hn lekin ab tk pehnaye nahi hn 
//mesh -> means uske kapde pehna diye hn 
//fir meko final shareer mil jayega , which we call it a cube here 
//at last we will add it inside the scene -> means DUNIYA mei scene add kr diya h
//KAHA pe ayega ?? -> x=y=z=0

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//as we know ki cube and camera ki default positon center h to hum khuch dekh nahi payenge 
//so we chnage the cam postion 
camera.position.z = 5;


//think of WebGLRenderer->> as a camera jo photo leta rhega and woh nikal ke renderer mei aa gya   
//setSize->> we tell our cmamera ki kis size ki picture de woh 
//ab photo lene ke baad usko attach(print) krna hoga html pe
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//renderer.render( scene, camera );


function animate() {
	renderer.render( scene, camera ); //here we tell renderer to take photo of our DUNIYA with that camera  
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate );


//DOCUMENTATION READ --------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Boxgeometery inherits BufferGeometry 

//Object3D
//This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.

//for eg-> mesh inherited this so mesh has it's own features + Object3D features
