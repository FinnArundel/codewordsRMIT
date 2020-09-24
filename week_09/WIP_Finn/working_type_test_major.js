// code by finn arundel

let node = [];
var sentence1 = " the decentralisation of communication creates new webs of potential interaction between atomized individuals";
var sentence2 = " which on the one hand increases the communication activities carried out,";
var sentence3 = " while at the same time fragmenting that communication into more numerous communications of shorter duration.";
var sentence4 = " time and space both become abstractions and cease to have meaning or value in themselves.";


var words = sentence2.split(" ");

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  for ( let i = 0; i < words.length; i++) {
    node[i] = new NodePoint (random(50, width-50), random (50, height-50));
  }
}

function draw() {
  background (0);
  for ( let i = 0; i < node.length; i++) {
    node[i].show(i); // uses draw counter as arguement for class
      if (i == 0){
        fill (255,0,0);
      } else {
        fill (255);
      }
  }
}

class NodePoint {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  show (count) {
    for (var i = 0; i < words.length; i++) {
      textAlign (CENTER);
      textFont (helvetica);
      textSize (16);
      noStroke();
      text(words[count], this.x, this.y);
    }
  }
}
