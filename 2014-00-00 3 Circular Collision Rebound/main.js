const WIDTH = 600;
const HEIGHT = 600;

var x = 0;
var y = 1;
var accel = 0.05;
var ballRad = [50,200];
var ballPos = [
                [200, 100],
                [300, 300]
              ];
var ballVel = [
                [0, 0],
                [0, 0]
              ];
var distance;
var distanceOld;

var normHatX;
var normHatY;
var dotProduct;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  frameRate(100);
}

function draw() {
    //Draw everything
    background(193, 245, 239);
    for (var row = 1; row >= 0; row--) {
        ellipse(ballPos[row][0], ballPos[row][1], ballRad[row], ballRad[row]);
    } 
    fill(0, 153, 255);
    
    distanceOld = distance;
    distance=sqrt(pow(ballPos[0][x]-ballPos[1][x],2)+pow(ballPos[0][y]-ballPos[1][y],2));

    if (distance < (ballRad[0]/2 + ballRad[1]/2) && distance < distanceOld){
        normHatX = (ballPos[0][x] - ballPos[1][x]) / distance;
        normHatY = (ballPos[0][y] - ballPos[1][y]) / distance;
        dotProduct = (ballVel[0][x] * normHatX) + (ballVel[0][y] * normHatY);
        
        ballVel[0][x] = ballVel[0][x] - (2 * dotProduct * normHatX);
        ballVel[0][y] = ballVel[0][y] - (2 * dotProduct * normHatY);
    }
    
    if (keyIsPressed && keyCode === UP_ARROW   ) {ballVel[0][y] -= accel;}
    if (keyIsPressed && keyCode === DOWN_ARROW ) {ballVel[0][y] += accel;}
    if (keyIsPressed && keyCode === LEFT_ARROW ) {ballVel[0][x] -= accel;}
    if (keyIsPressed && keyCode === RIGHT_ARROW) {ballVel[0][x] += accel;}

    if (ballPos[0][x] < ballRad[0]/2 && ballVel[0][x] < 0){
        ballVel[0][x] =  -ballVel[0][x];
    }
    if (ballPos[0][x] > width - ballRad[0]/2 && ballVel[0][x] > 0){
        ballVel[0][x] =  -ballVel[0][x];
    }
    if (ballPos[0][y] < ballRad[0]/2 && ballVel[0][y] < 0){
        ballVel[0][y] =  -ballVel[0][y];
    }
    if (ballPos[0][y] > width - ballRad[0]/2 && ballVel[0][y] > 0){
        ballVel[0][y] =  -ballVel[0][y];
    }  

    //ballVel[0][x] *= 0.98 ;
    //ballVel[0][y] *= 0.98 ;
    //Gravity: ballVel[0][y] += 0.1 ;
    ballPos[0][y] += ballVel[0][y];
    ballPos[0][x] += ballVel[0][x];   
}