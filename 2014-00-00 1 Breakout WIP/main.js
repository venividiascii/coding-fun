const WIDTH = 400;
const HEIGHT = 400;

var x = 0;
var y = 1;
var ballRad = 10;
var ballPos = [200, 300];
var ballSpeed = 1;
var ballDirection = [ballSpeed, -ballSpeed];

var paddleRadius = 50;
var paddleTop = 360;
var paddleHeight = 10;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(140);
  noStroke();
}

function draw() {
      background(0, 0, 0);
    fill(255, 255, 255);
    rect(mouseX-(paddleRadius), paddleTop, paddleRadius*2, 20,9);
    
    for (var i = 0; i < 4; i++) { 
        for (var j = 0; j < 8; j++) { 
            //fill(random(200,255), random(100,255), random(200,255));
            fill(j*j*4 + 50, j*j*3 + 50, j*j*3 + 50);
            rect(i*99+3, j*22+3, 97, 20,3);
        } 
    } 
    
    fill(200, 255, 255);
    ellipse(ballPos[x] - ballRad, ballPos[y] - ballRad, ballRad*2, ballRad*2);

    ballPos[x] += ballDirection[x];
    ballPos[y] += ballDirection[y];
    
    if (ballPos[x] < ballRad*2 || ballPos[x] > 400) {  //Bounce off walls
        ballDirection[x] = -ballDirection[x];
    } 
    if (ballPos[y] < ballRad*2 || ballPos[y] > 400) {  //Bounce off ceiling
        ballDirection[y] = -ballDirection[y];
    } 
    //Bounce off paddle
    if (ballPos[y] > paddleTop & 
        ballPos[y] < paddleTop + paddleHeight &
       (ballPos[x] > mouseX-paddleRadius & 
        ballPos[x] < mouseX+paddleRadius )) {  
            ballDirection[y] = -ballSpeed;
    } 
}