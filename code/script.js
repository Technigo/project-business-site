// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const bookButton = document.getElementById('book-now');
const bigContent = document.getElementById('big-content');

bookButton.addEventListener('click', () => {
  bigContent.scrollIntoView({behavior: 'smooth'});
})

const accordionQuestionOne = document.getElementById('accordion-question-one');
const accordionAnswerOne = document.getElementById('accordion-answer-one');
const accordionQuestionTwo = document.getElementById('accordion-question-two');
const accordionAnswerTwo = document.getElementById('accordion-answer-two');
const accordionQuestionThree = document.getElementById('accordion-question-three');
const accordionAnswerThree = document.getElementById('accordion-answer-three');
const accordionQuestionFour = document.getElementById('accordion-question-four');
const accordionAnswerFour = document.getElementById('accordion-answer-four');
const accordionQuestionFive = document.getElementById('accordion-question-five');
const accordionAnswerFive = document.getElementById('accordion-answer-five');
const accordionQuestionSix = document.getElementById('accordion-question-six');
const accordionAnswerSix = document.getElementById('accordion-answer-six');
const plusSignOne = document.getElementById('plus-one');
const plusSignTwo = document.getElementById('plus-two');
const plusSignThree = document.getElementById('plus-three');
const plusSignFour = document.getElementById('plus-four');
const plusSignFive = document.getElementById('plus-five');
const plusSignSix = document.getElementById('plus-six');

accordionQuestionOne.addEventListener('click', () => {
  accordionAnswerOne.classList.toggle('accordion-visible');
  if (plusSignOne.innerHTML === '+') {
    plusSignOne.innerHTML = '-'
  } else {
    plusSignOne.innerHTML = '+';
  }
  });

accordionQuestionTwo.addEventListener('click', () => {
  accordionAnswerTwo.classList.toggle('accordion-visible');
  if (plusSignTwo.innerHTML === '+') {
    plusSignTwo.innerHTML = '-'
  } else {
    plusSignTwo.innerHTML = '+';
  }
});

accordionQuestionThree.addEventListener('click', () => {
  accordionAnswerThree.classList.toggle('accordion-visible');
  if (plusSignThree.innerHTML === '+') {
    plusSignThree.innerHTML = '-'
  } else {
    plusSignThree.innerHTML = '+';
  }
});

accordionQuestionFour.addEventListener('click', () => {
  accordionAnswerFour.classList.toggle('accordion-visible');
  if (plusSignFour.innerHTML === '+') {
    plusSignFour.innerHTML = '-'
  } else {
    plusSignFour.innerHTML = '+';
  }
});

accordionQuestionFive.addEventListener('click', () => {
  accordionAnswerFive.classList.toggle('accordion-visible');
  if (plusSignFive.innerHTML === '+') {
    plusSignFive.innerHTML = '-'
  } else {
    plusSignFive.innerHTML = '+';
  }
});

accordionQuestionSix.addEventListener('click', () => {
  accordionAnswerSix.classList.toggle('accordion-visible');
  if (plusSignSix.innerHTML === '+') {
    plusSignSix.innerHTML = '-'
  } else {
    plusSignSix.innerHTML = '+';
  }
});




// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle



