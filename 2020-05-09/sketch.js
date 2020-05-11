const WIDTH = 600;
const HEIGHT = 600;

let walls = [];
let wallCount = 10;
let particle;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	
	particle = new Particle();
	for (let i = 0 ; i < wallCount ; i++){
		walls.push(new Wall(random(WIDTH), random(HEIGHT),
				            random(WIDTH), random(HEIGHT),));
	}
	walls.push(new Wall(0, 0, WIDTH, 0));
	walls.push(new Wall(WIDTH, 0, WIDTH, HEIGHT));
	walls.push(new Wall(WIDTH, HEIGHT, 0, HEIGHT));
	walls.push(new Wall(0, HEIGHT, 0, 0));	
}

function draw() {
	background(0);
	particle.update(mouseX, mouseY);
	particle.look(walls);
}