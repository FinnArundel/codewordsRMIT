class NodePoint {
  constructor (x, y, z, time) {
    this.x = x * spaceSlider.value();
    this.y = y * spaceSlider.value();
    this.z = z * spaceSlider.value();
    this.initialX = x;
    this.initialY = y;
    this.initialZ = z;
    this.time = time;
  }

  connect () {
    for ( let i = 1; i < words.length; i++) {
      if (frameCount  > this.time * i + this.time) {
        stroke (255);
        strokeWeight (1);
        line (node[i - 1].x, node[i - 1].y, node[i - 1].z, node[i].x, node[i].y, node[i].z); // connects the words in sentence order
      }
    }
  }

  show (count) {
    for (let i = 0; i < words.length; i++) {
      if (frameCount > this.time * i + this.time) {

        if (count === 0) {
          fill (255, 0, 0);
        } else {
          fill (255);
        }

        textAlign (CENTER);
        textFont (helvetica, 12);
        noStroke();

        push();
        translate (this.x, this.y, this.z);
        let spin = radians(frameCount) *0.1;
        rotateY (spin);
        text(words[count], 0, 0);
        pop();
      }
    }
  }

  sound () {
    for (let i = 0; i < words.length; i++) {
      if (frameCount === this.time * i + this.time) {
        sound.play();
      }
    }
  }

  scale () {
      this.x = this.initialX * spaceSlider.value(); 
      this.y = this.initialY * spaceSlider.value();
      this.z = this.initialZ * spaceSlider.value(); 
  }
}
