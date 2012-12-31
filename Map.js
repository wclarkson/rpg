function Map(w,h) {
	this.grid = [];
	this.px = 20;
	this.py = 20;
	// initialize things here	
}

Map.prototype.movePlayer = function(dir) {
	switch (dir) {
		case "w":
			if (this.py<(this.height)) this.py++;
			break;
		case "a":
			if (this.px>0) this.px--;
			break;
		case "s":
			if (this.py>1) this.py--;
			break;
		case "d":
			if (this.px<(this.width-1)) this.px++;
			break;
	}
};

Map.prototype.initGrid = function(width,height,value) {
	console.log(typeof(value));
	this.width = width;
	this.height = height;
	for (var i=0;i<this.width;i++) {
		this.grid[i] = [];
		for (var j=0;j<this.height;j++) {
			this.grid[i][j] = value;
		}
	}
};

Map.prototype.setGrid = function(grid) {
	this.grid = grid;
	this.width = grid.length;
	this.height = grid[0].length;
};

Map.prototype.generate = function() {
	
};

Map.prototype.draw = function(context,scale) {
	var camx = this.px;
	var camy = this.py;
	var cw = 15;
	var ch = 15;
	var block = scale;
	if (camx<Math.ceil(cw/2)) camx = Math.floor(cw/2);
	if (camx>Math.ceil(this.width-cw/2)) camx = Math.ceil(this.width-cw/2);
	
	if (camy<Math.floor(ch/2+1)) camy = Math.floor(ch/2+1);
	if (camy>Math.ceil(this.height-ch/2+1)) camy = Math.ceil(this.height-ch/2+1);
	
	var col;
		
	var xmin = Math.ceil(camx-cw/2);
	var xmax = Math.floor(camx+cw/2);
	var ymin = Math.ceil(camy-ch/2);
	var ymax = Math.floor(camy+ch/2);
	for (var i=xmin;i<xmax;i++) {
		for (var j=ymin;j<ymax;j++) {
			col = Math.floor(this.grid[i][j]*255);
			context.beginPath();
			context.fillStyle = "rgb(0," + String(col) + ",0)";
			context.rect(scale*i,context.canvas.height-scale*j,scale,scale);
			context.fill();
		}
	}
	// draw player
	context.beginPath();
	context.fillStyle = "blue";
	context.rect(scale*this.px,context.canvas.height-scale*this.py,scale,scale);
	context.fill();
};