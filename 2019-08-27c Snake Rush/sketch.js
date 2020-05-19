// Description and date
//

class Snake {
	constructor() {
		this.segments = [{
			x : 10, 
			y : 10},
			{
			x : 9, 
			y : 10},
			{
			x : 8, 
			y : 10},
			{
			x : 7, 
			y : 10}];
		this.x = 10;
		this.y = 10;
		this.direction = [0, 1]
	}
	
	move() {

		if (keyIsDown(UP_ARROW)){this.direction = [0, -1]}
		if (keyIsDown(DOWN_ARROW)){this.direction = [0, 1]}
		if (keyIsDown(LEFT_ARROW)){this.direction = [-1, 0]}
		if (keyIsDown(RIGHT_ARROW)){this.direction = [1, 0]}
		for (let i = 1; i < this.segments.length; i++) {
			this.segments[i].x = this.segments[i - 1].x;
			this.segments[i].y = this.segments[i - 1].y;
		}
		this.segments[0].x += this.direction[0];
		this.segments[0].y += this.direction[1];
	}
	
	eat() {
	}
	
	draw() {
		for (let segment of this.segments) {
			rect(
			segment.x * 8,
			segment.y * 8,
			8, 8)
		}
		
	}
}

let snake;

function setup() {
	createCanvas(500, 500);
	snake = new Snake();
	frameRate(6);
}

function draw() {
	background(200);
	snake.move();
	snake.draw();
}