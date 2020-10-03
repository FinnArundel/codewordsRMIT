// code by finn arundel
// code~words

let node = [];
let sentence = "the decentralisation of communication creates new webs of potential interaction between atomized individuals";
let helvetica;
let words = sentence.split(" ");

let sound;

let wdt;
let hgt;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
  sound = loadSound ('data/beep.mp3');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background (0);

  for ( let i = 0; i < words.length; i++) {
    wdt = random(50, width-50);
    hgt = random (50, height-50);
    node.push ( new NodePoint (wdt, hgt));
  }

  for ( i = 0; i < words.length; i++) {
    if (frameCount === 5 * i) {
      sound.play();
    }
  }

  for ( i = 0; i < words.length; i++) {
    if (frameCount > 5 * i) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }

  for ( i = 0; i < 1; i ++) {
    node[i].connect();
  }
}

class NodePoint {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  show (count) {
    for (var i = 0; i < words.length; i++) {

      if (count == 0) {
        fill (255, 0, 0);
      } else {
        fill (255);
      }

      textAlign (CENTER);
      textFont (helvetica, 18);
      noStroke();
      text(words[count], this.x, this.y);
    }
  }

  connect () {
    for ( let i = 1; i < words.length; i++) {
      if (frameCount  > 5 * i ){
      stroke (250);
      strokeWeight (1);
      line (node[i - 1].x, node[i - 1].y, node[i].x, node[i].y); // connects the words in sentence order
    }
  }
  }
}
