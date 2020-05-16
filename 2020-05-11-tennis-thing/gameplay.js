class Gameplay {
  constructor(){
    this.ball = new Ball(width / 2, height /4);
    this.paddle = new Paddle();
    this.bars = [];
    // The following could be done with a list of coordinates
    for (let i = 0 ; i < 4 ; i++) {
      for (let j = 0 ; j < 5 ; j++) {
        this.bars.push(new Bar(10 + i*width / 4, 10 + j*100))
      }
    }
  }
  update(){
    this.ball.update();
    this.paddle.update();
    for (const bar of this.bars) {
      bar.update();
    }    
    this.checkCollision();
    
    this.draw()
  }
  checkCollision(){
    // Paddle collision
    if (this.ball.y + this.ball.h >= this.paddle.y) {
      if (this.ball.x + this.ball.w > this.paddle.x 
          && this.ball.x < this.paddle.x + this.paddle.w){
        if (this.ball.vy > 0 ) {this.ball.vy *= -1;}
        // Play sound
      }
    }
    // Bar collision
    for (const bar of this.bars) {
      let isHit = Collide.pointRect(this.ball, bar)
      if (isHit){
        const hitSide = Collide.pointRectSide(this.ball, bar)
        this.ball.collision(hitSide)
        bar.collision(isHit);
      }
    }
  }
  draw(){
    background(30);
    this.ball.draw();
    this.paddle.draw();
    for (const bar of this.bars) {
      bar.draw();
    }
  }
}

class Collide {
  static pointRect(A, B) {
    if (A.x > B.x && A.x < B.x + B.w  &&
        A.y > B.y && A.y < B.y + B.h) {
      return true;
    }
    return false;
  }
  
  static pointRectSide(A, B) {
    console.log(A)
    console.log(B)
    if        (A.xOld < B.x && A.x >= B.x) {
      return "LEFT HIT"
    } else if (A.yOld < B.y && A.y >= B.y) {
      return "TOP HIT"
    } else if (A.xOld > B.x + B.w && A.x <= B.x + B.w) {
      return "RIGHT HIT"
    } else if (A.yOld > B.y + B.h && A.y <= B.y + B.h) {
      return "BOTTOM HIT"
    }
    return false;
  }    
}

// Ball is a point
class Ball {
  constructor(x, y){
    this.x = x
    this.y = y
    this.vx = 4
    this.vy = 4
    this.w = 8 //width
    this.h = 8 //height
  }
  
  update() {
    this.xOld = this.x
    this.yOld = this.y
    this.wallCollision()
    this.x += this.vx
    this.y += this.vy
  }
  
  draw() {
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h)
  }
  
  collision(type) {
    console.log(type)
    switch (type) {
      case "LEFT HIT":
        this.vx *= -1; break;
      case "RIGHT HIT":
        this.vx *= -1; break;
      case "TOP HIT":
        this.vy *= -1; break;
      case "BOTTOM HIT":
        this.vy *= -1; break;
    }
  }
  wallCollision(){
    if (this.x < 0 || this.x + this.w > width){
      this.vx *= -1;
    }    
    if (this.y < 0 || this.y + this.h > height){
      this.vy *= -1;
    }  
  }
}


class Paddle {
  constructor() {
    this.w = 100;
    this.h = 20;
    this.x = width / 2 - this.w / 2
    this.y = height - 30
    this.v = 0
    this.maxV = 5
  }
  update() {
    this._control()
    this.x += this.v
  }
  draw() {
    rect(this.x, this.y, this.w, this.h)
  }
  _control(){
    let leftIsDown = keyIsDown(LEFT_ARROW)
    let rightIsDown = keyIsDown(RIGHT_ARROW)
    this.v = 0
    if (leftIsDown  && rightIsDown) {
      this.v = 0
    }
    else if (leftIsDown) {
      this.v = -this.maxV
    }
    else if (rightIsDown) {
      this.v = this.maxV
    }
    else {
      this.v = 0
    }
  }
}


class Bar {
  constructor(x, y) {
    this.x = x
    this.y = y    
    this.w = 100;
    this.h = 60;
    this.isHit = false;
  }
  draw() {
    stroke(120);
    rectMode(CORNER)
    rect(this.x, this.y, this.w, this.h)
  } 
  update() {
    if (this.isHit){
      this.y += 1000
      this.x += 1000
      this.isHit = false
    }
  }
  collision(ball) {
    this.isHit = true;
  }
}
