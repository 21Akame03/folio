import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// scene
const scene = new THREE.Scene();

// background image
const spaceTexture = new THREE.TextureLoader().load('./assets/deepspace.jpg');
scene.background = spaceTexture;


// camera  (field of view, ASpect Ratio, view frustrum)
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);

camera.position.setZ(35);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#main-canvas"),
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

var geometry = new THREE.TorusGeometry(22, 3, 16, 100);
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
torus2.position.setX(0.5);


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

//controls
const controls = new OrbitControls(camera, renderer.domElement);



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
  torus.rotation.x += 0.004;
  torus.rotation.y += 0.001;
  torus.rotation.z += 0.005;

  torus2.rotation.x -= 0.001;
  torus2.rotation.y -= 0.0005;
  torus2.rotation.z -= 0.001;
  
  metalsphere.rotation.y += 0.009;


  controls.update();

  renderer.render( scene, camera );
}

animate();