// code by finn arundel
// code~words

let node = [];
let sentence = "the decentralization of communication creates new webs of potential interaction between atomized individuals";
let words = sentence.split(" ");

let sound;
let helvetica;
let size = 225;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
  sound = loadSound ('data/beepbeep.mp3');
}

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
  cam = createEasyCam( { 
  distance: 
    700
  } 
  );
  document.oncontextmenu = function () { 
    return false;
  };
}

function draw() {
  background (0);
  let spin = radians(frameCount) *0.1;
  rotateY (-spin);

  let val = slider.value();
  for ( let i = 0; i < words.length; i++) {
    wdt = random (-size, size);
    hgt = random (-size, size);
    z = random (-size, size);
    node.push (new NodePoint (wdt, hgt, z, 30);
  }

  node[0].connect();
  node[0].sound();
  for ( let i = 0; i < words.length; i++) {  
    if (frameCount > node[i].time * i + node[i].time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}
