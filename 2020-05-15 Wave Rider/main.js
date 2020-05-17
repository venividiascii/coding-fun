const WIDTH = 600;
const HEIGHT = 600;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  wave = new Wave();
}

function draw() {
  background(30);
  
  wave.update()
  wave.draw()
  
}