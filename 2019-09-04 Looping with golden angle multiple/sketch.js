// Description and date
//

function setup() {
	createCanvas(700, 700);
}

function draw() {
	background(255);
	
	translate(350, 400);
	strokeWeight(17);
	line(0, 0, 0, 100);
	drawLines(50, mouseY/500, 10);
}

function drawLines(length, angle, level) {
	if (level > 1){
		level--;
		strokeWeight(level*1.5);
		push();
			rotate(angle);
			translate(0, -length);
			line(0, 0, 0, length);
			drawLines(length * 0.8, -angle, level);
		pop()
		push()
			rotate(-angle);
			translate(0, -length);
			line(0, 0, 0, length);
			drawLines(length * 0.9, -angle, level);
		pop();
	}
}