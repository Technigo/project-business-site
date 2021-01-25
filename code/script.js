
const questionOne = document.getElementById('question-1');
const answerOne = document.getElementById('answer-1');

const questionTwo = document.getElementById('question-2');
const answerTwo = document.getElementById('answer-2');

const questionThree = document.getElementById('question-3');
const answerThree = document.getElementById('answer-3');

console.log(answerOne);

questionOne.addEventListener('click', () => {
  answerOne.classList.toggle('active');
})

questionTwo.addEventListener('click', () => {
  answerTwo.classList.toggle('active');
})

questionThree.addEventListener('click', () => {
  answerThree.classList.toggle('active');
})


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
