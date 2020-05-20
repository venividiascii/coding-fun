// A cool glider game, but some of the images don't
// load and I need to fix the key bindings

const WIDTH = 400;
const HEIGHT = 400;

var angle = 0;
var speed = 2;
var depth = 20;
var distance = 300;

//var sky = getImage("space/background");
//var tree = getImage("cute/TreeTall");
//var plane = getImage("space/rocketship");

function setup() {
  createCanvas(WIDTH, HEIGHT);
  console.log("key bindings need to be patched");
  angleMode(DEGREES)
}

function draw() {
    
    // Draw everything
    background(193, 245, 239);
    //image(sky,0,0,400,400);
    fill(0, 153, 255);
    

    if (keyIsPressed && keyCode === UP_ARROW   ) {angle--;}
    if (keyIsPressed && keyCode === DOWN_ARROW ) {angle++;}
    //if (keyIsPressed && keyCode === LEFT_ARROW ) { ;}
    //if (keyIsPressed && keyCode === RIGHT_ARROW) { ;}

    speed = sqrt(depth)/2;
    depth = depth < 10 ? 10 : depth + speed*sin(angle);
    stroke(207, 180, 180);
    strokeWeight(5);
    line(30,depth,30+50*cos(angle),depth+50*sin(angle)); 
    //image(plane, 30,depth,30+50*cos(angle),depth+50*sin(angle));

    rect(distance, 270, 40, 150);

    distance = distance < -50 ? 400 :distance - speed;
}
