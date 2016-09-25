console.log('its loaded!');


var calcBtn = document.querySelectorAll('.btn');
console.log(calcBtn);

for(var i = 0; i < calcBtn.length; i++){

	calcBtn[i].onclick = function () {
		console.log(this.innerHTML)
	}
}