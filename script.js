// const toCheck = document.getElementById('plain').value;
const primBut = document.getElementById('talForm');
const divBut  = document.getElementById('divForm');
let nDivArray = [];
let wDivArray = [];

primBut.addEventListener('submit', (e) => {
	e.preventDefault();
	// let nDivArray = [];
	const toCheck = document.getElementById('plain').value;
	const root = Math.ceil(Math.sqrt(toCheck));
	checkPrime(toCheck, root);

	if (toCheck % 1 !== 0) {
		document.getElementById('result').value = 'Please enter an intiger or the code will not work!';
	} else {
 
		if (nDivArray.length === 0) {
			document.getElementById('result').value = toCheck + ' is prime';
		}
		if (nDivArray.length != 0) {
			document.getElementById('result').value = toCheck + ' is not prime';
		}
	}	

	return false;
}, false);


divBut.addEventListener('submit', (e) => {
	wDivArray = [];
	const toCheck = document.getElementById('plain').value;
	const root = Math.ceil(Math.sqrt(toCheck));
	e.preventDefault();
	checkDiv(toCheck, root);
	wDivArray.sort(function(a, b){
		return b - a
	});

	document.getElementById('result').value = toCheck + ' is divisible by: ' + wDivArray;

	return false;
}, false);




function checkPrime (toCheckF, rootF) {
	for (let i = rootF; i > 1; i--) {
		let divRoot = toCheckF / i;
		if (divRoot % 1 === 0) {
			let numToStr = i.toString();
			nDivArray.push(numToStr);
		}
	}

}

function checkDiv (toCheckF, rootF) {
	for (let i = rootF; i > 1; i--) {
		let divRoot = toCheckF / i;
		if (divRoot % 1 === 0 && divRoot !== i) {
			wDivArray.push(i);
			wDivArray.push(divRoot);
		} else if (divRoot % 1 === 0) {
			wDivArray.push(divRoot);
		}
		
	}

}