class Ray {
	constructor (xPos, yPos, angle) {
		this.pos = createVector(xPos, yPos);
		this.dir = p5.Vector.fromAngle(angle, 1);
	}
	show() {
		ellipse(this.pos.x, this.pos.y, 10)
		line(this.pos.x, this.pos.y,
			this.pos.x + this.dir.x * 20,
			this.pos.y + this.dir.y * 20)
	}
	update() {
		this.pos = createVector(mouseX, mouseY);
	}
	cast(walls) {
		for (const wall of walls){
			const v1 = p5.Vector.sub(this.pos, wall.p1);
			const v2 = wall.dir;
			const v3 = createVector(this.pos.y, this.pos.x); //optimize by making when initialized
			
			let denom = p5.Vector.dot(v2, v3); //optimize: change to inverse and mult
			console.table([v2, v3, denom]);
			if (denom == 0) { return; }
			const crosProd = p5.Vector.mag(p5.Vector.cross(v2, v1));
			const t1 = crosProd * denom;
			const t2 = (v1.x * v2.x + v1.y * v2.y) * denom;

			if (t1 >= 0 && t2 >= 0 && t2 <= 1) {
				console.log(t2)
			}
		}
	}
}