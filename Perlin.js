function Perlin(width,height,grid_size,noisefn) {
	this.w = width;
	this.h = height;
	this.grid_size = grid_size;
	this.vecw = this.w/this.grid_size;
	this.vech = this.h/this.grid_size;
	this.vecs = [];
	this.pixvals = [];
	// initialize pixel array
	for (var i=0;i<this.w;i++) {
		this.pixvals[i] = [];
		for (var j=0;j<this.h;j++) {
			this.pixvals[i][j] = 0;
		}
	}
	// initialize vectors
	for (i=0;i<this.vecw;i++) {
		this.vecs[i] = [];
		for (j=0;j<this.vech;j++) {
			this.vecs[i][j] = noisefn(i,j);
		}
	}
	
}

Perlin.prototype.generate = function() {
	for (var m=0;m<this.w;m++) {
		for (var n=0;n<this.h;n++) {
			var i = m/this.grid_size;
			var j = n/this.grid_size;
			var x = Math.floor(i);
			var y = Math.floor(j);
			
			var nw = this.vecs[x				][y				  ].dotxy(i-x,j-y);
			var ne = this.vecs[(x+1)%this.vecw	][y 			  ].dotxy(i-(x+1),j-y);	
			var sw = this.vecs[x				][(y+1)%this.vech ].dotxy(i-x,j-(y+1));
			var se = this.vecs[(x+1)%this.vecw	][(y+1)%this.vech ].dotxy(i-(x+1),j-(y+1));
						
			var sx = 3*Math.pow(i-x,2)-2*Math.pow(i-x,3);
			var a = nw + sx*(ne-nw);
			var b = sw + sx*(se-sw);
			var sy = 3*Math.pow(j-y,2)-2*Math.pow(j-y,3);
			this.pixvals[m][n] = ((a+sy*(b-a))+1)/2;
		}
	}
};