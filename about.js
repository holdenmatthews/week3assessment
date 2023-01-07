console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function complimentUser() {
	alert(`You're the GOAT!!`)
}

let chewquaka = document.querySelector("#chewquaka").addEventListener("mouseover", complimentUser)