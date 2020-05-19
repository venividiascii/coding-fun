// Description and date
//

let map = [[1,1,1,1,1,1], 
           [1,0,0,0,0,1],
		   [1,0,1,1,0,1],
		   [1,0,0,1,1,1],
		   [1,1,0,0,0,1],
		   [1,1,1,1,1,1]];
let mapXSize = 6;
let mapYSize = 6;
let tileSize = 64;
let playerX = 1;
let playerY = 1;

function setup() {
	createCanvas(500, 500);
}

function draw() {
  // Draw the map
  for (let x = 0; x < mapXSize; x++){
    for (let y = 0; y < mapXSize; y++){
	   if (map[y][x] == 0){
		  fill(20);
	   }
	   else if (map[y][x] == 1){
		  fill(80);
	   }
	   rect(tileSize*x, tileSize*y, tileSize, tileSize);
    }	  
  }
  // Draw the items
  // Daw the character
  fill(200, 0, 150);
  ellipseMode(CORNER)
  ellipse(playerX*tileSize, playerY*tileSize, tileSize, tileSize);
}

//On key down (One movement per key down)
//have 4 options for different arrows
