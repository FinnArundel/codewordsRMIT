let poster;
let spin;
let canvas;
let matchbox;
let matchImage;

function preload() {
  poster = loadImage ('data/poster.jpg');

}

function setup() {
createCanvas (windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() { 
    return false;
}
}

function draw() {  
 
 //rotateY(radians(frameCount)*0.5);
  
  background('#D0CECF');
  texture(poster);
  noStroke();
  plane (297,420);


}
