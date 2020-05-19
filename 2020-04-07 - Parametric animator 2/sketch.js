// Description and date
// Draw a parabola


let x;
let y;
let xOld;
let yOld;
let tMin = -10;
let tMax = -10;
let tStep = .1;
//Transformation
xCenter = 400;
yCenter = 400;
xScale = 50;
yScale = -50;
const xEq = t => cos(t)*(1+t/10)*sin(t);
const yEq = t => sin(t)*(1+t/10);

function setup() {
	createCanvas(800, 800);
	noiseSeed(millis());
	fill(128, 128, 128);
	background(0);
	stroke(50);
}

function draw() {
	xOld = xEq(tMin);
	yOld = yEq(tMin);
	//Draw Origin
	stroke(100);
	line(xCenter-500, yCenter, xCenter+500, yCenter)
	line(xCenter, yCenter-500, xCenter, yCenter+500)
	for (let i = -50; i < 50; i++){
		line(xCenter - i*xScale, yCenter-5, xCenter - i*xScale, yCenter+5)
		line(xCenter - 5, yCenter - i*yScale, xCenter + 5, yCenter - i*yScale)
	}
	//Draw curve
	stroke(255);
	for (let t = tMin ; t < tMax ; t += tStep){
		stroke((cos(t/1)+1)*120);
		x = xEq(t);
		y = yEq(t);
		line(xOld*xScale + xCenter, yOld*yScale + yCenter, 
			 x*xScale + xCenter,    y*yScale + yCenter);
		xOld = x;
		yOld = y;
	}
	tMax+=tStep;
}