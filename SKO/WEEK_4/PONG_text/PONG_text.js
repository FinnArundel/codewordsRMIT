// code by finn arundel
// inspired by https://www.youtube.com/watch?v=wRHAitGzBrg

function preload (){
  helvetica = loadFont('data/HelveticaNowDisplayXBlk.otf');
  Courier = loadFont('data/CourierStd.otf');
}

var ball = {
  x: 720,
  y: 400,
  xspeed: 10,
  yspeed: -5
};

function setup() {
  createCanvas(1440,800);
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
 

function move (){
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}


function bounce (){
  if ((ball.x <= 80) && (ball.y > mouseY -100 && ball.y < mouseY + 100)){
    ball.xspeed = (ball.xspeed *-1) + 2;
  }
  
   if (ball.x > 1380){
    ball.xspeed = ball.xspeed *-1;
  }
  
  if (ball.y < 25 || ball.y > 800){
    ball.yspeed = ball.yspeed *-1;
  }
  
}

function display (){
  noStroke();
  fill(255);
  textAlign(CENTER);
  textFont(Courier,40);
  text('CODE',ball.x,ball.y);
}
  
function paddle (){
  cursor('NONE');
  fill (255);
  noStroke ();
  rectMode (CENTER);
  rect (25,mouseY,15,200);
}
  
 function gameover (){
 if ((ball.x <=-20) && (ball.y > mouseY + 100 || ball.y < mouseY - 100)){
  ball.x = 720;
  ball.y = 400;
  ball.xspeed =0;
  ball.yspeed =0;
  background (0);
  fill(255);
  
 }

  if (keyIsPressed && (ball.x === 720 && ball.y === 400)){
  ball.xspeed =10;
  ball.yspeed =-5;
  }

}
