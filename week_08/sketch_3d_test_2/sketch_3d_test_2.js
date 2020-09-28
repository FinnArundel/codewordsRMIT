let angle = 0;
let cam;

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
}

function draw() {
  background(200);

  rotateY(angle *2);

  texture(cam);
  noStroke ();
  sphere (300);
  
  angle = angle + 0.02;

}
