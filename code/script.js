// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
	const questions = document.getElementsByClassName('question');

	for (let i = 0; i < questions.length; i++) {
		const question = questions[i];
		if (question.classList.contains('active') && question.id !== this.id) {
			question.classList.remove('active');
		}
	}
	this.classList.toggle('active');
}

// adds eventlisteners to DOM elements
document.getElementById('section1').onclick = toggle;
document.getElementById('section2').onclick = toggle;
document.getElementById('section3').onclick = toggle;
document.getElementById('section4').onclick = toggle;
document.getElementById('section5').onclick = toggle;

// code for on submit event
document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault();

	// defining constants
	const name = document.getElementById('name').value;
	const greetingContainer = document.getElementById('greeting');
	const formContainer = document.getElementById('form');

	// changeing the DOM
	greetingContainer.innerHTML = `<h1>Välkommen ${name}</h1>`;
	greetingContainer.style.display = 'inherit';
	formContainer.style.display = 'none';
});
