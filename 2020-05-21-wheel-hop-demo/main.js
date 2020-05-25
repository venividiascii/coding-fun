'use strict'

const WIDTH = 600;
const HEIGHT = 600;
const GRAVITY = .2;

let ball1, ball2;
let spring;
let ground;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  ball1 = new Ball(200, 300, 5)
  ball2 = new Ball(200, 100, 5)
  spring = new Spring(200, .05)
  ground = new Ground(200, 3)
  console.log(ground.heightMap)
}

function draw() {

  background(30);
  ball1.update()
  ball1.draw();
  ball2.update();
  fill(0, 0, 255)
  ball2.draw();
  ground.draw();
  stroke(255)
  spring.update(ball1.p, ball2.p)
  ball1.applyForce(createVector(0, spring.force))
  ball2.applyForce(createVector(0, -spring.force))
}

class Ground {
  constructor(scale, seed) {
    noiseSeed(seed);
    noiseDetail(2, 1)
    this.heightMap = []
    this.yOffset = 400
    this.xScale = 20
    this.yScale = 10
    for (let i = 0; i < width; i++) {
      this.heightMap.push(noise(i/30) * this.scale + this.yOffset)
    }
  }
  draw() {
    noStroke();
    fill(255);
    beginShape();
    vertex(0, height)
    for (let x = 0; x < width; x++) {
      vertex(x, this.heightMap[x])
    }
    vertex(width, height)
    endShape()
  }
  scrollLeft(pixels) {

  }
  scrollRight(pixels) {

  }
  heightAtPoint(x) {

  }
}


class Spring {
  constructor(l, k) {
    this.l = l
    this.k = k
    this.force = 0
    this.oldDisplacement
  }
  update(p1, p2) {
    this.control()
    let distance = dist(p1.x, p1.y, p2.x, p2.y)
    let displacement = this.l - distance

    let friction = .1 * (displacement - this.oldDisplacement)
    this.oldDisplacement = displacement

    this.force = this.k * displacement + friction
    this.draw(p1, p2)
  }
  control() {
    if (keyIsDown(DOWN_ARROW)) {
      this.l = 125
    } else {
      this.l = 200
    }
  }
  draw(p1, p2) {
    stroke(180)
    strokeWeight(15)
    line(p1.x, p1.y, p2.x, p2.y)
  }
}

class Camera {
  constructor(playerX) {
    this.playerX
    this.pos = playerX - width / 3
  }
  update(playerX) {
    this.pos = playerX - width / 3
  }
}


class Ball {
  constructor(x, y, m) {
    //this.xForces = []
    //this.yForces = []
    //this.mInv = 1 / this.m // Optimization for a = f/m calculations?

    this.p = createVector(x, y)
    this.v = createVector(0, 0)
    this.a = createVector(0, 0)
    this.f = createVector(0, 0)
    this.m = m
    this.gravityForce = createVector(0, this.m * GRAVITY)
    this.restitution = .2
  }
  applyForce(force) {
    this.f.add(force)
  }
  update() {
    this.applyForce(this.gravityForce)
    this.a = p5.Vector.div(this.f, this.m)
    this.v.add(this.a)
    this.p.add(this.v)

    this.f.mult(0)
    if (this.v.y > 0 && this.p.y > height) {
      this.p.y = height
      this.v.y = -this.v.y * this.restitution
    }
  }

  draw() {
    ellipse(this.p.x, this.p.y, 50)
  }


}