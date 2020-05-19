function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(250);
	rect(10,10,winMouseX,winMouseY);
	superLine(30,5,20,70);
}

function superLine(x1, y1, x2, y2){
	
	for(i=1; i<x2; i++){
		for(j=1; j<y2; j++){
			point(x1 + i,y1 + j);
		}
	}
	point(30,30);
}