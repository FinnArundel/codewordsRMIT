# code~words. week 04 

Week 4 was mainly dedicated to coding, with Karen walking the class through how to load in and work with typography inside Processing. After lunch we experimented with interaction by making type respond by spinning and decreasing font size based on where on the canvas the mouse was placed. We also discuss the features of GitHub further and how it will become the studio’s SKO.

During the following week, inspired by the tutorials of Dan Shiffman I experimented more with Processing eventually creating a [pong-like game](https://finnarundel.github.io/codewordsRMIT/week_04/PONG_text/) utilising typography. This was very challenging but fun for me, mainly figuring out how to rebound the the ball off of the paddle and how to tell when you miss. I've also made it so the ball gradually builds up speed making it harder. 

<image src="PONG_text2.gif">

``` javascript
// code by finn arundel
// inspired by The Coding Train https://www.youtube.com/watch?v=wRHAitGzBrg

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
```
