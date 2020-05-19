const WIDTH = 1200;
const HEIGHT = 1200;
const MAX_ITER = 255;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  pixelDensity(1)
  noLoop
} 

function draw() {
  background(30);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let value = mandlebrot(createVector(
        map(x, 0, width, -2.0, 2.0),
        map(y, 0, height, -2.0, 2.0)
      ))*5;
      value = map(log(value), 1, 10, 240, -180);
      const index = (x + y * width) * 4
      pixels[index + 0] = value;
      pixels[index + 1] = value;
      pixels[index + 2] = value;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
  noLoop();
}

function mandlebrot(c) {
  //square real and imaginary
  let iterations = 0
  let z = createVector(0, 0);
  let zNext = createVector(0, 0);

  for (iterations = 0; iterations < MAX_ITER; iterations++) {
    zNext = p5.Vector.add(cSquare(z), c );

    if (zNext.magSq() > 4){break;}
    z = zNext
  }
  return iterations;
}

function cSquare(c) {
  return createVector(
    c.x*c.x - c.y *c.y,
    2 * c.x * c.y
  )
}