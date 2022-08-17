// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const questionOne = document.querySelector("#question-1");
const answerOne = document.querySelector("#answer-1");

questionOne.addEventListener("click", () => {
  answerOne.classList.toggle("active");
});

const questionTwo = document.querySelector("#question-2");
const answerTwo = document.querySelector("#answer-2");

questionTwo.addEventListener("click", () => {
  answerTwo.classList.toggle("active");
});

const questionThree = document.querySelector("#question-3");
const answerThree = document.querySelector("#answer-3");

questionThree.addEventListener("click", () => {
  answerThree.classList.toggle("active");
});

const questionFour = document.querySelector("#question-4");
const answerFour = document.querySelector("#answer-4");

questionFour.addEventListener("click", () => {
  answerFour.classList.toggle("active");
});
