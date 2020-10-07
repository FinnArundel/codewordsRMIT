class NodePoint {
  constructor (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  connect () {
    let time = timeSlider.value();
    for ( let i = 1; i < words.length; i++) {
      if (frameCount  > time * i + time) {
        stroke (250);
        strokeWeight (1);
        line (node[i - 1].x, node[i - 1].y, node[i - 1].z, node[i].x, node[i].y, node[i].z); // connects the words in sentence order
      }
    }
  }

  show (count) {
    for (let i = 0; i < words.length; i++) {
      noStroke();
      if (count == 0) {
        fill (255, 0, 0);
        // stroke (255, 0, 0);
      } else {
        fill (255);
        //stroke (255, 0, 0);
      }

      textAlign (CENTER);
      textFont (helvetica, 12);

      push();
      translate (this.x, this.y, this.z);
      let spin = radians(frameCount) *0.1;
      rotateY (spin);
      text(words[count], 0, 0);
      pop();
    }
  }
}
