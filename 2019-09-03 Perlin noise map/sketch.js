// Description and date
//

let z;
let noiseScale = .001;
let tileSize = 32;

function setup() {
	createCanvas(1024, 1024);
	noiseSeed(millis());
	noStroke()

}

function draw() {
	noiseSeed(mouseY);
	for (let i = 0; i < width; i+= tileSize){
		for (let j = 0; j < width; j+= tileSize){
			z = noise(i*noiseScale, j*noiseScale);
			if (z < .43){fill(0, 80, 255);}
			else if (z > .65){fill(120, 130, 20);}
			else {fill(50, 255, 50);}
			rect(i, j, tileSize, tileSize);
		}
	}
}