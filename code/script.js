// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
	const question1 = document.getElementsByClassName('question')[0];
	const question2 = document.getElementsByClassName('question')[1];
	if (question1.classList.contains('active') && question1.id !== this.id) {
		question1.classList.remove('active');
	}
	if (question2.classList.contains('active') && question2.id !== this.id) {
		question2.classList.remove('active');
	}

	this.classList.toggle('active');
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle;
document.getElementById('section2').onclick = toggle;
