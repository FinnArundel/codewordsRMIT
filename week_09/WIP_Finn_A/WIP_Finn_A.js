// code by finn arundel
// 24.09.20

let node = [];
var sentence1 = "the decentralisation of communication creates new webs of potential interaction between atomized individuals";
var sentence2 = "which on the one hand increases the communication activities carried out,";
var sentence3 = "while at the same time fragmenting that communication into more numerous communications of shorter duration.";
var sentence4 = "time and space both become abstractions and cease to have meaning or value in themselves.";

var words = sentence1.split(" ");

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

  let overlapping = false; // overlapping feature by Daniel Shiffman https://www.youtube.com/watch?v=XATr_jdh-44

  for ( let i = 0; i < node.length; i++) {
    for (j=0; j < node.length; j++) {
      if (j != i) { // j equals every other node apart from the current i
        let d = dist(node[i].x, node[i].y, node[j].x, node[j].y);
        if (d < 150) {
          overlapping = true;
        }
      }
    }
  }

  if (overlapping == false) { // makes it so nothing generates when overlapping == true
    for ( let i = 0; i < node.length; i++) {
      node[i].show(i); // uses draw  counter as arguement for class
      stroke (255);
      line (node[i].x, node[i].y, node[i + 1].x, node[i + 1].y); // connects the words in sentence order
      node[i].show(i); // uses draw  counter as arguement for class
    }
  } else {
    resetSketch();
  }
}

function resetSketch () { //https://www.youtube.com/watch?v=lm8Y8TD4CTM
  for ( let i = 0; i < words.length; i++) {
    node[i] = new NodePoint (random(50, width-50), random (50, height-50));
  }
}

class NodePoint {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  show (count) {
    for (var i = 0; i < words.length; i++) {
      if (count === 0) {
        fill (255, 0, 0);
      } else {
        fill (255);
      }
      
      textAlign (CENTER);
      textFont (helvetica);
      textSize (18);
      noStroke();
      text(words[count], this.x, this.y);
    }
  }
}
