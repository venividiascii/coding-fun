
//make a 2D array of p5.js vector objects
//use modulo to make the map wrap-around

const FIELD_W = 20;
const FIELD_H = 20;
const SCALE = 20;
const XEQ = (x, y) => sin(x);
const YEQ = (x, y) => cos(y);

class Vector_Field {
	constructor(w, h){
		this.w = w;
		this.h = h;
		this.xEq;
		this.yEq;
		this.field = this.createArray(this.w, this.h);
	}
	createArray(length) {
		var arr = new Array(length || 0),
			i = length;

		if (arguments.length > 1) {
			var args = Array.prototype.slice.call(arguments, 1);
			while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
		}
		return arr;
	}
	setEqs(xEq, yEq){
		this.xEq = xEq;
		this.yEq = xEq;
	}
	initialize(){
		for (let x = 0; x < this.w; x++){
			for (let y = 0; y < this.h; y++){
				this.field[x][y] = createVector(this.xEq(x,y), this.yEq(x,y));
			}
		}
	}
	draw(){
		for (let x = 0; x < this.w; x++){
			for (let y = 0; y < this.h; y++){
				line(x * SCALE, y * SCALE, x * SCALE + this.field[x][y].x*5, y * SCALE + this.field[x][y].y*5);
			}
		}
	}
}
let field;


function setup() {
	createCanvas(FIELD_W * SCALE, FIELD_H * SCALE);
	field = new Vector_Field(FIELD_W, FIELD_H);
	field.setEqs(XEQ, YEQ);
	field.initialize();
}

function draw() {
  // put drawing code here
  ellipse(10, 10, 200, 200);
  field.draw();
}