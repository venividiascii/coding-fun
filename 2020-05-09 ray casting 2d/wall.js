class Wall {
	constructor (pos1x, pos1y, pos2x, pos2y){
		this.a = createVector(pos1x, pos1y);
		this.b = createVector(pos2x, pos2y);
		//this.angle = p5.Vector.fromAngle(angle, 1);
		//this.dir = p5.Vector.sub(this.p1, this.p2);
	}
	show() {
		stroke(0);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
	}
}