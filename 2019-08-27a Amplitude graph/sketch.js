// Description and date
//

class GraphBar {
	constructor(amp) {
		this.amp = amp;
		this.x = width+2;
	}
	update() {
		this.x -= 2;
	}
	draw(){
		noStroke();
		fill(200,200,0);
		rect(this.x, 500, -2, -this.amp*800);
	}
}

let amp;
let graphBars = [];

function preload() {
	song = loadSound("assets/joplin.mp3");
}

function setup() {
	createCanvas(500, 500);
	amp = new p5.Amplitude();
	song.play();
}

function draw() {
	background(10);
	
	let vol = amp.getLevel();
	ellipse(width/2, height/2, vol*200+50, vol*200+50);
  graphBars.push(new GraphBar(amp.getLevel()));
	for (let graphBar of graphBars){
		graphBar.update();
		graphBar.draw();
	}
}