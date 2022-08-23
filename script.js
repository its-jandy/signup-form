'use strict';

const form = document.querySelector('form');
const inputs = Array.from(form.querySelectorAll('input'));
const dataInputs = inputs.slice(0, 4);
const passInputs = inputs.slice(4, 6);

dataInputs.forEach(input => {
	input.addEventListener('input', function () {
		if (this.value) {
			this.classList.add('checked');
		} else {
			this.classList.remove('checked');
		}
	});
});

form.addEventListener('submit', e => {
	e.preventDefault();
	const passValue = passInputs[0].value;
	const confPassValue = passInputs[1].value;
	if (passValue === confPassValue) {
		passInputs.forEach(el => el.classList.remove('invalid'));
	} else {
		passInputs.forEach(el => el.classList.add('invalid'));
	}
});
