import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// scene
const scene = new THREE.Scene();

// camera  (field of view, ASpect Ratio, view frustrum)
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);

camera.position.setZ(10);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);



renderer.render( scene, camera );


//geometry 
let normalmap = new THREE.TextureLoader().load('assets/Torus/normal.jpg');
let roughmap = new THREE.TextureLoader().load('assets/Torus/rough.jpg');
let map = new THREE.TextureLoader().load('assets/Torus/map.jpg');
let aomap = new THREE.TextureLoader().load('assets/Torus/ao.jpg');
let metalmap = new THREE.TextureLoader().load('assets/Torus/metal.jpg');
var geometry = new THREE.TorusGeometry(13, 3, 16, 100);
var material = new THREE.MeshStandardMaterial( 
  {
    normalMap: normalmap,
    roughnessMap: roughmap,
    transparent: true,
    roughness: 0.3,
    metalness: 0.5,
    map: map,
    aoMap: aomap,
    aoMapIntensity: 1
  });
const torus = new THREE.Mesh( geometry, material);

var geometry = new THREE.TorusGeometry(17, 3, 16, 100);
var material = new THREE.MeshStandardMaterial( 
  {
    normalMap: normalmap,
    roughnessMap: roughmap,
    transparent: true,
    roughness: 0.3,
    metalness: 0.5,
    map: map,
    aoMap: aomap,
    aoMapIntensity: 1
  });
const torus2 = new THREE.Mesh( geometry, material);



normalmap = new THREE.TextureLoader().load('assets/sphere/normal.jpg');
roughmap = new THREE.TextureLoader().load('assets/sphere/rough.jpg');
metalmap = new THREE.TextureLoader().load('assets/sphere/metal.jpg');
map = new THREE.TextureLoader().load('assets/sphere/map.jpg');
aomap = new THREE.TextureLoader().load('assets/sphere/ao.jpg');
geometry = new THREE.SphereGeometry(5, 32, 32);
material = new THREE.MeshStandardMaterial(
  {
    map: map,
    roughnessMap: roughmap,
    roughness: 0.9,
    metalness: 0.4,
    aoMap: aomap,
    aoMapIntensity: 1,
    normalMap: normalmap
  });
const metalsphere = new THREE.Mesh(geometry, material);

scene.add(torus, torus2, metalsphere);


//light 
const pointlight = new THREE.PointLight(0xF5082C);
pointlight.position.set(5, 5, 5);

const pointlight2 = new THREE.PointLight(0xFFFFF);
pointlight2.position.set(-10, -10, 5);

const ambientlight = new THREE.AmbientLight(0xFFFFFF);


scene.add(pointlight, pointlight2, ambientlight);

// light helper

// const gridhelper = new THREE.GridHelper(200, 50);

// scene.add(gridhelper);


//controls
const controls = new OrbitControls(camera, renderer.domElement);

  // scrolling
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    
    camera.position.z = t  * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;

    console.log(camera.position)
    
  }

  document.body.onscroll = moveCamera;



// particles
function addStar () {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
  const star = new THREE.Mesh(geometry, material);

  // random spreading 
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);




// game loop
function animate() {
  requestAnimationFrame( animate ); // this is recursive

  //list all animations here
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.005;

  torus2.rotation.x -= 0.001;
  torus2.rotation.y -= 0.001;
  torus2.rotation.z -= 0.00;
  
  metalsphere.rotation.y += 0.005;


  controls.update();

  renderer.render( scene, camera );
}

animate();