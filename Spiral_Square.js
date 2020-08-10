var expand = 5;
var x = 0;

function setup() {
createCanvas (1440, 821);
background (0);
}


function draw() {


noFill ();
stroke (0,0,255);
rectMode(CENTER);
x+=0.02;
translate (width/2, height/2); 
rotate (x);
rect (0,0,expand,expand);

expand = expand +5;


}

function keyPressed (){
 background (0);
 expand =5;
 x=0;
  
  
}
