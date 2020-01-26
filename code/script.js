// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Loops over all div.question, and calls a function which will be executed when the element is clicked.
const accordion = document.querySelectorAll('.question');

for (i = 0; i < accordion.length; ++i) {
  accordion[i].onclick = toggle;
}