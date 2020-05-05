
//make a 2D array of p5.js vector objects
//use modulo to make the map wrap-around

const FIELD_W = 200;
const FIELD_H = 200;
const SCALE = 3;
const XEQ = (x, y) => sin(x);
const YEQ = (x, y) => sin(y);

class Vector_Field {
	constructor(w, h){
		this.w = w;
		this.h = h;
		this.field = this.createArray(this.w, this.h);
		this.xEq;
		this.yEq;
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
	initialize(xEq, yEq){
		for (let x = 0; x < this.w; x++){
			for (let y = 0; y < this.h; y++){
				this.field[x][y] = createVector(xEq(x,y), yEq(x,y));
			}
		}
	}
}
let field;


function setup() {
	createCanvas(FIELD_W * SCALE, FIELD_H * SCALE);
	field = new Vector_Field(FIELD_W, FIELD_H);
	field.setEqs(XEQ, YEQ);
}

function draw() {
  // put drawing code here
  ellipse(10, 10, 200, 200);
}