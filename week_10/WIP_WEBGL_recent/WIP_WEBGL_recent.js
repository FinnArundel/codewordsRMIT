// code by finn arundel
// code~words

let node = [];
let sentence0 = "the decentralization of communication creates new webs of potential interaction between atomized individuals";
let sentence1 = "which on the one hand increases the communication activities carried out";
let sentence2 = "while at the same time fragmenting that communication into more numerous communications of shorter duration";
let sentence3 = "time and space both become abstractions and cease to have meaning or value in themselves";
let sentences = [sentence0, sentence1, sentence2, sentence3];

let index = 0;
let words = sentences[index].split(" ");

let sound;
let helvetica;

let time;
let size = 250;
let slider;
let timeSlider;

let reload;
let prev;
let next;

let cam;
//let roation = [];
//let angles;

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

  slider = createSlider(-250, 250, 0);
  slider.position(10, 10);
  slider.style('width', '155px');

  timeSlider = createSlider(0, 200, 50);
  timeSlider.position(10, 40);
  timeSlider.style('width', '155px');

  reload = createButton('reload');
  reload.position(15, 70);
  reload.mousePressed(resetSketch);

  prev = createButton('prev');
  prev.position(75, 70);
  prev.mousePressed(resetSketch);

  next = createButton('next');
  next.position(124, 70);
  next.mousePressed(nextSentence);
}

function draw() {
  background (0);
  let spin = radians(frameCount) *0.1;
  rotateY (-spin);

  let val = slider.value();
  for ( let i = 0; i < words.length; i++) {
    wdt = random (-size - val, size + val);
    hgt = random (-size - val, size + val);
    z = random (-size - val, size + val);
    node.push (new NodePoint (wdt, hgt, z, timeSlider.value()));
  }

  node[0].connect();
  node[0].sound();
  for ( let i = 0; i < words.length; i++) {  
    if (frameCount > node[i].time * i + node[i].time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}

function resetSketch () {
  background (0);
  let val = slider.value();
  frameCount = 0;
  for ( let i = 0; i < words.length; i++) {
    wdt = random(-size - val, size + val);
    hgt = random (-size - val, size + val);
    z = random (-size - val, size + val);
    node[i] = new NodePoint (wdt, hgt, z, timeSlider.value() );
  }

  node[0].connect();
  node[0].sound();
  for ( let i = 0; i < words.length; i++) {  
    if (frameCount > node[i].time * i) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}

function nextSentence () {
  index = 1 ;
  resetSketch ();
}



//rotation = cam.getRotation ();
//let angles = rotation.split(',');
//fill (255);
//let angle = map (rotation,-1,1,0,360);
//text (angle, -width/2 +10, 50);
