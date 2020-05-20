const WIDTH = 400;
const HEIGHT = 400;

var x = 0;
var y = 1;
var paddle = [20,350];
var paddleSpd = 5;
var paddleW = 80;
var paddleH = 10;
var ballPos = [30, 30];
var ballSpd = [3, 3];
var ballR = 10;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  console.log("Controls need to be fixed after downloading from Khan Academy")
}

function draw() {
  background(0, 0, 0);
  rect(paddle[x],paddle[y],paddleW,paddleH);
  ellipse(ballPos[x],ballPos[y],ballR*2,ballR*2);

  ballPos[x] += ballSpd[x];
  ballPos[y] += ballSpd[y];

  //ballSpd[x] = (ballPos[x] > 400) ? -ballSpd[x] : ballSpd[x];
  if(ballPos[x] < ballR || ballPos[x] > width-ballR){
      ballSpd[x] *= -1;
  }
  if(ballPos[y] < ballR || ballPos[y] > height-ballR){
      ballSpd[y] *= -1;
  }
  if((ballPos[y] > paddle[y] - ballR) && ballPos[x] > paddle[x] && ballPos[x] < paddle[x] + paddleW){
             ballSpd[y] *= -1; 
  }

  if (keyIsPressed && keyCode === LEFT_ARROW ) {paddle[x] -= 10;}
  if (keyIsPressed && keyCode === RIGHT_ARROW) {paddle[x] += 10;}
}