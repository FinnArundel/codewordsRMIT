// codewords workshop thursday 13 august
// code by finn arundel


function preload (){
  Din = loadFont('data/DinPro-Bold.otf');
  AdobeArabic = loadFont('data/AdobeArabic-Regular.otf');
}

var spin = 0;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  background(255);
}

 
function draw() {
  cursor('NONE'); //removes cursor
  background (255,75);
  fill(0);
  textAlign(CENTER);
  translate(mouseX,mouseY); // centred on cursor
  rotate(spin); 
  textFont(Din,map(mouseY,0,600,5,200));
  text('hello',0,0);
  
  spin=spin+map(mouseX,0,600,-10,10); //increases or decreases speed depending on x axis

}
