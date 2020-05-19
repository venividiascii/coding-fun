// Description and date
//

let tenor;
let lead;
let baritone;
let bass;

function setup() {
	createCanvas(500, 500);

	tenor = new p5.Oscillator('triangle');
	tenor.amp(1); tenor.freq(38);	tenor.start();
	lead = new p5.Oscillator('triangle');
	lead.amp(1); lead.freq(38);	lead.start();
	baritone = new p5.Oscillator('triangle');
	baritone.amp(1); baritone.freq(38);	baritone.start();
	bass = new p5.Oscillator('triangle');
	bass.amp(1); bass.freq(38);	bass.start();
}

function draw() {
background(200);
	let leadFreq = mouseY;
	
 	tenor.freq(leadFreq*7/6); 
 	lead.freq(leadFreq); 
 	baritone.freq(leadFreq*5/6); 
 	bass.freq(leadFreq*4/6); 
}