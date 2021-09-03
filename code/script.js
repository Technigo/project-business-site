function toggle() {
	const questions = document.getElementsByClassName('question'); // Array reference to all elements with the class 'question'

	/* A loop that goes through each element in questions array above, checks if the element contains
	the class 'active' and does not have the same id as the clicked elements.
	If this is the case, then it removes the class 'active' from element */
	for (let i = 0; i < questions.length; i++) {
		const question = questions[i];
		if (question.classList.contains('active') && question.id !== this.id) {
			question.classList.remove('active');
		}
	}
	this.classList.toggle('active');
}

// adds eventlisteners to DOM elements
document.querySelectorAll('.question').forEach((item) => {
	item.addEventListener('click', toggle);
});

// code for on submit event
document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault();

	// defining constants
	const name = document.getElementById('name').value;
	const greetingMessage = document.getElementById('greeting');
	const greetingContainer = document.getElementById('greeting-container');
	const formContainer = document.getElementById('form-container');

	// changeing the DOM
	greetingMessage.innerHTML = `<h1>See you there,</h1><h1>${name}</h1>`;
	greetingContainer.style.display = 'inherit';
	formContainer.style.display = 'none';
});

// code to rotate icon
const body = document.body;
const html = document.documentElement;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - vh;

window.onscroll = function () {
	scrollRotate();
};

function scrollRotate() {
	const image = document.getElementById('scroll-icon');
	const ancor = document.getElementById('scroll-ancor');
	let yOffset = window.pageYOffset;

	image.style.transform = `rotate(${yOffset / (height / 180)}deg)`;

	if (yOffset > height / 2) {
		image.src = './images/up-arrow.png';
		ancor.href = '#top';
	} else {
		image.src = './images/down-arrow.png';
		ancor.href = '#flex-container';
	}
}
