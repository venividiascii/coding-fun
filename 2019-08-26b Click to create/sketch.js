// Description and date

class Crawler {
	constructor(x, y, px, py) {
		this.x = x;
		this.y = y;
		this.vx = x - px;
		this.vy = y - py;
	}
  update() {
		this.x += this.vx;
		this.y += this.vy;
	}
	draw() {
		fill(0);
		circle(this.x, this.y, 80);
			if (this.x < 0 || this.x > width) {
				this.vx *= -1;
			}
			if (this.y < 0 || this.y > height) {
				this.vy *= -1;
			}
	}
}

let crawlers = [];
let crawlerCount = 0;

function setup() {
	createCanvas(500, 500);
	noStroke();
}

function draw() {
  // put drawing code here
	background(240);
	for (let crawler of crawlers){
		crawler.update();
		crawler.draw();
	}
}

function mousePressed(){
	crawlers[crawlerCount] = new Crawler(mouseX, mouseY, pmouseX, pmouseY);
	crawlerCount++;
	console.log('ok');
}