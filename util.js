var util = require('util')

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function () {
	console.log('hello ' + this.name);
  }
}

Base.prototype.showName = function () {
	console.log(this.name);
}


function Sub() {
	this.name = 'sub';
}
util.inherits(Sub, Base);

var base = new Base();
base.showName();
base.sayHello();
console.log(base);
var sub = new Sub();
sub.showName();
console.log(sub);
//sub.sayHello();
