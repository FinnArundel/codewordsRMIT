// code by finn arundel
// code~words rmit

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
let reload;
let size = 225;
let spaceSlider;
let timeSlider;
let val;
let prev;
let next;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
  sound = loadSound ('data/beepbeep.mp3');
}

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
  createEasyCam( { 
  distance: 
    700
  } 
  );
  document.oncontextmenu = function () { 
    return false;
  };

  timeSlider = createSlider(0, 200, 50);
  timeSlider.position(width/2 - 350, height - 25);
  timeSlider.attribute ('time');
  timeSlider.style('width', '250px');

  spaceSlider = createSlider(0.5, 2, 1, 0);
  spaceSlider.position(width/2 - 80, height - 25);
  spaceSlider.style('width', '250px');

  reload = createButton('reload');
  reload.position(width/2+190, height - 25);
  reload.mousePressed(resetSketch);

  prev = createButton('prev');
  prev.position(width/2+256, height - 25);
  prev.mousePressed(prevSentence);

  next = createButton('next');
  next.position(width/2+310, height - 25);
  next.mousePressed(nextSentence);


  for ( let i = 0; i < words.length; i++) {
    wdt = int(random(-size, size ));
    hgt = int (random (-size, size ));
    z = int (random (-size, size ));
    node[i] = new NodePoint (wdt, hgt, z, timeSlider.value());
  }
}

function draw() {

  background (0);
  let spin = radians(frameCount) *0.1;
  rotateY (-spin);

  node[0].connect();
  node[0].sound();

  for ( let i = 0; i < words.length; i++) {  
    node[i].move();
    let numb2 = sentences[index].split(" ");
    if (frameCount > node[i].time * i + node[i].time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}

function resetSketch () {
  frameCount = 0;

  for ( let i = 0; i < words.length; i++) {
    wdt = random(-size, size);
    hgt = random (-size, size);
    z = random (-size, size);
    node[i] = new NodePoint (wdt, hgt, z, timeSlider.value());
  }
}

function nextSentence () {
  if (index < 3) {
    index ++;
    resetSketch();
  }
}

function prevSentence () {
  if (index > 0) {
    index --;
    resetSketch();
  }
}
