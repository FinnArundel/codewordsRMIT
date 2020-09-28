let angle = 0;

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
}


function draw() {
  background(0);
  rotateY(angle *2);
  rotateX(angle * 0.2);

  noFill ();
  stroke (255);
  torus (220,70);

  angle = angle + 0.02;
}
