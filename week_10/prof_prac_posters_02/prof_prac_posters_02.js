let imgs = [];
let asset = [];

function preload () {
  for (let i = 0; i < 4; i++) {
    imgs[i] = loadImage ("images/"+ i +".png");
  }
}

function setup() {
  createCanvas (2526, 3573);
  angleMode (DEGREES);
  for (let i = 0; i < imgs.length; i++) {
    asset[i] = new Bubble (random(750, width-750), random(900, height-900), random (-15, 15));
  }
}

function draw() {
  let b = color('#f2f2f3');
  background (b);


  let overlapping = false; 

  for ( let i = 0; i < imgs.length; i++) {
    for (let j = 0; j < imgs.length; j++) {
      if (j != i) { // j equals every other node apart from the current i
        let d = dist(asset[i].x, asset[i].y, asset[j].x, asset[j].y);
        if (d < 500) {
          overlapping = true;
        }
      }
    }
  }

  if (overlapping === false) { 
    for (let i = 0; i < imgs.length; i++) {
      asset[i].show(i);
    }
  } else {
    resetSketch();
  }

  //for (i = 0; i < 100; i++) {
  //  if (frameCount === (40 * i) - 20 && overlapping === false) {
  //    save ('PracPoster.jpg');
  //  }
  //  if (frameCount === 40 * i && overlapping === false) {
  //    resetSketch();
  //  }
  //}
}

function resetSketch () {
  for (let i = 0; i < imgs.length; i++) {
    asset[i] = new Bubble (random(750, width-750), random(900, height-900), random (-15, 15));
  }
}

class Bubble {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show (num) {
    for (let i = 0; i < imgs.length; i ++) {
      imageMode(CENTER);
      push();
      translate (this.x, this.y);
      rotate (this.r);
      image (imgs[num], 0, 0);
      pop();
    }
  }
}

function keyPressed (){
   if (keyCode === 32){
    save ('PracPoster.jpg'); 
  }
  
}
