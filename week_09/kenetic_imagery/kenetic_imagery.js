let pg;

let wdt = 594;
let hgt = 841;

let img;

function preload () {
  img = loadImage ('data/1.jpg');
}

function setup() {
  createCanvas (wdt, hgt);
  pg = createGraphics (wdt, hgt);
//  img.filter(THRESHOLD);
}


function draw() {
  //background (0);

  pg.image (img, 0, 0, width, height);
  image(img,0,0,width,height);
  
  let tilesX = 16;
  let tilesY = 8;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (x = 0; x < tilesX; x++) {
    for (y = 0; y < tilesY; y++) {

      let wave = int(sin(frameCount * 0.05 + ( x * y)  * 0.07) * 100);

      // SOURCE   
      let sx = x * tileW + wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      // DESTINATION
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy (pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}
