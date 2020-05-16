const WIDTH = 600;
const HEIGHT = 650;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  gamestate = new Gamestate();
}

function draw() {
  gamestate.update();
}

function keyPressed() {
	gamestate.control(keyCode)
}