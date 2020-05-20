const WIDTH = 600;
const HEIGHT = 600;

//The transformation variables
var a = 1;
var b = 2;
var c = 2;
var d = 1;

//x y offsets, within transformation reference frame
var x0 = 50;
var y0 = 200;

//time for animation
var t = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
}

function draw() {
    background(     22, 87, 184);
    noStroke();
    for(var i=20; i<160; i++){
        for(var j=50; j<100; j++){
            checkers(i,j);
        }    
    }
    
    if(t > 360){
        t=0;
    }
    t+=.03;
    
    //Cycle the transformation vectors
    a=sin(t);
    b=sin(t+90);
    c=sin(t+90);
    d=sin(t);
    
    strokeWeight(2);
    stroke(5);
    line(200,200,a*50+200,b*50+200);
    line(200,200,c*50+200,d*50+200);
}


//The transformation equation, taken from the
//mode 7 Wikipedia page
var transformX = function(xx, yy){
    return (a*(xx-x0) + b*(yy-y0) + x0);
};
var transformY = function(xx, yy){
    return (c*(xx-x0) + d*(yy-y0) + y0);
};

var checkers = function(x,y){
    //The pre-transformation coloring instrucions,
    //using "?" and ":" as a shortened way of doing an
    //if statement. (Google "Ternary Operator" to learn more)
    fill(x%20>10?0:255, y%20>5?0:155, y%20>10?0:255);
    rect(transformX(x,y)+150,transformY(x,y),1,1);
};
