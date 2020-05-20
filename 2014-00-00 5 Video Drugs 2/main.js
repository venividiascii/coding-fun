const WIDTH = 500;
const HEIGHT = 500;

var t = 0;
var cornerX = 0;
var cornerY = 0;
var d = 20;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  frameRate(60);
}

function draw() {
    background(150*sin(t), 150*sin(t+90), 150*sin(t+180));
    
    t+=.03;
    if(t>360){
        t = 0;
    }
    for(var i=0; i < 30; i++){
        for(var j=0; j < 30; j++){
            fill(350*sin(t+i*20), j*10 + 150*cos(t+i*20), 50+i*j);
            cornerX = i*20 + 15*sin(t+i*20) - 50;
            cornerY = j*20 + 35*sin(t+i*10) - 50;
            rect(cornerX, cornerY, d + 5*sin(t+i*20), d + 5*sin(t+i*20));
        }
    }


}