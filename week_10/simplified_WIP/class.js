class NodePoint {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  show (count) {
    for (var i = 0; i < words.length; i++) {
    
      if (count == 0) {
        fill (255, 0, 0);
      } else {
        fill (255);
      }

      textAlign (CENTER);
      textFont (helvetica, 18);
      noStroke();
      text(words[count], this.x, this.y);
    }
  }
}
