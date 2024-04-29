document.addEventListener('DOMContentLoaded', () =>
	document.querySelector('form').reset()
);

document.querySelector('#submit').addEventListener('click', (e) => {
	e.preventDefault();
	const number = document.querySelector('input[name="rank"]:checked');
	if (!number) {
		return;
	}

	document.querySelector('#ranking-number').innerText = number.value;
	document.querySelector('#form-rank').style.display = 'none';
	document.querySelector('#thank-you').style.display = 'flex';
});
