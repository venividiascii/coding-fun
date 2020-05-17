const WIDTH = 600;
const HEIGHT = 600;

//load image
//load pixels
//swap pixels at position
//push pixels
function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0)
  fill(255)
  rect(0, 0, width/2, height)
  frameRate(500)
}

function draw() {
  //background(30);
  loadPixels();
  
  for (let i = 0; i < 100000; i++){
    const offset = floor(random(20))
    let randX1 = floor(random(width)) + offset
    let randY1 = floor(random(height)*2)*width + offset
    //let randX2 = floor(random(width)) + offset
    //let randY2 = floor(random(height)*2)*width + offset
    
    let temp = pixels[randX1 + randY1]
    pixels[randX1 + randY1] = pixels[randX1 + randY1 + 4]
    pixels[randX1 + randY1 + 4] = temp
  }
  
  updatePixels();
}