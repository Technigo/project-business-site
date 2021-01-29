const accordionQuestionFirst = document.getElementById('question1');
const accordionAnswerFirst = document.getElementById('answer1');

const accordionQuestionSecond = document.getElementById('question2');
const accordionAnswerSecond = document.getElementById('answer2');

const accordionQuestionThird = document.getElementById('question3');
const accordionAnswerThird = document.getElementById('answer3');

accordionQuestionFirst.addEventListener('click', () => {
  accordionAnswerFirst.classList.toggle('answer-clicked');
});

accordionQuestionSecond.addEventListener('click', () => {
  accordionAnswerSecond.classList.toggle('answer-clicked');
});

accordionQuestionThird.addEventListener('click', () => {
  accordionAnswerThird.classList.toggle('answer-clicked');
});


