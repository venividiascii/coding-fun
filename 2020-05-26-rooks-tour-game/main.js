// This program is based on a raycasting in C++ tutorial
// as detailed on https://lodev.org/cgtutor/raycasting.html
// The conversion to js and p5.js is done by myself.

const MAP_WIDTH = 24
const MAP_HEIGHT = 24
const SCREEN_WIDTH = 1920
const SCREEN_HEIGHT = 1080

const WORLD_MAP =
[
  [1,1,1,1,1,1,1,1,1,1,2,3,4,5,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,2,2,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let posX = 22, posY = 12; //x and y start position
let dirX = -1, dirY = 0;  //initial direction vector
let planeX = 0, planeY = 0.66; //the 2d raycaster version of camera plane

let time = 0;    //time of current frame
let oldTime = 0; //time of previous frame

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function draw() {
  background(200, 150, 150);
  for (let x = 0; x < SCREEN_WIDTH; x++){
    //calculate ray position and direction
    let cameraX = 2 * x / SCREEN_WIDTH - 1; //x-coord in camera space
    let rayDirX = dirX + planeX * cameraX;
    let rayDirY = dirY + planeY * cameraX;

    //which box of the map we're in
    let mapX = int(posX);
    let mapY = int(posY);

    //length of ray from current position pos to next x or y -side
    let sideDistX;
    let sideDistY;

    //length of ray from one x or y-side to next x or y-side
    let deltaDistX = abs(1 / rayDirX)
    let deltaDistY = abs(1 / rayDirY)
    let perpWallDist;

    //which dir to step in x or y-dir (either +1 or -1)
    let stepX;
    let stepY;

    let hit = 0; //wall hit detected?
    let side; //was it a north/south or east/west wall?

 
    //calculate step and initial sideDist
    if (rayDirX < 0) {
      stepX = -1;
      sideDistX = (posX - mapX) * deltaDistX;
    }
    else {
      stepX = 1;
      sideDistX = (mapX + 1.0 - posX) * deltaDistX;
    }
    if (rayDirY < 0) {
      stepY = -1;
      sideDistY = (posY - mapY) * deltaDistY;
    }
    else {
      stepY = 1;
      sideDistY = (mapY + 1.0 - posY) * deltaDistY;
    }   

    
    //perform DDA
    while (hit == 0)    {
      //jump to next map square, OR in x-direction, OR in y-direction
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = 0;
      }
      else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = 1;
      }
      //Check if ray has hit a wall
      if (WORLD_MAP[mapX][mapY] > 0) hit = 1;
    }
    
    //Calculate distance projected on camera direction (Euclidean distance will give fisheye effect!)
    if (side == 0) perpWallDist = (mapX - posX + (1 - stepX) / 2) / rayDirX;
    else           perpWallDist = (mapY - posY + (1 - stepY) / 2) / rayDirY;

    //Calculate height of line to draw on screen
    let lineHeight = int(SCREEN_HEIGHT / perpWallDist);

    //calculate lowest and highest pixel to fill in current stripe
    let drawStart = -lineHeight / 2 + SCREEN_HEIGHT / 2;
    if(drawStart < 0)drawStart = 0;
    let drawEnd = lineHeight / 2 + SCREEN_HEIGHT / 2;
    if(drawEnd >= SCREEN_HEIGHT)drawEnd = SCREEN_HEIGHT - 1;

  
    //choose wall color
    let wallColor;
    switch(WORLD_MAP[mapX][mapY])
    {
      case 1:  wallColor = color('red');  break; //red
      case 2:  wallColor = color('green');  break; //green
      case 3:  wallColor = color('blue');   break; //blue
      case 4:  wallColor = color('white');  break; //white
      default: wallColor = color('yellow'); break; //yellow
    }

    //give x and y sides different brightness
    if (side == 1) {wallColor = lerpColor(wallColor, color('black'), .5);}

    //draw the pixels of the stripe as a vertical line
    stroke(wallColor)
    line(x, drawStart, x, drawEnd);


    //speed modifiers
    let moveSpeed = deltaTime * .000003; //the constant value is in squares/second
    let rotSpeed = deltaTime * .000001; //the constant value is in radians/second

    //keyboard events
    if (keyIsDown(UP_ARROW)) {
      if(WORLD_MAP[int(posX + dirX * moveSpeed)][int(posY)] == false) posX += dirX * moveSpeed;
      if(WORLD_MAP[int(posX)][int(posY + dirY * moveSpeed)] == false) posY += dirY * moveSpeed;
    }
    //move backwards if no wall behind you
    if (keyIsDown(DOWN_ARROW))
    {
      if(WORLD_MAP[int(posX - dirX * moveSpeed)][int(posY)] == false) posX -= dirX * moveSpeed;
      if(WORLD_MAP[int(posX)][int(posY - dirY * moveSpeed)] == false) posY -= dirY * moveSpeed;
    }
    //rotate to the right
    if (keyIsDown(RIGHT_ARROW))
    {
      //both camera direction and camera plane must be rotated
      let oldDirX = dirX;
      dirX = dirX * cos(-rotSpeed) - dirY * sin(-rotSpeed);
      dirY = oldDirX * sin(-rotSpeed) + dirY * cos(-rotSpeed);
      let oldPlaneX = planeX;
      planeX = planeX * cos(-rotSpeed) - planeY * sin(-rotSpeed);
      planeY = oldPlaneX * sin(-rotSpeed) + planeY * cos(-rotSpeed);
    }
    //rotate to the left
    if (keyIsDown(LEFT_ARROW))
    {
      //both camera direction and camera plane must be rotated
      let oldDirX = dirX;
      dirX = dirX * cos(rotSpeed) - dirY * sin(rotSpeed);
      dirY = oldDirX * sin(rotSpeed) + dirY * cos(rotSpeed);
      let oldPlaneX = planeX;
      planeX = planeX * cos(rotSpeed) - planeY * sin(rotSpeed);
      planeY = oldPlaneX * sin(rotSpeed) + planeY * cos(rotSpeed);
    }
  }
}