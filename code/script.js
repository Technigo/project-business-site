// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.



const question1 = document.getElementById('question1');
const answer1 = document.getElementById('answer1')
;

const question2 = document.getElementById('question2');
const answer2 = document.getElementById('answer2')
;

const question3 = document.getElementById('question3');
const answer3 = document.getElementById('answer3')
;

question1.addEventListener('click', () => {
  question1.classList.add('question-selected');
  question2.classList.remove('question-selected');
  question3.classList.remove('question-selected');
});

question2.addEventListener('click', () => {
  question1.classList.remove('question-selected');
  question2.classList.add('question-selected');
  question3.classList.remove('question-selected');
});

question3.addEventListener('click', () => {
  question1.classList.remove('question-selected');
  question2.classList.remove('question-selected');
  question3.classList.add('question-selected');
});


/*
question1.addEventListener('click', () => {
  answer1.classList.add('answer-selected');
  answer2.classList.remove('answer-selected');
  answer3.classList.remove('answer-selected');
});

question2.addEventListener('click', () => {
  answer1.classList.remove('answer-selected');
  answer2.classList.add('answer-selected');
  answer3.classList.remove('answer-selected');
});

question3.addEventListener('click', () => {
  answer1.classList.remove('answer-selected');
  answer2.classList.remove('answer-selected');
  answer3.classList.add('answer-selected');
});
*/

