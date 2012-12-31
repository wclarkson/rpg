var KEY = { W: 87, A: 65, S: 83, D: 68, SPACE: 32 };
var KEYSTATE = { UP: false, DOWN: false, LEFT: false, RIGHT: false, SPACE: false};

document.addEventListener('keydown', function(evt) {
	switch (evt.keyCode) {
		case KEY.W:
			map.movePlayer("w"); KEYSTATE.UP = true; break;
		case KEY.A:
			map.movePlayer("a"); KEYSTATE.LEFT = true; break;
		case KEY.S:
			map.movePlayer("s"); KEYSTATE.DOWN = true; break;
		case KEY.D:
			map.movePlayer("d"); KEYSTATE.RIGHT = true; break;
		// case KEY.SPACE:
		// 			break;
	}
});

document.addEventListener('keyup', function(evt) {
	switch (evt.keyCode) {
		case KEY.W:
			KEYSTATE.UP = false; break;
		case KEY.A:
			KEYSTATE.LEFT = false; break;
		case KEY.S:
			KEYSTATE.DOWN = false; break;
		case KEY.D:
			KEYSTATE.RIGHT = false; break;
	}
});
