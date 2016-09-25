// 8/31/16 commas used for objects

var Person = function (name) { //considered a class/constructor

	this.name = name;
	this.address = '';
	this.hairColor = '';
	this.isFamous = '';
	this.numberOfFingers = '';
	this.homePlanet = '';
	this.speaks = function (says) {
		console.log('My name is ' + this.name + ' ' + says)
	}


}

var zach = new Person('zach');
var julie = new Person('julie');


console.log(zach.speaks('have a nice day!'));


////////////////////////////////////////////////////////////////////////
// Adding, multiplying
/*
var addNums = function (x,y,z) { //adding, similar to how a calculator

	return x + y;
}

var multiply = function (x,y) {
	return x * y;
}

console.log(multiply(9,3)); //multiplying example
*/


///////////////////////////////////////////////////////////////////////////
/* 
//////Passing a function through, in this case the actor, Jack Black

 var actor = 'Jack Black'

function nameFn () {
	console.log(actor)
}

nameFn(1, 2, 3, {test: 'test'} [1, 2, 3]);

////////function expression

var Stats = function () {

	//var arguments = arguments;

	this.name = 'zach';
	this.last = 'kadish';
	console.log() // if 'this' is used in the body (), it will represent the 'window' in console
	//console.log(arguments);
	
	return arguments[0] + arguments[1] + arguments[2];
}

//window object most global in all of JS. 
//console.log(stats (1, 2, 3, {test: 'test'} [1, 2, 3])); //(1, 2, 3, {test: 'test'} [1, 2, 3]) is the argument list

var stats = new Stats(1, 2, 3, {test: 'test'} [1, 2, 3]);
console.log(stats)

/////////////shorthand function

var test = () => console.log('test');// after arrow notation implies function body. return value automatically happening, returning is implied
test() 
*/





