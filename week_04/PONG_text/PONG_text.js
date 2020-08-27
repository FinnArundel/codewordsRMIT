// code by finn arundel
// inspired by https://www.youtube.com/watch?v=wRHAitGzBrg

function preload () {
  helvetica = loadFont('data/HelveticaNowDisplayXBlk.otf');
  Courier = loadFont('data/CourierStd.otf');
}

let ball = {
  x: 
720, 
  y: 
410, 
  xspeed: 
0, 
  yspeed: 
0
  };

function setup() {
  createCanvas(1440, 821);
  background(0);
}


function draw() {
  background(0);
  move ();
  bounce ();
  display ();
  paddle ();
  gameover ();
}


function move () {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}


function bounce () {
  if ((ball.x <= 80) && (ball.x >= 25) && (ball.y > mouseY -75 && ball.y < mouseY + 75)) {
    ball.xspeed = (ball.xspeed *-1) + 2;
    ball.yspeed = random ([-5, 5]);
  }

  if (ball.x > 1380) {
    ball.xspeed = ball.xspeed *-1;
  }

  if (ball.y < 25 || ball.y > 821) {
    ball.yspeed = ball.yspeed *-1;
  }
}

function display () {
  noStroke();
  fill(255);
  textAlign(CENTER);
  textFont(Courier, 40);
  text('CODE', ball.x, ball.y);
}

function paddle () {
  cursor('NONE');
  fill (255);
  noStroke ();
  rectMode (CENTER);
  rect (25, mouseY, 15, 150);
}

function gameover () {
  if (ball.x <=-20) {
    ball.x = width/2;
    ball.y = height/2;
    ball.xspeed =0;
    ball.yspeed =0;
  }

  if (keyIsPressed &&  keyCode === 32 && (ball.xspeed === 0 && ball.yspeed === 0)) {
    ball.xspeed =10;
    ball.yspeed =-5;
  }

  if (ball.xspeed === 0) {
    textFont(Courier, 40);
    text('PRESS SPACE', 720, 150);
    text('WORDS', 720, 450);
  }
}
