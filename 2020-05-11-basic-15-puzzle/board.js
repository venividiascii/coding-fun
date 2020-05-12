class Board{
	constructor(){
		this.tileList = this.shuffleBoard();
		this.tileArr = [];
		this.tileArr.push(this.tileList.slice(0, 4 ))
		this.tileArr.push(this.tileList.slice(4, 8 ))
		this.tileArr.push(this.tileList.slice(8, 12))
		this.tileArr.push(this.tileList.slice(12,16))
		this.emptyPos = createVector(3, 3)
	}
	shuffleBoard(){
		let list = [
			"1",  "2",  "3",  "4",  
			"5",  "6",  "7",  "8",
			"9",  "10", "11", "12", 
			"13", "14", "15"] 
		for (let i = 0 ; i < list.length ; i++) {
			let randIndex = floor(random(list.length - i));
			let temp = list[randIndex];
			list.splice(randIndex, 1);
			list.push(temp);
		}
		list.push(" ");
		return list;
	}
	legalMoves(){
		let moveList = [];
		if (this.emptyPos.x > 0) { moveList.push("RIGHT")}
		if (this.emptyPos.x < 3) { moveList.push("LEFT") }
		if (this.emptyPos.y > 0) { moveList.push("DOWN") }
		if (this.emptyPos.y < 3) { moveList.push("UP")   }		
		return moveList;
	}
	moveTile(moveDir) {
		if ( this.legalMoves().includes(moveDir) ) {
			let slideTile = createVector(this.emptyPos.x, this.emptyPos.y);
			//console.log(slideTile);
			switch (moveDir) {
				case "LEFT":
					console.log(slideTile);
					slideTile.x += 1;
					console.log(slideTile);
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
			console.log(slideTile);
			console.log(this.emptyPos)
			this.tileArr[slideTile.x][slideTile.y] = this.tileArr[this.emptyPos.x][this.emptyPos.y];
			console.table(this.tileArr);
			this.tileArr[this.emptyPos.x][this.emptyPos.y] = tempTile;
			this.emptyPos = slideTile
		}
	}
	swapTile(swap) {
		temp = a;
		a = b
	}
	draw(){
		let tileSize = width / this.tileArr.length;
		textAlign(CENTER, CENTER);
		textSize(tileSize / 2);
		//Probably need to swap
		for (let i = 0 ; i < this.tileArr.length ; i++){
			for (let j = 0 ; j < this.tileArr[0].length ; j++){
				if (this.tileArr[i][j] != " ") {
					fill(180);
					rect(i*tileSize, j*tileSize, tileSize, tileSize);
					fill(30);
					text(this.tileArr[i][j], 
					i*tileSize + tileSize/2, j*tileSize + tileSize/2);
				}
			}
		}
	}
}