

var btnOne = document.getElementById('btn-one'); //easiest way for js to grab element. alternative is document.selectQuery('.')
var btnTwo = document.getElementById('btn-two');
var text = document.getElementById('text');

btnOne.innerHTML = '<div class="home-button">SHOW TEXT</div>';

btnTwo.innerHTML = '<div class="home-button">HIDE TEXT</div>';

btnOne.onclick = function () { // onclick is called the handler or events handler
	console.log('click!');
	text.classList.add('opacity');
	console.log(text.classList) //return value of classList is the return of classes on dom 
	text.innerHTML = "Hello World!";

}
btnTwo.onclick = function () { // onclick is called the handler or events handler
	console.log('click!');
	text.classList.remove('opacity');
	console.log(text.classList) //return value of classList is the return of classes on dom 
	text.innerHTML = "Hello World!";

}

btnOne.onmouseover = function () {
	console.log('mouseover') //button had not had the chance to load into html, move <script> to bottom of <body>


}


btnOne.onmouseleave = function () {
	console.log('mouseleave')
}