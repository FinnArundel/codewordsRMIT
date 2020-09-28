# code~words. week 09.

In class with week we seperated outselves into groups and had time to work on our assignments. At the start of the class I had this sketch (below).

``` javascript
let node = [];
var sentence = " the decentralisation of communication creates new webs of potential interaction between atomized individuals";

var words = sentence.split(" ");


function setup() {
  createCanvas (windowWidth, windowHeight);
  for ( let i = 0; i < words.length; i++) {
    node[i] = new NodePoint (random(50, width-50), random (50, height-50));
  }
}

function draw() {
  background (0);
  for ( let i = 0; i < node.length; i++) {
    node[i].show(); // uses draw counter as arguement for class
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
      textSize (16);
      noStroke();
      fill (255);
      text(words[i], this.x, this.y);
    }
  }
}
```
<img src="week_09_start.gif">

My plan for the day was it figure out a way to seperate the type so it wasn't stacked on top of each other, as well as connecting the line word to word in sentence order.
