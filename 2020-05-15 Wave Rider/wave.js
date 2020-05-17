class Wave {
  constructor(){
    //this.frameCount = 0;
    this.water = []
    this.waterLevel = height * 3/5;
    for (let i = -width/2 ; i < 0 ; i += 1) {
      this.water.push(sin(i/10)*24)
    }
  }
  
  update() {
    this.water.push(sin(frameCount/10)*20)
    this.water.shift(0, 1)
    
    this.frameCount++;
  }
  
  draw() {
    beginShape();
    vertex(0, height)
    for (let i = 0 ; i < width ; i += 1) {
      vertex(i * 2, this.water[i] + this.waterLevel)
    }
    vertex(width, height)
    endShape(CLOSE)
  }
}