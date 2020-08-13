function preload (){
  Din = loadFont('data/DinPro-Bold.otf');
  AdobeArabic= loadFont('data/AdobeArabic-Regular.otf');
}


function setup() {
  createCanvas(600,600);
  background(255);
}


function draw() {
  fill(0);
  textAlign(CENTER);
  textFont(AdobeArabic,20);
  text('hello',500,100);
  textFont(Din,50);
  text('welcome',150,250);
  textFont(AdobeArabic,220);
  text('codes',350,500);

}
