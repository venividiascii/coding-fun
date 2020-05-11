const WIDTH = 600;
const HEIGHT = 600;

let rays = [];
let walls = [];

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(30);
	for (let i = 0 ; i < 10 ; i += 10){
		rays.push(new Ray(100, 150, i));
	}
	for (let i = 3 ; i < 10 ; i++){
		walls.push(new Wall(
				random(WIDTH),
				random(HEIGHT),
				random(WIDTH),
				random(HEIGHT),
			));
	}
	//walls.push(new Wall(0, 0, WIDTH, 0));
	//walls.push(new Wall(0, WIDTH, WIDTH, HEIGHT));
	//walls.push(new Wall(WIDTH, HEIGHT, 0, HEIGHT));
	//walls.push(new Wall(0, HEIGHT, 0, 0));	
}

function draw() {
	background(230);
	for (const ray of rays) {
		//ray.show();
		ray.update();
	}
	collision = rays[0].cast(walls[0]);
	if (collision) {
		console.table([rays[0].x, rays[0].y, collision.x, collision.y]);
				rays[0].show(collision);
	}
	for (const wall of walls) {
		wall.show();
	}
}