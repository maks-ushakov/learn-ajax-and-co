window.onload = function () {
	var result = document.getElementById('result');
	var buttons = document.getElementsByClassName('load-btn');

	for(var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			var fileName = this.getAttribute('data-file');
			loadData(fileName, result);
		};
	}

};

function loadData(file, target) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200 ) {
			target.innerHTML = this.responseText;
		}
	};

	xhr.open('GET', file, true);
	xhr.send();
}

