let angle = 0;
let lino;

function preload() {
  lino = loadImage ('data/Lino.jpeg');
}

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  rotateY(angle *2);
  rotateX(angle * 0.2);
  rotateZ(angle);

  texture(lino);
  noStroke();
  plane (297,420);

angle = angle + 0.01;
}
