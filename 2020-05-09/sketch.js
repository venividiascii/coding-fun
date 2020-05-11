const WIDTH = 600;
const HEIGHT = 600;

let rays = [];
let walls = [];

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(30);
	for (let i = 0 ; i < TWO_PI ; i += PI/300){
		rays.push(new Ray(100, 150, i));
	}
	for (let i = 0 ; i < 5 ; i++){
		walls.push(new Wall(
				random(WIDTH),
				random(HEIGHT),
				random(WIDTH),
				random(HEIGHT),
			));
	}
	walls.push(new Wall(0, 0, WIDTH, 0));
	walls.push(new Wall(WIDTH, 0, WIDTH, HEIGHT));
	walls.push(new Wall(WIDTH, HEIGHT, 0, HEIGHT));
	walls.push(new Wall(0, HEIGHT, 0, 0));	
}

function draw() {
	background(0);
	for (const ray of rays) {
		ray.update();
		let nearest = Infinity;
		let nearPoint = 0;
		for (const wall of walls){
			
			let collision = ray.cast(wall);
			
			if (collision) {
				let collisionMag = p5.Vector.dist(ray.pos, collision)
				if (collisionMag < nearest){
					nearest = collisionMag;
					nearPoint = collision;
				}
			}
			
		}
		if (nearPoint) {ray.show(nearPoint);}
		//console.table(nearest)
	}	
	for (const wall of walls) {
		wall.show();
	}
}