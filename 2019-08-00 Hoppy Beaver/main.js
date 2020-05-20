const WIDTH = 600;
const HEIGHT = 600;

// I changed it so it's like flappy bird in space.
// Instead of collecting the sticks, you have to 
// dodge the sun rays.

var SpaceMan = function(x, y) {
    this.x = x;
    this.y = y;
    // this.img = getImage("space/octopus");
    this.sticks = 0;
};

SpaceMan.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    rect(this.x, this.y, 40, 40);
};

SpaceMan.prototype.hop = function() {
    //this.img = getImage("space/octopus");
    this.y -= 5;
};

SpaceMan.prototype.fall = function() {
    //this.img = getImage("space/octopus");
    this.y += 5;
};

SpaceMan.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y <= this.y || stick.y - 150 >= this.y)) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(121, 227, 28);
    //rectMode(CENTER);
    rect(this.x, this.y, 20, 380);
    
    rect(this.x, this.y-150, 20, -300);
};

var spaceMan = new SpaceMan(200, 100);

var sticks = [];


function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (var i = 0; i < 20; i++) {  
    sticks.push(new Stick(i * 130 + 450, random(100, 370)));
  }
}

function draw() {
    // static
    background(8, 43, 89);
    fill(130, 79, 43);
    rectMode(CORNER);

    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        spaceMan.checkForStickGrab(sticks[i]);
        sticks[i].x -= 2;
    }
    
    if (spaceMan.sticks/sticks.length >= 0.95) {
        textSize(36);
        fill(204, 245, 90);
        text("YOU CRASHED!", 
            70 + sin(millis() * 0.8 +15) * 15, 
            200 + cos(millis() * 0.8+15) * 15);
        fill(247, 89, 89);
        text("YOU CRASHED!", 
            70 + sin(millis() * 0.8) * 15, 
            200 + cos(millis() * 0.8) * 15);
    }
    
    if (keyIsPressed && keyCode === 32) {
        spaceMan.hop();
    } else {
        spaceMan.fall();
    }
    spaceMan.draw();
};