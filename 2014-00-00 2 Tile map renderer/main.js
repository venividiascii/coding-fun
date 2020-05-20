// This program takes an "array" of strings. And converts 
// them into a picture. This could be used to make levels 
// for a game or something. Change the spacing variable to 
// modify the scale of the map. To understand this code better,
// make sure you know how to use If Statements, For Loops, and Arrays.

const WIDTH = 400;
const HEIGHT = 400;

var spacing = 40;
var pictr = [
            "gggggggggg",
            "gssppppssg",    
            "gssggggssg",
            "gpgggnggpg",
            "gpgwppggpg",
            "gpggppegpg",
            "gpggSgggpg",
            "gssggggssg",
            "gsseggwssg",
            "gggggggggg"];
var stone = getImage("cute/StoneBlock");
var plain = getImage("cute/WaterBlock");
var east = getImage("cute/RampEast");
var north = getImage("cute/RampNorth");
var south = getImage("cute/RampSouth");
var west = getImage("cute/RampWest");
var grass = getImage("cute/GrassBlock");

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
}

function draw() {
      background(33, 66, 39);
    fill(155, 191, 178);
    makeLevel();
}

function makeLevel(){
    for (var col = 0; col < height / spacing; col++) { 
        for (var row = 0; row < width / spacing; row++){
            if (pictr[col][row] === "l"){
                rect(row*spacing,col*spacing,spacing,spacing);
            }
            switch(pictr[col][row]) {
    case "s":
        image(stone, row*spacing,col*spacing-24,spacing,2*spacing);
        image(stone, row*spacing,col*spacing-43,spacing,2*spacing);
        break;
    case "p":
        image(plain, row*spacing,col*spacing-8,spacing,spacing*2);
        break;
    case "e":
        image(east, row*spacing,col*spacing-24,spacing,2*spacing);
        break;
    case "n":
        image(north, row*spacing,col*spacing-24,spacing,2*spacing);
        break;
    case "S":
        image(south, row*spacing,col*spacing-24,spacing,2*spacing);
        break;
    case "w":
        image(west, row*spacing,col*spacing-24,spacing,2*spacing);
        break;
    case "g":
        image(grass, row*spacing,col*spacing-8,spacing,2*spacing);
        break;
                
                
}
        }
    } 
};