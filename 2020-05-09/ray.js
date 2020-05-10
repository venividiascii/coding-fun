class Ray {
	constructor (pos, dir) {
		this.pos = pos;
		this.dir = dir;
	}
	show() {
		ellipse(this.pos.x, this.pos.y, 10)
		line(this.pos.x, this.pos.y,
			this.dir.x,
			this.dir.y)
	}
}