// This is an incomplete sketch
// The goal was to create a basic physics object
// with pos, vel, acc characteristics

class Hopper {
	constructor() {
		this.xPos = width/2;
		this.yPos = height - 50;
		this.yAcc = 0;
	}
	update() {
		console.log('wokring');
		this.draw();
	}
 
	draw() {
		ellipse(50, 50, 100, 100);
		console.log('wokring');
	}
}

let hopper;

function setup() {
	createCanvas(500, 500);
 
	hopper = new Hopper();

}

function draw() {
background(200);
	hopper.update();
}

function mousePressed() {

}
function mouseReleased() {

}
