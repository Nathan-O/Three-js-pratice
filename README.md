# Three-js-pratice
Never used it before, this directory is dedicated to learning Three.js

# Overview

Three.js is a pure Javascript language used to create three dimensional (3D) objects and scenes.

It's a javascript library created not too long ago, and it still largely in development. But a lot of fun has been had with is so far since its creation. [Repo](https://github.com/mrdoob/three.js/)

### Setup

In theory, set up is not hard. All you need to do is require Three.js in your HTML document `<head>`. This can be done a couple different ways:

```
		// There's an NPM
	npm install --save three

		// CDN
	https://cdnjs.cloudflare.com/ajax/libs/three.js/r73/three.min.js

```

Add a three.js script tag to the `<head>` and you're set to go.

Also, probably not a bad idea to run this on a server:

```
	python -m SimpleHTTPServer

		// localhost:8000

```

However this isn't essential most of the time. Simply running the HTML in the browser will work as well

# BASICS

### Camera

This of the `Camera` much in the same way yu would an actual stationary video camera. You set where you want it to be in relation to your scene, set the angle and depth views. (Note: I did find a couple references to being able to move the camera angle and such with animations, but I'm not confirming that.)

```javascript

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                                 // Args = View_Angle, Aspect, Near, Far

```

This is fundamental for seeing your Scene. And a scene can contain multiple [cameras](http://threejs.org/docs/#Reference/Cameras/Camera) and camera types.


#### Camera Types

*Camera*

*CubeCamera*

*OrthographicCamera*

*PerspectiveCamera*


### Scene

A [Scene](http://threejs.org/docs/#Reference/Scenes/Scene) is exactly like it sounds, like with Camera, think video production. A scene is a class object set to a 3 dimenstional plane (X, Y, Z) that houses all the information for the 3D aspects of your project. Unlike normal objects however, scenes don't take key value pairs, but instead house other objects as variables. (Example later)

```javascript
// Create new scene
var scene = new THREE.Scene();
```


### Renderer

This is the machine that tells Javascript to change the cryptic code it's received into fancy 3D objects and animations. The ever needed stagehand of our scene. Wonderful when it's working...brings all activity to a stop when it slacks off.

It is declared as follows:

```javascript
   // Create renderer to show scene in browser
var renderer = new THREE.WebGLRenderer();
   // add the camera to the scene
scene.add(camera);
   // Set size that you wish the renderer to use to she scene
renderer.setSize( window.innerWidth, window.innerHeight ); // <-- Means full width of window
   // Call element you wish to render to, in this case a container 'div' (!bootstrap container)
var $container = $('#container');
   // attach the render-supplied DOM element.
$container.append(renderer.domElement);
   // AND YES, YOU CAN USE jQuery.
```

#### Renderer Types


*Canvas* `// could not confirm that this is HTML5 <canvas>`

*WebGL*

*SVG*


### Lights

Every scenes needs lighting, otherwise your beautiful 3D objects with simply dwell in darkness with no one able to admire them. So lets add some shine.

```javascript

   // create a point light
var pointLight = new THREE.PointLight(0xFFFFFF);
   // set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

```

[Light](http://threejs.org/docs/#Reference/Lights/Light) can be positioned, angled, colored, intensified/dimmed, cast/receive shadows, a whole slew of things can be done with lights. All to better

### Objects

####Shape object, Geometry, & Material.

*Material* is the look of your object. In the [material](http://threejs.org/docs/#Reference/Materials/Material) is where you set the color, texture, brightness, shadow, etc. CSS can't be used on shape objects within your scene, instead the styling is declared within a material.

*Geometry* is used to state the dimensions of your shape object. It's areguments are taken as the X-axis, Y-axis, nd Z-axis of your scene plane

*Shape objects AKA Mesh* are created much in the same way that you would draw lines and shapes with HTML5 `<canvas>`. Declare a variable as a `new Mesh` and give it the dimensions and materials you've previously declared.

```javascript

/* CUBE EXAMPLE */
   // BoxGeometry renders a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
   // Mesh to declare what colors/textures to use on the object
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
   // Creation of the cube
var cube = new THREE.Mesh(geometry, material);

/* SPHERE EXAMPLE */
   // set up the sphere vars
var radius = 50;
var segments = 16;
var rings = 16;
   // Create a new mesh with
   // Sphere geometry - vars (radius, segments, rings)
   // The sphereMaterial next!
var sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), sphereMaterial);

   // When all is done add our objects our scene
scene.add(camera, pointLight, cube, sphere);   

```

### Rendering

Finally we render.

WE render out scene to the DOM simply by calling `render()` with our renderer (yes...these names) and passing in our scene.

Like so:

```javascript

renderer.render(scene);
// This basically says 'Use the renderer to render my scene please...thank you'

```
Similarly you can place your render call inside of a function. This calls render with a bit of animation for the scene we made

```javascript

function renderScene() {
      // Recursive function.
      // This will create a loop that causes
      //    the renderer to draw the scene with an animation of
      //    cube rotation that renders 60 times per second.
	requestAnimationFrame(renderScene);
   cube.rotation.x += 0.1;
   cube.rotation.y += 0.1;
      // Finally render the scene.
	renderer.render(scene);
};

```

## Further Reading

[Three.js Docs](http://threejs.org/docs/)

[WebGL Renderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer)

[Basic Tutorial](http://threejs.org/docs/#Manual/Introduction/Creating_a_scene)


# Challenges

The things you read are a lie. There is a background needed to some degree to simply "Dip your toe in." to this particular realm. A background I did not have and apparently couldn't slam learn in 10(ish) hours. Bollocks!

### My Jounrey

I read through (if the browser tabs are correct) 12 different tutorials on how to make and render a cube. Completly scraped and started my code over more than a couple times. And when as far as to fork/clone the source library.

Then spent a good chunk of the night reading through the example file code/watched a video game (watched?).

#### Update:

As of this morning I still have yet to render anything.

However, I have (since my way intot he city) found a [Repo](https://github.com/josdirksen/learning-threejs) spcifically for learning Three.js. It's set up in levels and challenges, so that's what I plan to do next and I'd encourage anyone else insterested in Three.js to do the same.

# Thanks All! 
