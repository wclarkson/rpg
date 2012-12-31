var map;    

function initialize() {
	setInterval(draw,1000/30);
	// do more initialization

	map = new Map();
	var noisefn = function(i,j) {
		var vec = new Vector(2*Math.random()-1,2*Math.random()-1);
		vec.normalize();
		return vec
	};
	var perlin = new Perlin(40,40,5,noisefn);
	perlin.generate();
	map.setGrid(perlin.pixvals);		
}

function draw() {
	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	context.fillStyle = "#000000";
	context.fillRect(0,0,canvas.width,canvas.height);
	map.draw(context,10,20,20);
}

initialize();