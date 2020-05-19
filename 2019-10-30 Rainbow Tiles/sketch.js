// Description and date
//

// 0:empty, 1-4:rgby
// 1D array of 2D object. Renders left to right, top to bottom.
let grid = []; 
function setup() {
	createCanvas(500, 500);
	for (let i = 0; i < 400; i++){
		//for (let j = 1; j < 20; j++){
			grid[i] = floor(random(5))
		//}
	}
	console.log(grid)
	//noStroke()
}

function draw() {
	drawGrid(grid)
}

function drawGrid(grid) {
	let x;
	let y;
	for (let i = 0; i < 400; i++){
		x = (i%20)*20;
		y = floor(i/20)*20
		if (grid[i] === 1){ fill(255, 0, 0) }
		else if (grid[i] === 2){ fill(0, 255, 0) }
		else if (grid[i] === 3){ fill(0, 0, 255) }
		else if (grid[i] === 4){ fill(0, 127, 127) }
		if (grid[i] > 0){
			rect(x, y, 20, 20)
		}
	}
}