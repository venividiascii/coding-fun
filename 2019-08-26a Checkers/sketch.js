// Basic, probably unfinished game of checkers. 2019/08/26
// Player turns:
// Player selects a piece that can move
// Player makes a legal move:
//   To an immediately diagonal non-occupied space
//   If space is occupied by enemy, they may jump it to non-occupied space
//   If enemy is jumped enemy dies
//   Player can make a jump-only move after any jump




class Tile {
  constructor (x, y, color) {
		this.x = x;
		this.y = y;
		this.piece = color; //'red' or 'black' or 'empty'
		this.king = false;
	}
	draw(tileSize = 10){
		if (this.piece === 'red') {
			fill (200, 0, 0);
			ellipse(
				this.x*tileSize + tileSize/2, 
				this.y*tileSize + tileSize/2, 
				tileSize*0.8, tileSize*0.8);
		}
		else if (this.piece === 'black') {
			fill (0, 0, 0);
			ellipse(
				this.x*tileSize + tileSize/2, 
				this.y*tileSize + tileSize/2, 
				tileSize*0.8, tileSize*0.8);
		}
		
	}
}

class Board {
	constructor (tileSize) {
	  this.tileSize = tileSize
		this.board = [
			[0,1,0,1,0,1,0,1],
			[1,0,1,0,1,0,1,0],
			[0,1,0,1,0,1,0,1],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[2,0,2,0,2,0,2,0],
			[0,2,0,2,0,2,0,2],
			[2,0,2,0,2,0,2,0],
		];
		for (let i = 0; i < 8; i++){
			for (let j = 0; j < 8; j++){
			  if (this.board[i][j] === 1){
					this.board[i][j] = new Tile(i, j, 'red');
				}
				else if (this.board[i][j] === 2){
					this.board[i][j] = new Tile(i, j, 'black');
				}
				else {
					this.board[i][j] = new Tile(i, j, 'empty');
				}
			}
		}

	}
	
	draw() {
		// Draw the background
		let white = false;
		noStroke();
		for (let i = 0; i < 8; i++){
			for (let j = 0; j < 8; j++){
				if (white){ 
					fill(100,150,150);
					white = !white;
				}
				else {
					fill(255);
					white = !white;
				}
				rect(
					i*this.tileSize, j*this.tileSize, 
					this.tileSize, this.tileSize
				);
				this.board[i][j].draw(this.tileSize);
			}
			white = !white;
		}
	}
}

// Begin drawing code

let board;
let gameState = 0;

function setup() {
	createCanvas(500, 500);
	board = new Board(30);
}

function draw() {
	board.draw();
}

function mousePressed(){
	if (gameState === 0) {
		//Send mouse xy to Board object
	} 
	console.log('pressed');
}
