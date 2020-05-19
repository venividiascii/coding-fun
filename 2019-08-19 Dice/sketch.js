//🎲 ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

// ⚅ Due class ⚅
class Die {
	constructor() {
		this.value = 1;
		this.picture = "⚀";
		this.held = false;
	};
	roll() {
		for (var i = 0; i < 6; i++){
		  this.value = floor(random(1,7));
			if (this.value === 1) {this.picture = "⚀"}
			else if (this.value === 2) {this.picture = "⚁"}
			else if (this.value === 3) {this.picture = "⚂"}
			else if (this.value === 4) {this.picture = "⚃"}
			else if (this.value === 5) {this.picture = "⚄"}
			else {this.picture = "⚅"}
		}
	};
  draw(x = 50, y = 50) {
	  textSize(50);
	  console.log(this.picture);
		text(this.picture, x, y);
	};
	getValue() {
		return this.value;
	}
}


// 🎲🎲🎲🎲🎲Dice class🎲🎲🎲🎲🎲🎲
class Dice {
	constructor() {
	  this.dice = []
		for (let i = 0; i < 5; i++){
			this.dice[i] = new Die();
		}
	}
	roll() {
		for (let die of this.dice){
			die.roll();
		}
	}
	draw() {
		for (let i = 0; i < 5; i++){
			this.dice[i].draw(50*i + 100, 200);
		}
	}
	getValues() {
		let values = [];
		for (let i = 0; i < 5; i++){
			values[i] = this.dice[i].getValue();
		}
		values.sort();
		console.log(values);
		return values;
	}
}


class ScoreCard {
	constructor() {
	  this.upperScore, this.grandTotal = 0;
	}
  ones(values) {
		let points = 0;
		for (let value of values) {
			if (value === 1) {points += 1}
		}
		console.log("Score for ones is " + points);
	}
	largeStraight(values) {
		let points = 0;
		for (let value of values) {
			if (value === 1) {points += 1}
		}
		this.upperScore += points;
		console.log("Score for ones is " + points);
	}
}


// The game loop
let dice;
let scoreCard;

function setup() {
  // put setup code here
	createCanvas(500, 500);

	dice = new Dice();
	dice.roll();
	dice.draw(200, 200);
	dice.getValues();

	scoreCard = new ScoreCard();
	scoreCard.ones(dice.getValues());
}

function draw() {
  // put drawing code here
	//background(230, 200, 200);
	textSize(50);
	text("🎲 roll em! 🎲", 80, 60);
}

