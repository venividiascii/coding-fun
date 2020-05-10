const WIDTH = 600;
const HEIGHT = 600;


let myRay;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  myRay = new Ray(createVector(50,50), createVector(20,20));
}

function draw() {
  ellipse(50, 50, 50);
}