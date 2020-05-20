const WIDTH = 600;
const HEIGHT = 600;

//Hover the mouse up and down to cycle through all the colors

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  frameRate(100);
}

function draw() {
    for (var i = 0; i < 128; i++) { 
        for (var j = 0; j < 128; j++) { 
            fill(i*2, j*2, mouseY/2);
            rect(i*3+8, j*3+8, 3, 3);
        }
    }
}