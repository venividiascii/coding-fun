// *   *** ***   *** ***   *** *   * *** *   *
// *   *    *     *   *    *   **  * * * *   *
// *   **   *     *   *    *** * * * * * * * *
// *   *    *     *   *      * *  ** * * * * *
// *** ***  *    ***  *    *** *   * *** ** **

const WIDTH = 500;
const HEIGHT = 500;

var xPositions = [];
var yPositions = [];
var fallSpeed  = [];
var windiness  = [];
var dropColors = [[],[],[]];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (var i = 0; i < 1300; i++){
    windiness.push(random(0,1));
    fallSpeed.push(random(1,3));
    xPositions.push(random(0,500));
    yPositions.push(random(-200,500));
    dropColors.push([[random(1,255)], [random(1,255)], [random(1,255)]]);
  }
}

function draw() {
    background(3, 17, 33);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(255, 255, 255);
        //Optional code for colored snowflakes
        //fill(dropColors[i][0],dropColors[i][1],dropColors[i][2]);
        ellipse(xPositions[i], yPositions[i], 3, 3);
        yPositions[i] += fallSpeed[i];
        xPositions[i] += windiness[i];
        if(yPositions[i] > 500){
            yPositions[i] = 0 - random(1,200);
            xPositions[i] = random(-100,500);
        }
    }
}
