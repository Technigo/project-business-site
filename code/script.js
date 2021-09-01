// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
const sectionOne = document.getElementById('section1')
sectionOne.onclick = toggle

function toggle() {
  this.classList.toggle('active')
}

// const sectionOne = document.querySelectorAll("section1")
// sectionOne.onclick = toggle
// function toggle(sectionOne) {
//   this.classList.toggle("active")
// }

// document.getElementById('form').addEventListener('submit', (event) => {

// 	const name = document.getElementById('name').value;
// 	// document.getElementById('greeting').innerHTML = `Hello ${name} !`
// 	const greeting= document.getElementById('greeting');
// 	greeting.innerHTML= `Hello ${name} !`;
// 	event.preventDefault();

// let question = document.getElementsByClassName("question");
// let i;

// for (i = 0; i < question.length; i++) {
//   question[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     const answer = this.nextElementSibling;
//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//     } else {
//       answer.style.display = "block";
//     }
//   });
// }