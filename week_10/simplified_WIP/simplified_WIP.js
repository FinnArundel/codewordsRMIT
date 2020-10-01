// code by finn arundel
// code~words

let node = [];
let sentence = "the decentralisation of communication creates new webs of potential interaction between atomized individuals";
let helvetica;
let words = sentence.split(" ");

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  frameRate (10);
}

function draw() {
  background (0);
  generate();

  for ( let i = 0; i < node.length; i++) {
    node[i].show(i); // uses draw  counter as arguement for class
  }
  for ( let i = 0; i < node.length - 1; i++) {
    stroke (250);
    strokeWeight (1);
    line (node[i].x, node[i].y, node[i + 1].x, node[i + 1].y); // connects the words in sentence order
  }
}

function generate () {
  for ( let i = 0; i < words.length; i++) {
    if (frameCount > 10 * i) {
      let x = random(50, width-50);
      let y = random (50, height-50);
      node[i] = new NodePoint (x, y);
    }
  }
}
