class Particle {
	constructor(){
		this.pos = createVector(width / 2, height / 2);
		this.rays = [];
		for (let i = 0 ; i < 360 ; i += 2){
			this.rays.push(new Ray(this.pos, radians(i)));
		}
	}
	update(x, y) {
		this.pos.set(x, y)
	}
	look(walls){
		for (const ray of this.rays) {
			ray.update();
			let minDist = Infinity;
			let nearPoint = null;
			for (const wall of walls){
				let target = ray.cast(wall);
				if (target) {
					let targetDist = p5.Vector.dist(ray.pos, target)
					if (targetDist < minDist){
						minDist = targetDist;
						nearPoint = target;
					}
				}
			}
			if (nearPoint) {
				strokeWeight(10);
				stroke(255, 30);
				stroke(255, 100);
				line(this.pos.x, this.pos.y, nearPoint.x, nearPoint.y);
			}
		}	
		for (const wall of walls) {
			wall.show();
		}
	}
	
	
}