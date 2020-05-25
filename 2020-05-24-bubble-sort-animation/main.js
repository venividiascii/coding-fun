const WIDTH = 800;
const HEIGHT = 450;

let numberList;
let state = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  numberList = new NumberList()
  frameRate(500)
}

function draw() {
  background(30);
  numberList.draw();
  if (numberList.shuffleCount <= numberList.l) {
    numberList.shuffle()
  } else {
    state = 1;
  }
  if (state == 1){
    numberList.bubbleSort()
  }
}

class NumberList {
  constructor() {
    this.l = 88
    this.barW = width/this.l
    this.yMag = 5
    this.numbers = []
    for (let i = 0; i < this.l; i++) {
      this.numbers.push(i)
    }
    this.shuffleCount = 0
    this.bubbleSortIndex = 0
  }
  draw(hiLite) {
    for (let i = 0; i < this.numbers.length; i++) {
      noStroke();
      fill(255);
      rect(
        i * this.barW,
        height,
        this.barW,
        -this.numbers[i] * this.yMag
      )
    }
  }
  shuffle() {
    let rando = floor(random(0, this.l - this.shuffleCount))
    let temp = this.numbers.splice(rando, 1)
    this.numbers.push(temp)
    this.shuffleCount++
    if (shuffleCount => this.l) {
      return true
    }
  }
  bubbleSort(){
    if (this.bubbleSortIndex < this.l - 4){
      this.bubbleSortIndex++
    }else{
      this.bubbleSortIndex = 0
    }
    let i = this.bubbleSortIndex
    let compare1 = this.numbers[i]
    let compare2 = this.numbers[i+1]
    if (compare1 > compare2){
      this.numbers[i] = compare2
      this.numbers[i+1] = compare1 
    }

    fill(0, 0, 255);
    rect(
      i * this.barW,
      height,
      this.barW,
      -this.numbers[i] * this.yMag
    )
  }
}