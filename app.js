$(document).ready(function(){
   console.log("Sanity 3D");
   render();
});

// Create new scene
var scene = new THREE.Scene();

// Create new camera to view scene
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create renderer to show scene in browser
var renderer = new THREE.WebGLRenderer();

// add the camera to the scene
scene.add(camera);

// Set size that you wish the renderer to use to she scene
renderer.setSize( window.innerWidth, window.innerHeight ); // <-- Means full width of window

// Call element you wish to render to
var $container = $('#container');
// attach the render-supplied DOM element
$container.append(renderer.domElement);

// BoxGeometry renders a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);

// Mesh to declare what colors/textures to use on the object
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Creation of the cube
var cube = new THREE.Mesh(geometry, material);

// Then add cube to our scene
scene.add(cube);

// create a point light
var pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

console.log(scene);

camera.position.z = 5;


function render() {
   // This will create a loop that causes the renderer to draw the scene 60 times per second.
	requestAnimationFrame(render);
   cube.rotation.x += 0.1;
   cube.rotation.y += 0.1;
	renderer.render(scene, camera);
}

// 86% deletion
