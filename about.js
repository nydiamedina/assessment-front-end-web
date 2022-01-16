console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}

function handleMouseover() {
	alert('You\'re awesome because you own a rubber ducky.');
}

let form = document.querySelector('form#contact');
let img = document.querySelector('#rubber-duck');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', handleMouseover);

