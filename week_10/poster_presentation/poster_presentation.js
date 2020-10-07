let poster;

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

  background('#D0CECF');
  texture(poster);
  noStroke();
  plane (297,420);


}
