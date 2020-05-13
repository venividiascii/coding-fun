const WIDTH = 600;
const HEIGHT = 600;
class Game {
  constructor(){
    this.ball = new Ball(width / 2, height /2);
    this.paddle = new Paddle();
  }
  update(){
    this.ball.update();
    this.paddle.update();
    
    this.draw()
  }
  draw(){
    background(30);
    this.ball.draw();
    this.paddle.draw();
  }
  control(keyCode){
    console.log("test")
    this.paddle.control(keyCode)
  }
}
class Ball {
  constructor(x, y){
    this.p = createVector(x, y)
    this.v = createVector(2, 2)
    this.w = 20 //width
    this.h = 20 //height
  }
  update() {
    this.wallCollision()
    this.p = p5.Vector.add(this.p, this.v)
  }
  draw() {
    rect(this.p.x, this.p.y, this.w, this.h)
  }
  wallCollision(){
    if (this.p.x < 0 || this.p.x + this.w > width){
      this.v.x *= -1;
    }    
    if (this.p.y < 0 || this.p.y + this.h > height){
      this.v.y *= -1;
    }  
  }
  paddleCollision(){
    
  }
}


class Paddle {
  constructor() {
    this.w = 100;
    this.h = 20;
    this.x = width / 2 - this.w / 2
    this.y = height - 30
    this.v = 0
    this.maxV = 5
  }
  update() {
    this.x += this.v
  }
  draw() {
    rect(this.x, this.y, this.w, this.h)
  }
  control(keyCode){
    if (keyCode == "LEFT"){
      this.v = -this.maxV
    }
    else if (keyCode == "RIGHT"){
      this.v = this.maxV
    }
  }
  control(keyCode){
        console.log(keyCode)
    if (keyCode == 37){
      this.v = -this.maxV
    }
    else if (keyCode == 39){
      this.v = this.maxV
    }
  }
}


class Bars {
  constructor(vertices) {
    
  }
}


//let game;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game = new Game();
}

function draw() {
  game.update();
}

function keyPressed() {
	game.control(keyCode)
}