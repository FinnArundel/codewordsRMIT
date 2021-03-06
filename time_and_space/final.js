// code by finn arundel
// code~words rmit
// thanks to Karen Ann Donnachie and Daniel Shiffman for the  k n o w l e d g e

let node = [];
let sentence0 = "the decentralization of communication creates new webs of potential interaction between atomized individuals"; // 13
let sentence1 = "which on the one hand increases the communication activities carried out"; // 11
let sentence2 = "while at the same time fragmenting that communication into more numerous communications of shorter duration"; // 15
let sentence3 = "time and space both become abstractions and cease to have meaning or value in themselves"; // 15
let sentences = [sentence0, sentence1, sentence2, sentence3];

let index = 0;
let words = sentences[0].split(" ");

let song;
let sound;
let helvetica;

let time;
let spaceSlider;
let timeSlider;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
  sound = loadSound ('data/beepbeep.mp3');
  song = loadSound ('data/signals-short.mp3');
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


if (width > 710){
  timeSlider = createSlider(0, 100, 50);
  timeSlider.position(width/2 - 350, height -25);
  timeSlider.style('width', '250');
  timeSlider.attribute('title', 'time');
  timeSlider.mouseReleased(resetSketch);

  spaceSlider = createSlider(0, 2, 1, 0);
  spaceSlider.position(width/2 - 80, height - 25);
  spaceSlider.style('width', '250');
  spaceSlider.attribute('title', 'space');
  spaceSlider.input(spaceSliderChange);

  let reload = createButton('reload');
  reload.position(width/2+190, height - 25);
  reload.mousePressed(resetSketch);

  let prev = createButton('prev');
  prev.position(width/2+256, height - 25);
  prev.mousePressed(prevSentence);  

  let next = createButton('next');
  next.position(width/2+310, height - 25);
  next.mousePressed(nextSentence);
} else {
    timeSlider = createSlider(0, 100, 50);
  timeSlider.position(width/2-150, height-70);
  timeSlider.style('width', '300');
  timeSlider.attribute('title', 'time');
  timeSlider.mouseReleased(resetSketch);
  timeSlider.touchEnded(resetSketch);
  
  spaceSlider = createSlider(0, 2, 1, 0);
  spaceSlider.position(width/2-150, height-50);
  spaceSlider.style('width', '300');
  spaceSlider.input(spaceSliderChange);

  reload = createButton('reload');
  reload.position(width/2-81, height - 27);
  reload.mousePressed(resetSketch);

  prev = createButton('prev');
  prev.position(width/2 -20, height - 27);
  prev.mousePressed(prevSentence);

  next = createButton('next');
  next.position(width/2 + 30, height-27);
  next.mousePressed(nextSentence);
}

  for ( let i = 0; i < words.length; i++) {
    let size = height/4;
    wdt = int(random(-size, size ));
    hgt = int (random (-size, size ));
    z = int (random (-size, size ));
    node[i] = new NodePoint (wdt, hgt, z, timeSlider.value());
  }
  song.play();
  song.loop();
}

function draw() {
  background (0);

  let spin = radians(frameCount) *0.1;
  rotateY (-spin);

  if (mouseIsPressed === true) {
    cursor('NONE');
  } else {
    cursor('grab');
  }

  node[0].connect();
  node[0].sound();

  for (let i = 0; i < words.length; i++) {  
    if (frameCount > node[i].time * i + node[i].time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}

function resetSketch () {
  node = [];
  words = sentences[index].split(" ");

  frameCount = 0;

  for ( let i = 0; i < words.length; i++) {
    let size = height/4;
    wdt = int(random(-size, size));
    hgt = int(random (-size, size));
    z = int(random (-size, size));
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

function spaceSliderChange() {
  for ( let i = 0; i < words.length; i++) {  
    node[i].scale(); //this will call the scale() part of your class, which is where you apply the multiplier (once)
  }
}
