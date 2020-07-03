var CQueue = function() {
	this.arr = new Array();
};

CQueue.prototype.appendTail = function(value) {
	this.arr.unshift(value);
};

CQueue.prototype.deleteHead = function() {
	if (this.arr.length) return this.arr.pop();
	else return -1;
};
