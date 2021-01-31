const question1 = document.getElementById('question-1');
const answer1 = document.getElementById('answer-1');

const question2 = document.getElementById('question-2');
const answer2 = document.getElementById('answer-2');

const question3 = document.getElementById('question-3');
const answer3 = document.getElementById('answer-3');


question1.addEventListener('click', () => {
    answer1.classList.toggle('answer-selected');
});

question2.addEventListener('click', () => {
    answer2.classList.toggle('answer-selected');
});

question3.addEventListener('click', () => {
    answer3.classList.toggle('answer-selected');
});