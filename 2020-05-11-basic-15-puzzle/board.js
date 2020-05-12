class Board{
	constructor(){
		this.tileList = this.shuffleBoard();
		this.tileArr = [];
		this.tileArr.push(this.tileList.slice(0, 4 ))
		this.tileArr.push(this.tileList.slice(4, 8 ))
		this.tileArr.push(this.tileList.slice(8, 12))
		this.tileArr.push(this.tileList.slice(12,16))
		this.emptyPos = { x : 3, y : 3 }
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
		if (this.emptyPos.x > 0) { moveList.push("LEFT")  }
		if (this.emptyPos.x < 3) { moveList.push("RIGHT") }
		if (this.emptyPos.y > 0) { moveList.push("UP")    }
		if (this.emptyPos.y < 3) { moveList.push("DOWN")  }		
		return moveList;
	}
	moveTile(moveDir) {
		if ( this.legalMoves().includes(moveDir) ) {
			let slideTile = this.emptyPos;
			//console.log(slideTile);
			switch (moveDir) {
				case "LEFT":
					console.log(slideTile);
					slideTile.x -= 1;
					console.log(slideTile);
					break;
				case "RIGHT":
					slideTile.x += 1;
					break;
				case "UP":
					slideTile.y -= 1;
					break;
				case "DOWN":
					slideTile.y += 1;
					break;
			}
			console.log(slideTile);
			console.log(this.emptyPos)
			this.emptyPos = slideTile
			let tempTile = this.tileArr[slideTile.x][slideTile.y];
			console.table(this.tileArr);
			
			this.tileArr[slideTile.x][slideTile.y] = this.tileArr[this.emptyPos.x][this.emptyPos.y];
						console.table(this.tileArr);
			this.tileArr[this.emptyPos.x][this.emptyPos.y] = tempTile;
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
				if (this.tileArr[j][i] != " ") {
					fill(180);
					rect(i*tileSize, j*tileSize, tileSize, tileSize);
					fill(30);
					text(this.tileArr[j][i], 
					i*tileSize + tileSize/2, j*tileSize + tileSize/2);
				}
			}
		}
	}
}