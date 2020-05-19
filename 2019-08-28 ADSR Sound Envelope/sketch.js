// Description and date
//

let tenor;
let lead;
let baritone;
let bass;

let env;
let button;

function setup() {
	createCanvas(500, 500);

	env = new p5.Envelope();
	env.setADSR(.25, 0.1, 0.4, .5);
	//env.setRange(2, 0);
	
	tenor = new p5.Oscillator('sine');
	tenor.amp(env); tenor.freq(440*7/6);	tenor.start();
	lead = new p5.Oscillator('sine');
	lead.amp(env); lead.freq(440);	lead.start();
	baritone = new p5.Oscillator('sine');
	baritone.amp(env); baritone.freq(440*5/6);	baritone.start();
	bass = new p5.Oscillator('sine');
	bass.amp(env); bass.freq(440*4/6);	bass.start();
	
	button = createButton('play');
	button.mousePressed(toggle);
}

function draw() {
background(200);
	let leadFreq = mouseY;
	
 	tenor.freq(leadFreq*7/6); 
 	lead.freq(leadFreq); 
 	baritone.freq(leadFreq*5/6); 
 	bass.freq(leadFreq*4/6); 
}

function mousePressed() {
	env.triggerAttack();
}
function mouseReleased() {
	env.triggerRelease();
}

function toggle() {
	env.play();
}