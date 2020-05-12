class Board{
	constructor(){
		this.tileArr = this.createBoard();
		this.emptyPos = createVector(3, 3);
		this.won = false;
	}
	createBoard(){
		let candidateBoard;
		while (true) {
			candidateBoard = this.shuffleBoard();
			if (this.isSolvable(candidateBoard)) {
				break 
			}
		}
		
		let finalBoard = [];
		finalBoard.push(candidateBoard.slice(0, 4 ));
		finalBoard.push(candidateBoard.slice(4, 8 ));
		finalBoard.push(candidateBoard.slice(8, 12));
		finalBoard.push(candidateBoard.slice(12,16));
		return finalBoard;
	}
	shuffleBoard(){
		let list = ["1",  "2",  "3",  "4",  
					      "5",  "6",  "7",  "8",
                "9",  "10", "11", "12", 
                "13", "14", "15"];
		for (let i = 0 ; i < list.length ; i++) {
			let randIndex = floor(random(list.length - i));
			let temp = list[randIndex];
			list.splice(randIndex, 1);
			list.push(temp);
		}
		list.push(" ");
		return list;
	}
	isSolvable(list) {
		let inversions = 0;
		for (let i = 0 ; i < list.length ; i++) {
			let a = list[i];
			for (let j = i ; j < list.length ; j++) {
				let b = list[j];
				if (a < b) {inversions++;}
			} 
		}
		if (inversions % 2 == 1){
			return true;
		}
		else {
			return false;
		}
	}
	legalMoves(){
		let moveList = [];
		if (this.emptyPos.x < 3) { moveList.push("LEFT") }
		if (this.emptyPos.x > 0) { moveList.push("RIGHT")}
		if (this.emptyPos.y < 3) { moveList.push("UP")   }	
		if (this.emptyPos.y > 0) { moveList.push("DOWN") }
		return moveList;
	}
	moveTile(moveDir) {
		if (this.won) {return}
		if ( this.legalMoves().includes(moveDir) ) {
			let slideTile = createVector(this.emptyPos.x, this.emptyPos.y);
			switch (moveDir) {
				case "LEFT":
					slideTile.x += 1;
					break;
				case "RIGHT":
					slideTile.x -= 1;
					break;
				case "UP":
					slideTile.y += 1;
					break;
				case "DOWN":
					slideTile.y -= 1;
					break;
			}
			let tempTile = this.tileArr[slideTile.x][slideTile.y];
			this.tileArr[slideTile.x][slideTile.y] = this.tileArr[this.emptyPos.x][this.emptyPos.y];
			this.tileArr[this.emptyPos.x][this.emptyPos.y] = tempTile;
			this.emptyPos = slideTile;
		}
	}

	draw(){
		let tileSize = width / this.tileArr.length;
		textAlign(CENTER, CENTER);
		textSize(tileSize / 2);
		rectMode(CENTER);
		for (let i = 0 ; i < this.tileArr.length ; i++){
			for (let j = 0 ; j < this.tileArr[0].length ; j++){
				if (this.tileArr[i][j] != " ") {
					fill(180);
					stroke(90);
					strokeWeight(10);
					rect(i*tileSize + tileSize/2, j*tileSize + tileSize/2, 
						tileSize-20,tileSize-20);
					
					fill(30);
					stroke(200);
					strokeWeight(10);
					text(this.tileArr[i][j], 
					i*tileSize + tileSize/2, j*tileSize + tileSize/2);
				}
			}
		}
	}
	checkWin(){
		let masterList = ["1",  "2",  "3",  "4",  
                      "5",  "6",  "7",  "8",
                      "9",  "10", "11", "12", 
                      "13", "14", "15", " "];
		let flatList = [];
		for (let i = 0 ; i < this.tileArr.length ; i++){
			for (let j = 0 ; j < this.tileArr[0].length ; j++){
				flatList.push(this.tileArr[j][i]);
			}
		}
		for (let i = 0 ; i < masterList.length ; i++) {
			if (masterList[i] != flatList[i]) { 
				return;
			}
		} 
		this.win();
	}
	win() {
		this.won = true;
		
		textAlign(CENTER, CENTER);
		textSize(height / 5);
		fill(0);
		stroke(240);
		strokeWeight(10);
		
		text("You win!", width / 2, height / 2.2);
		textSize(height / 13);
		text("Press space to restart", width / 2, height / 1.7);	
	}
	reset(){
		if (this.won){
			this.won = false;
			this.tileArr = this.createBoard();
		}
	}
}