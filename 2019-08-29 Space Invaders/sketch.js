// Description and date
//


class Ship {
	constructor(x, y) {
		this.xPos = x;
		this.yPos = y;
		this.xVel = 0;
		this.maxSpeed = 3;
	}
	
	move(direction) {
		this.xVel = direction * this.maxSpeed;
	}
	
	update() {
		if (this.xPos < 0) { this.xVel = 1  * this.maxSpeed }
		else if (this.xPos > width) { this.xVel = -1 * this.maxSpeed }
		this.xPos += this.xVel;
	}
	
	draw() {
		rectMode(CENTER);
		rect(this.xPos, this.yPos, 10, 10);
	}
	
}


class Bullet {
	constructor() {
		this.xPos = 10;
		this.yPos = 10;
		this.yVel = -5;
		this.isFired = false;
	}
	
	update() {
		if (this.isFired === true) {
			this.yPos += this.yVel
			// CHECK FOR COLLISION
		}
	}
	
	draw() {
		if (this.isFired === true) {
			circle(this.xPos, this.yPos, 10);
		}
	}
	
	fire(xPos, yPos) {
		this.isFired = true;
		this.xPos = xPos;
		this.yPos = yPos;
	}
	
	kill() {
		this.isFired = false;
		this.xPos = -100; // move to out of bounds
	}
	
	get getPosition() {
		return {
			x : this.xPos,
			y : this.yPos
		}
	}
}

class Baddie {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 20;
		this.speed = 1;
		this.direction = 1;
		this.dropTimer = 0; // Drop and change direction at 200?
		this.dropTimeMax = 80;
		this.dropDistance = 6;
		this.isAlive = true;
	}

	update() {
		this.x += this.speed * this.direction;
		this.dropTimer++;
		if (this.dropTimer > this.dropTimeMax) {
			this.direction *= -1;
			this.y += this.dropDistance;
			this.dropTimer = 0;
		}
	}
	
	draw(){
		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);
	}
	
	isHit(bullet) {
		return (
			bullet.x > this.x && 
			bullet.x < this.x + this.w && 
			bullet.y > this.y &&
			bullet.y < this.y + this.h
		)
	}
	
	destroy() {
		this.isAlive = false;
		this.y = height + 100;
	}
	
}

let ship;

let bulletMax = 6;
let bullets = Array(bulletMax);
let bulletCounter = 0; //Cycles from 0 to 10

let baddiesMax = 24;
let baddiesKillCount = 0;
let baddies = Array(baddiesMax);

function setup() {
	createCanvas(500, 500);
	
	ship = new Ship(width/2, height - 50);
	
	for (let i = 0; i < baddies.length; i++) {
			baddies[i] = new Baddie((i % 6)*60 + 50, floor(i/6)*60 + 50);
	}
	
	for (let i = 0; i < bullets.length; i++) {
		bullets[i] = new Bullet();
	}
}

function draw() {
	background(0);
	ship.update();
	ship.draw();

	for (let i = 0; i < baddies.length; i++) {
		baddies[i].update();
		baddies[i].draw()
	}
	
	for (let i = 0; i < bullets.length; i++) {
		bullets[i].update();
		bullets[i].draw();
		for (let j = 0; j < baddies.length; j++) {
			if (baddies[j].isHit(bullets[i].getPosition)) {
				baddies[j].destroy();
				bullets[i].kill();
				baddiesKillCount++;
			}
		}
	}
	if (baddiesKillCount === 24) {
		fill(255); textSize(50); 
		text('UNIVERSE IS', 80, 250);
		text('OK AGAIN', 117, 300);
	}
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
    bullets[bulletCounter].fire(ship.xPos, ship.yPos);
		bulletCounter++
		if (bulletCounter > bulletMax - 1) { bulletCounter = 0;}
  }
  if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  } else if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  }
}

function keyReleased() {
	if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
		if (keyIsPressed === false) {
      ship.move(0)
		}
  }
}

