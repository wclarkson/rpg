function Map(w,h) {
	this.terrain = [];
	this.vis = [];
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
	this.width = width;
	this.height = height;
	for (var i=0;i<this.width;i++) {
		this.terrain[i] = [];
		this.vis[i] = [];
		for (var j=0;j<this.height;j++) {
			this.terrain[i][j] = value;
			this.vis[i][j] = 0;
		}
	}
};

Map.prototype.setTerrain = function(grid) {
	this.terrain = grid;
	this.width = grid.length;
	this.height = grid[0].length;
};

Map.prototype.setVis = function(vis) {
	this.vis = vis;
	this.width = vis.length;
	this.height = grid[0].length;
};

Map.prototype.updateVis = function() {
	var rad = 4;
	var xmin = (this.px-rad<0) ? 0 : this.px-rad;
	var xmax = (this.px+rad>=this.width) ? this.width : this.px+rad;
	var ymin = (this.py-rad<0) ? 0 : this.py-rad;
	var ymax = (this.py+rad);
	for (var i=xmin;i<xmax;i++) {
		for (var j=ymin;j<ymax;j++) {
			if ((Math.pow(i-this.px,2)+Math.pow(j-this.py,2))<Math.pow(rad,2)) {
				this.vis[i][j] = 1;
			}
		}
	}
};

Map.prototype.generate = function() {
	
};

Map.prototype.draw = function(context,scale) {
	this.updateVis();
	var camx = this.px;
	var camy = this.py;
	var rad = 4;
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
	xmin = 0;
	xmax = this.width;
	ymin = 0;
	ymax = this.height + 1;
	for (var i=xmin;i<xmax;i++) {
		for (var j=ymin;j<ymax;j++) {
			col = Math.floor(this.terrain[i][j]*255);
			context.beginPath();
			if (this.vis[i][j]==1) {
				if ((Math.pow(i-this.px,2)+Math.pow(j-this.py,2))<Math.pow(rad,2)) {
					context.fillStyle = "rgb(0," + String(col) + ",0)";
				} else {
					context.fillStyle = "rgb(60," + Math.floor(String(col)*0.4) + ",60)";
				}
			} else {
				context.fillStyle = "rgb(0,0,0)";
			}
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