document.querySelector('button').addEventListener('click', addNumbers);

function addNumbers() {
	const number1 = Number(document.querySelector('#number1').value);
	const number2 = Number(document.querySelector('#number2').value);

	const result = number1 + number2;

	console.log(result);
}
