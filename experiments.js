console.log('experiment loaded!')

//Chessboard 8/31/16 8x8 square

var size = 64; //64 number comes from how many spaces are in a 8x8 chess board
var result = '';
var evenRows = false;


for (var i = 0;i < size;i++) {
	//result = result + ' #';
	if (evenRows) { // take out first if and else section and uncomment out the above result = result
		result = result + '# ';
	}else {
		result = result + ' #';
	}
	//new line every 8 characters
	if ((i +1) % 8 === 0){ 
		console.log(i + 1)
		result = result + '\n'; // \n means to ask the code to get an extra line
		evenRows = !evenRows; // take row out for second method
	}


	//another method of completing the chessboard, take out all evenRows and the first 'if' section
	//if ((i +1)% 16 === 8) {
	//	console.log(i + 1)
	//	result = result + ' ';
	//}

}
	console.log(result)
