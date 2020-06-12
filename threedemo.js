var three = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth,0.1, 1000)
var renderer = new THREE.WebGLBufferRenderer()
camera.position.x = 10
camera.position.y = 20
camera.position.z = 30
