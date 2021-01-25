
const questionOne = document.getElementById('question-1');
const answerOne = document.getElementById('answer-1');

const questionTwo = document.getElementById('question-2');
const answerTwo = document.getElementById('answer-2');

const questionThree = document.getElementById('question-3');
const answerThree = document.getElementById('answer-3');

const questionFour = document.getElementById('question-4');
const answerFour = document.getElementById('answer-4');

const questionFive = document.getElementById('question-5');
const answerFive = document.getElementById('answer-5');

const questionSix = document.getElementById('question-6');
const answerSix = document.getElementById('answer-6');


const sliderOne = document.getElementById('myInvoices');
const outputOne = document.getElementById('numberOfInvoices');
outputOne.innerHTML = sliderOne.value;

sliderOne.oninput = function() {
  outputOne.innerHTML = this.value;
}

const sliderTwo = document.getElementById('myExpenses');
const outputTwo = document.getElementById('numberOfExpenses');
outputTwo.innerHTML = sliderTwo.value;

sliderTwo.oninput = function() {
  outputTwo.innerHTML = this.value;
}

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

questionFour.addEventListener('click', () => {
  answerFour.classList.toggle('active');
})

questionFive.addEventListener('click', () => {
  answerFive.classList.toggle('active');
})

questionSix.addEventListener('click', () => {
  answerSix.classList.toggle('active');
})


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
