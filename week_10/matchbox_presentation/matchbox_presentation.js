let matchbox;
let matchImage;

function preload() {
  matchImage = loadImage ('data/box.texture.png');
  matchbox = loadModel ('data/matchbox.obj');
}

function setup() {
createCanvas (windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() { 
    return false;
}
}

function draw() {  

  angleMode (DEGREES);
  rotateX(140); 
  rotateY(30);
  angleMode (RADIANS);
  
  background('#D0CECF');
  texture(matchImage);
  noStroke();
  scale (60);
  model (matchbox);



}
