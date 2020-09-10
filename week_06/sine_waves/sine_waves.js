let x1;
let y1;
let x2;
let y2;

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0);
}

function draw() {

  let x1 = sin(frameCount*0.04)*475;
  let y1 = -sin(frameCount*0.07)*250;
  let x2 = sin(frameCount*0.01)*600;
  let y2 = -sin(frameCount*0.03)*350;

  background (0,15);

  noStroke();
  noFill();
  translate (width/2, height/2);

  stroke (255);
  line (x1, y1, x2, y2);
}
