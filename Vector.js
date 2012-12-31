function Vector(x,y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.print = function() {
	console.log("< "+this.x+", "+this.y+" >");
};

Vector.prototype.add = function(vec) {
	return new Vector(this.x+vec.x,this.y+vec.y);
};

Vector.prototype.addxy = function(x,y) {
	return new Vector(this.x+x,this.y+y);
};

Vector.prototype.sub = function(vec) {
	return new Vector(this.x-vec.x,this.y-vec.y);
};

Vector.prototype.subxy = function(x,y) {
	return new Vector(this.x-x,this.y-y);
};

Vector.prototype.dot = function(vec) {
	return this.x*vec.x + this.y*vec.y;
};

Vector.prototype.dotxy = function(x,y) {
	return this.x*x + this.y*y;
};

Vector.prototype.mag = function() {
	return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
};

Vector.prototype.normalize = function() {
	var mag = this.mag();
	this.x /= mag;
	this.y /= mag;
};