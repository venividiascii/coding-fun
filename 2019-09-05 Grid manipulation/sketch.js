// Description and date
//

class Grid {
	constructor(rows, cols, valueFunction){
		this.grid = Array(rows).fill(0).map(x => Array(cols).fill(0))
		for (let i = 0; i < this.grid.length; i++){
			for (let j = 0; j < this.grid[0].length; j++){
				this.grid[i][j] = valueFunction();
				console.log(this.grid[i][j])
			}
		}
		console.log(this.grid);
	}
	cellVal(x, y){
		return this.grid[x][y];
	}
}


let grid;

function setup() {
	createCanvas(500, 500);
	grid = new Grid(4, 4, x => random(1) < .5 );
}

function draw() {
  // The draw loop
}