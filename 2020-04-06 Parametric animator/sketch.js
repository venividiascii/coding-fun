// Description and date
// Draw a parabola


let x;
let y;
let xOld;
let yOld;
let tMin = -30;
let tMax = -30;
let tStep = .1;
//Transformation
xCenter = 300;
yCenter = 300;
xScale = 50;
yScale = -50;


function setup() {
	createCanvas(1024, 1024);
	noiseSeed(millis());
	fill(128, 128, 128);
	stroke(50);
}

function draw() {
	xOld = tMin;
	yOld = tMin;
	//Draw Origin
	stroke(180);
	line(xCenter-500, yCenter, xCenter+500, yCenter)
	line(xCenter, yCenter-500, xCenter, yCenter+500)

	//Draw curve
	stroke(50);
	for (let t = tMin; t < tMax; t+=tStep){
		x = cos(t);
		y = sin(t);
		line(xOld*xScale + xCenter, yOld*yScale + yCenter, 
			 x*xScale + xCenter,    y*yScale + yCenter);
		xOld = x;
		yOld = y;
	}
	tMax+=tStep;
}