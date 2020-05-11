let r, g, b;
const PHI = 1.61818182;
function setup() {
	createCanvas(2400, 600);
	frameRate(5);
	ellipseMode(CENTER);
}

function draw() {

    for (let i = 0; i < width; i++) {
		r = 128 + sin(i/50 )*128;
		g = 128 + sin(i/50*PHI )*128;
		b = 128 + sin(i/50/PHI )*128;
		noStroke();
		stroke(r,	g, b);
		line(i, 0, i, height)

		fill(255, 0, 0);
		ellipse(i-1, height - r, 4);

		fill(0, 255, 0);
		ellipse(i-1, height - g, 4);
		
		fill(0, 0, 255);
		ellipse(i-1, height - b, 4);
	}
}