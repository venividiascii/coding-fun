'use strict'
const WIDTH = 600;
const HEIGHT = 600;

const tileW = 100;
const tileH = 50

// figure out how to render a single tile based on height maps

//  1 __ 2      1 
//   |  |      /\ 2
//   |__|    4 \/
//  4    3     3

//const tileArr = [
//  [26, 30, 20],
//  [1, 1, 8],
//  [4, 3, 7]
//]

const tileArr = [
  [-20, -20, -20, -20, -20],
  [1, 1, 1, 1, -10],
  [1, 9, 1, 1, 30],
  [10, 50, 60, 80, 80],
  [15, 50, 60, 80, 80]
]

let tileMap;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  tileMap = subSquares(tileArr);
  //console.table(tileMap)
}

function draw() {
  //background(30);

  //renderTile(tileArr, 1, 2);
  let i = 0;

  for (let i = 0; i < tileMap.length; i++) {
    for (let j = 0; j < tileMap[0].length; j++) {
      console.table(tileMap[i][j])
      renderTile(tileMap[j][i], i, j)
    }
  }
  noLoop()
}

// takes a large 2D array, and returns an array
// where each tile is a flattened list of the array
function subSquares(tileMap) {
  let tileArray = []
  for (let i = 0; i < tileMap.length - 1; i++) {
    let tileRow = []
    for (let j = 0; j < tileMap.length - 1; j++) {
      tileRow.push([
        tileMap[i][j],
        tileMap[i + 1][j],
        tileMap[i + 1][j + 1],
        tileMap[i][j + 1]
      ])
    }
    tileArray.push(tileRow)
  }
  return tileArray;
}

function renderTile(tile, xPos, yPos) {
  //transform points
  //if (yPos % 2 == 1) {xPos += .5}
  let tilePosX = 100 + (tileW/2) * xPos + tileW * yPos / 2;
  let tilePosY = 200 + tileH * yPos/2 - (tileH/2) * xPos;
  console.table(tile)
  let p4 = tile[0]
  let p3 = tile[1]
  let p2 = tile[2]
  let p1 = tile[3]

  //level square case

  beginShape();
  vertex(tilePosX + tileW / 2,
    p1 + tilePosY + 0)
  vertex(tilePosX + tileW,
    p2 + tilePosY + tileH / 2)
  vertex(tilePosX + tileW / 2,
    p3 + tilePosY + tileH)
  vertex(tilePosX + 0,
    p4 + tilePosY + tileH / 2)
  endShape(CLOSE);

  //tilted square case


  //folder square
}