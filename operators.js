document.querySelector('button').addEventListener('click', addNumbers);

function addNumbers() {
	const number1 = Number(document.querySelector('#number1').value); //I can use + operator instead of Number to covert value into a number
	const number2 = Number(document.querySelector('#number2').value);

	const result = number1 + number2;

	console.log(result);
}
