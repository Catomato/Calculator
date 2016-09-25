console.log('its loaded!');
//require('./equations.js');
//import equations from './equations.js';


var minus = document.querySelectorAll ('.btn')[11].innerHTML;
var divide = document.querySelectorAll ('.btn')[3].innerHTML;
var calcBtn = document.querySelectorAll('.btn');
var calcOutput = document.getElementById('calc-output');
var output = '';
var currentCommand = 'AC';
var firstNum = null;
var secondNum = null;
var commandSelected = false;
var arithmeticSelected = false;
var arithmetic = null;
var negPos = document.querySelectorAll('.btn')[1].innerHTML;

var add = function (x,y) {
	return x + y;
}
var subtract = function (x,y) {
	return x - y;
}
var multiply = function (x,y) {
	return x * y;
}
var division = function (x,y) {
	return x/y;
}
///// KEYPRESS

//document.onkeypress = function (e) {
//	console.log(e)
//}

/////
console.log(calcOutput);

for(var i = 0; i < calcBtn.length; i++){
	calcBtn[i].onclick = function (e) {
		console.log(e)
		// check if number
		if (this.innerHTML.match(/[0-9.]/)) {
		numberHandler(this.innerHTML); //executing function
		} else {
		commandHandler(this.innerHTML);
		}
	}
}

function numberHandler (number) {
	//if (firstNum) {
	//	output = number;
	//}
	if(calcOutput.innerHTML === '0' || commandSelected){
		output = number;
		commandSelected = false;
		//calcOutput.innerHTML = number;
	} else {
		output += number;
		//calcOutput.innerHTML = output;

	}

	calcOutput.innerHTML = output;
	//console.log ('numberHandler', number);
}

function commandHandler (command) {
console.log ('command:',command)

	if (command === negPos) {
		if(calcOutput.innerHTML > 0) {
			calcOutput.innerHTML = '-' + output;
		} else {
			calcOutput.innerHTML = output;
		}
		// or calcOutput.innerHTML = -1 * calcOutput.innerHTML;
	}
	if (command === 'AC') {
		arithmetic = null;
		calcOutput.innerHTML = '0';
	}
	if (command === '+') {
		arithmetic = add;
		commandSelected = true;
		arithmeticSelected = true;
		firstNum = calcOutput.innerHTML; //allows user to enter another value
	}
	if (command === minus) {
		arithmetic = subtract;
		commandSelected = true;
		arithmeticSelected = true;
		firstNum = calcOutput.innerHTML;
	}
	if (command === 'X') {
		arithmetic = multiply;
		commandSelected = true;
		arithmeticSelected = true;
		firstNum = calcOutput.innerHTML;
	}
	if (command === divide) {
		arithmetic = division;
		commandSelected = true;
		arithmeticSelected = true;
		firstNum = calcOutput.innerHTML;
	}
	if (command === '=') {
		console.log(commandSelected);

		if (!arithmeticSelected) {
			firstNum = calcOutput.innerHTML;
		} else {
			secondNum = calcOutput.innerHTML;
		}


		if (arithmetic) {
		calcOutput.innerHTML = arithmetic(Number(firstNum),Number(secondNum));

		}
		arithmeticSelected = false;
		//calcOutput.innerHTML = arithmetic(Number(secondNum), Number(calcOutput.innerHTML));
		//calcOutput.innerHTML = Number(firstNum) + Number(calcOutput.innerHTML);

	}



}
