// Rooks Tour
// 
// Imagine a rook in chess. You are given the simple task of landing on or 
// crossing each square exactly once. So if you started in the corner, you 
// could simply zigzap to cover the whole board. This game takes that simple
// problem and gives it fun twists and challenges. 
//
// Some of these variations will include:
//   - Impassable obstacles
//   - Different board shapes
//   - Thin walls between tiles to restrict movement directions
//   - Ramp tiles to skip over a square
//   - One-way tiles
//   - Keys and door
//   - Pre-determined vs. optional start positions.
//
// Controls
//   - Arrow keys: 
//       Moves the player in full-scquare increments to legal positions
//   - Touch:
//       Moves smoothly. Only activates square if legal move
//   - Switching:
//       You can switch on the fly between both movement modes
//       Maybe have option to disable one or the other
//
// Undo
//   This is the type of game that needs to have a way to undo
//     Option 1: Player can just move to previous square
//     Option 2: A literal undo button that does the same thing
//

const SCREEN_WIDTH = 500
const SCREEN_HEIGHT = 500

const TILE_W = 24;
const TILE_H = 24;
const TILE_SIZE = SCREEN_WIDTH / TILE_W
const TILE_MAP =
[
  [1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0],
  [1,0,0,0,2,2,2,2],
  [1,0,0,0,0,0,2,0],
  [1,0,0,0,0,0,2,0],
  [1,0,0,0,0,0,2,0]
 ];

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function draw() {
  background(200, 150, 150);
  for (let x = 0; x < TILE_W; x++){
    for (let y = 0; y < TILE_H; y++){
      if (TILE_MAP[y][x] == 0){
        fill(0)
      } else{
        fill(255)
      }
      rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    } 
  }
}