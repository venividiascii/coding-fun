function setup() {
  // put setup code here
	createCanvas(250, 250);
	background(200, 200, 200);
  var milliSeconds = 0;
}

function draw() {
	background(200, 200, 200);
	push();
	// define the center of the clock
	translate(125, 125);
	
	// draw the clock background
	fill(0);
		circle(6, 6, 210);
			fill(255);
	circle(0, 0, 210);
	circle(0, 0, 4);
	
	fill(0);
		
	// Draw second dots
	for (let i = 0; i < 60; i++){
		circle(
			sin( radians( i) * 6 ) * 90,		
			cos( radians( i) * 6) * 90,
			1
		)
	}
	// Draw five second dots
	for (let i = 0; i < 12; i++){
		fill(0);
	  circle(
			sin( radians( i) * 30 ) * 90+1.3,		
			cos( radians( i) * 30) * 90+1.3,
			5
		)
		fill(255);
		circle(
			sin( radians( i) * 30 ) * 90,		
			cos( radians( i) * 30) * 90,
			5
		)
	}

	//milliSeconds = second() + (millis()/1000) % 1;
	// second hand
	strokeWeight(1);
  line(
		sin( radians( second()*6) ) * 75, 
		-cos(radians(-second()*6) ) * 75, 
		0, 0
	);
	strokeWeight(2);
	// minute hand
	line(
		sin( radians( (minute()+second()/60 ) *6) ) * 95, 
		-cos( radians( (minute()+second()/60 ) *6) ) * 95, 
		0, 0
	);
	// hour hand
	strokeWeight(3);
	line(
	  sin( radians((hour()+minute()/60)*30) ) * 60, 
		-cos( radians((hour()+minute()/60)*30) ) * 60, 
		0, 0
	);
	pop();
	console.log(hour());
}