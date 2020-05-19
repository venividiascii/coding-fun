// Description and date
//
const tileSize = 32;
class Block {
	constructor(x, y, hue) {
		this.x = x * tileSize;
		this.y = y * tileSize;
		this.w = tileSize;
		this.h = tileSize;
		this.hue = hue * 51;
	}
	draw() {
		noStroke();
		colorMode(HSB);
		fill(this.hue, 255, 255);
		triangle( //Top
			this.x, this.y, 
			this.x + this.w, this.y, 
			this.x + this.w/2, this.y + this.h/2
		);
		fill(this.hue, 255, 150);
		triangle( //Left
			this.x, this.y, 
			this.x, this.y + this.h, 
			this.x + this.w/2, this.y + this.h/2
		);
		fill(this.hue, 255, 90);
		triangle( //Right
			this.x + this.w, this.y, 
			this.x + this.w, this.y + this.h, 
			this.x + this.w/2, this.y + this.h/2
		);
		fill(this.hue, 255, 50);
		triangle( //Bottom
			this.x, this.y + this.h, 
			this.x + this.w, this.y + this.h, 
			this.x + this.w/2, this.y + this.h/2
		);
	}
}

let blocks = new Array(10);

function setup() {
	createCanvas(500, 500);
	background(30);
	for (i = 0; i < blocks.length; i++){
		blocks[i] = new Block(i, 1, floor(random(5)) );
	}
	console.log(blocks);
	for (let block of blocks){
		block.draw();}
}

function draw() {
  // The draw loop
}