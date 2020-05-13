const WIDTH = 600;
const HEIGHT = 600;

class PhysicsObject {
  constructor(x, y){
    this.p = createVector(x, y)
    this.v = createVector(0, 0)
    this.a = createVector(0, 0)
    this.gravity = createVector(0, 10)
    this.drag = .99
  }
  update(){
    this.v = p5.Vector.add(this.v, this.a)
    this.v = p5.Vector.mult(this.v, this.drag)
    this.p = p5.Vector.add(this.p, this.v)
    
  }
  
}

let bug;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  bug = new Physics
}

function draw() {
  background(30);
}