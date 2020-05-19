var array = [];

function setup() {
	createCanvas(200, 200);
	background(220);
	noStroke();
	
	//Create 2D Array 
	for(x = 0; x<= 10; x++){
		array[x] = [];
		for(y = 0; y<= 10; y++){
			array[x][y] = 1;
		}
	}
}

function draw() {
	background(200);
	array[0] = 50;
	
	for(i=0; i<=10; i++){
		for(j=0; j<=10; j++){
			if(array[i][j] == 1){
				rect(i*10,j*10,8,8);
			}
		}
	}
}

