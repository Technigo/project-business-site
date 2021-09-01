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

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle;
document.getElementById('section2').onclick = toggle;

document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.getElementById('name');
	alert(`Hello ${name.value}`);
});
