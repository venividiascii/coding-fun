class Wall {
	constructor (pos1x, pos1y, pos2x, pos2y){
		this.p1 = createVector(pos1x, pos1y);
		this.p2 = createVector(pos2x, pos2y);
		//this.angle = p5.Vector.fromAngle(angle, 1);
		this.dir = p5.Vector.sub(this.p1, this.p2);
	}
	show() {
		line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
	}
}