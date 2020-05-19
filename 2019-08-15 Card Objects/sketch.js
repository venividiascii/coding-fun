// Code explanation
/*
Card Object
A card is an obejct with the following
  --Constant
       The house
	   The color
	   The value
     --And maybe some variables like faceUp
  Function:
    Flip card?
    Draw card
	
A deck is a collection of card objects
  Values
    Which player has a card
  Functions
  --Shuffle the deck
  --Shuffle deck not in player hands
  --Sort the deck
  

*/
class Card {
  constructor(value, suit) {
    this.value = value; // 0-12
    this.suit = suit; // 0-3: Heart, 
	  this.index = value + (suit * 13);
		this.faceUp = false;
		// Card color
    if (suit < 2) {this.color = 'red';}
		else {this.color = 'black'};
		// suit name
		if (suit === 0) { this.suitName = "Hearts" }
		else if (suit === 1) { this.suitName = "Diamonds" }
		else if (suit === 2) { this.suitName = "Clubs" }
		else { this.suitName = "Spades" }
    // Value name
		if (value === 0) { this.valueName = "Ace" }	
		else if (value === 1) { this.valueName = "Two" }	
		else if (value === 2) { this.valueName = "Three" }	
		else if (value === 3) { this.valueName = "Four" }	
		else if (value === 4) { this.valueName = "Five" }	
		else if (value === 5) { this.valueName = "Six" }	
		else if (value === 6) { this.valueName = "Seven" }	
		else if (value === 7) { this.valueName = "Eight" }	
		else if (value === 8) { this.valueName = "Nine" }	
		else if (value === 9) { this.valueName = "Ten" }	
		else if (value === 10) { this.valueName = "Jack" }	
		else if (value === 11) { this.valueName = "Queen" }	
		else { this.valueName = "King" }	
		// Short name 
  }
  flip() {
    this.faceUp = !this.faceUp;
  }
  render(x, y) {
    if (faceUp == true){
			rectangle(x, y, 40, 70);
			text('card');
		}
		else {
			rectangle(x, y, 40, 70);
		}
  }
}

class Deck {
	constructor() {
		this.cards = [];
		for (let suit = 0; suit < 4; suit++){
		  for (let value = 0; value < 13; value++){
			  this.cards[value + (suit * 13)] = new Card(value, suit);
		  }
		}
	}
	list() {
	  for (let i = 0; i < 52; i++){
		  console.log(this.cards[i].valueName + " of " + this.cards[i].suitName);
		}
	}
	shuffle(swaps = 100) {
		for (let i = 0; i < swaps; i++){
			let cardIndex1 = floor(random(0,52));
			let cardIndex2 = floor(random(0,52));
			let tempCard = this.cards[cardIndex1];
			this.cards[cardIndex1] = this.cards[cardIndex2];
			this.cards[cardIndex2] = tempCard;
		}
	}
	
}
//////////////////////////////////
// BEGIN CODE                   //
//////////////////////////////////
let deck = new Deck();
	
function setup() {
	createCanvas(200, 200);

	deck.cards[32].flip();
	deck.shuffle(500);
  deck.list();

}

function draw() {
	background(250);
}

