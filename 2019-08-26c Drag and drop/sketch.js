// Description and date

class Tile {
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xOffset = 0;
		this.yOffset = 0;
		this.isHeld = false;
		this.color = color(50, 50, 50);
	}
	toggleHeld(){
		if (
			mouseX > this.x && mouseX < this.x + this.w &&
			mouseY > this.y && mouseY < this.y + this.h){
				this.isHeld = !this.isHeld;
				this.xOffset = mouseX - this.x;
				this.yOffset = mouseY - this.y;
		}
		else {
			this.isHeld = false;
		}
	}
	draw(){
		rect(this.x, this.y, this.w, this.h)
		if (this.isHeld === true){
			this.x = mouseX - this.xOffset;
			this.y = mouseY - this.yOffset;
		}
	}
	drop() {
		this.isHeld = false;
	}
}


let tiles = [];

function setup() {
  // put setup code here
	createCanvas(500, 500);
	fill(255,255,255, 128);
	noStroke();
	for (let i = 0; i < 40; i++){
		tiles[i] = new Tile(random(0, width), random(0, height), random(15,50)*2, random(15,50)*2);
	}
}


function draw() {
  background(0);
	for (let tile of tiles) {
		tile.draw();
	}
}


function mousePressed() {
	for (let tile of tiles) {
		tile.toggleHeld(mouseX, mouseY);
	}
}


function mouseReleased() {
	for (let tile of tiles) {
		tile.drop();
	}
}