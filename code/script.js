// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const section1 = document.getElementById('section1');
const answer1 = document.getElementById('answer1');
const section2 = document.getElementById('section2');
const answer2 = document.getElementById('answer2');
const section3 = document.getElementById('section3');
const answer3 = document.getElementById('answer3');
const section4 = document.getElementById('section4');
const answer4 = document.getElementById('answer4');

section1.addEventListener('click', () => {
answer1.classList.add('answer-selected');
answer2.classList.remove('answer-selected');
answer3.classList.remove('answer-selected');
answer4.classList.remove('answer-selected');
})
section2.addEventListener('click', () => {
    answer1.classList.remove('answer-selected');
    answer2.classList.add('answer-selected');
    answer3.classList.remove('answer-selected');
    answer4.classList.remove('answer-selected');
})

section3.addEventListener('click', () => {
    answer1.classList.remove('answer-selected');
    answer2.classList.remove('answer-selected');
    answer3.classList.add('answer-selected');
    answer4.classList.remove('answer-selected');
    })
    section4.addEventListener('click', () => {
        answer1.classList.remove('answer-selected');
        answer2.classList.remove('answer-selected');
        answer3.classList.remove('answer-selected');
        answer4.classList.add('answer-selected');
    })

