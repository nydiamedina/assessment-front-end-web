function handleColorClick() {
	alert('My favorite color is pink.');
}

function handlePlaceClick() {
	alert('My favorite place is New York City.');
}

function handleRitualClick() {
	alert('My favorite ritual is taking a deep breath before a difficult assignment.');
}

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', handleColorClick);
place.addEventListener('click', handlePlaceClick);
ritual.addEventListener('click', handleRitualClick);