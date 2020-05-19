// Description and date

var song;
var sliderVolume;
var sliderRate;
var sliderPan;

var buttonPlay;
var buttonRestart;
var buttonStop;
var buttonSkipFwd;


function setup() {
	createCanvas(500, 500);
	song = loadSound("joplin.mp3");
	sliderVolume = createSlider(0, 1, 0.5, 0.01);
	sliderRate = createSlider(0, 3, 1, 0.01);
	sliderPan = createSlider(-1, 1, 0, 0.01);
	
	createP("adfasdf");
	buttonPlay = createButton("▶️");
	buttonPlay.mousePressed(togglePlaying);
	buttonRestart = createButton("🔄");
	buttonRestart.mousePressed(restartPlaying);
}

function togglePlaying() {
	if (!song.isPlaying()) {
		song.play();
		buttonPlay.html("⏸️");
	}
	else {
		song.pause();
		buttonPlay.html("️▶️");
	}
}

function restartPlaying() {
		song.stop(); song.play();
}

function loaded() {

	//song.play();
}

function draw() {
  background(50+sin(millis()/300)*50);
	song.setVolume(sliderVolume.value());
	song.rate(sliderRate.value());
	song.pan(sliderPan.value());
}