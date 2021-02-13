const questionHeaderOne = document.getElementById("question-header-1");
const qestionAnswerOne = document.getElementById("qestion-answer-1");


questionHeaderOne.addEventListener("click", () => {
  qestionAnswerOne.classList.toggle("qestion-active");

  
})

const questionHeaderTwo = document.getElementById("question-header-2");
const qestionAnswerTwo = document.getElementById("qestion-answer-2");


questionHeaderTwo.addEventListener("click", () => {
  qestionAnswerTwo.classList.toggle("qestion-active");

  
})

const questionHeaderThree = document.getElementById("question-header-3");
const qestionAnswerThree = document.getElementById("qestion-answer-3");


questionHeaderThree.addEventListener("click", () => {
  qestionAnswerThree.classList.toggle("qestion-active");

  
})

const questionHeaderFour = document.getElementById("question-header-4");
const qestionAnswerFour = document.getElementById("qestion-answer-4");


questionHeaderFour.addEventListener("click", () => {
  qestionAnswerFour.classList.toggle("qestion-active");

  
})













// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggleAnswer() {
//  this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("question1").onclick = toggleAnswer
