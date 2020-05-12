function keyPressed() {
	switch (keyCode) {
		case LEFT_ARROW:
			board.moveTile("LEFT");
			break;
		case RIGHT_ARROW:
			board.moveTile("RIGHT");
			break;
		case UP_ARROW:
			board.moveTile("UP");
			break;
		case DOWN_ARROW:
			board.moveTile("DOWN");
			break;
	}
	if (keyCode == 32) {
		board.reset();
	}
}