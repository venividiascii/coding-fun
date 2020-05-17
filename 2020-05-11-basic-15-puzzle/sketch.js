// A basic 15-puzzle
// Some less-basic spinoff ideas:
//   - convert an image into a puzzle
//   - import an image, and have it auto-shuffle in 
//     front of you. Novel image corruption effect

const WIDTH = 600;
const HEIGHT = 600;
let board;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  board = new Board();
}

function draw() {
    background(30);
	board.draw();
}