// code by finn arundel
// code~words

let node = [];
let sentence = "the decentralization of communication creates new webs of potential interaction between atomized individuals";
let helvetica;
let words = sentence.split(" ");

let sound;
let song;
let time = 15;
let size = 250;

let slider;
let button;

let cam;
//let roation = [];
//let angles;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
  sound = loadSound ('data/beepbeep.mp3');
  song = loadSound ('data/loop.wav');
}

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
  cam = createEasyCam( {
  distance:
    700
  }
  );
  document.oncontextmenu = function() { 
    return false;
  }

  slider = createSlider(-250, 250, 0);
  slider.position(10, 10);
  slider.style('160px');
  
  button = createButton('reset');
  button.position(15, 40);
  button.mousePressed(resetSketch);
  
}

function draw() {
  background (0);

  let spin = radians(frameCount) *0.1;
  rotateY (-spin);
  //fill (255);
  //text(slider.value(), 10, 100);
  let val = slider.value();
  for ( let i = 0; i < words.length; i++) {
    wdt = int(random(-size - val, size + val));
    hgt = int(random (-size - val, size + val));
    z = int(random (-size - val, size + val));
    node.push (new NodePoint (wdt, hgt, z));
  }

  node[0].connect();
  for ( let i = 0; i < words.length; i++) {
    if (frameCount > time * i + time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
    if (frameCount === time * i + time) {
      sound.play();
    }
  } 
}

function resetSketch () {
  background (0);
  let val = slider.value();
  frameCount = 0;
   for ( let i = 0; i < words.length; i++) {
    wdt = int(random(-size - val, size + val));
    hgt = int(random (-size - val, size + val));
    z = int(random (-size - val, size + val));
    node[i] = new NodePoint (wdt, hgt, z);
   }
   
    node[0].connect();
    for ( let i = 0; i < words.length; i++) {
      if (frameCount > time * i + time) {
        node[i].show(i); // uses draw  counter as arguement for class
      }
      if (frameCount === time * i + time) {
        sound.play();
      }
    }
  }


//rotation = cam.getRotation ();
//let angles = rotation.split(',');
//fill (255);
//let angle = map (rotation,-1,1,0,360);
//text (angle, -width/2 +10, 50);
