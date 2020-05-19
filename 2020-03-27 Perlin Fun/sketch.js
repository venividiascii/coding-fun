// Description and date
//

let z;
let noiseScale = .001;
let tileSize = 16;

function setup() {
	createCanvas(1024, 1024);
	noiseSeed(millis());
	noStroke()

}

function draw() {
	//noiseSeed(mouseY);
		//noiseSeed(mouseY);
	for (let i = 0; i < width; i+= tileSize){
		for (let j = 0; j < width; j+= tileSize){
			z = noise(i*noiseScale, j*noiseScale);
			if (z < mouseY/500){fill(255, 255, 255);}
			else if (z > mouseY/500+.01){fill(0, 0, 0);}
			else {fill(128, 128, 128);}
			rect(i, j, tileSize, tileSize);
		}
	}
}