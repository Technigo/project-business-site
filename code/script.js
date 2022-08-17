// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const accordionBtn1 = document.querySelector('#section1');
const answerTextBox1 = document.querySelector(".answer1");

const accordionBtn2 = document.querySelector('#section2');
const answerTextBox2 = document.querySelector(".answer2");

const accordionBtn3 = document.querySelector('#section3');
const answerTextBox3 = document.querySelector(".answer3");

const accordionBtn4 = document.querySelector('#section4');
const answerTextBox4 = document.querySelector(".answer4");

accordionBtn1.addEventListener('click', () => {
  answerTextBox1.classList.toggle("active");
});

accordionBtn2.addEventListener('click', () => {
  answerTextBox2.classList.toggle("active");
});

accordionBtn3.addEventListener('click', () => {
  answerTextBox3.classList.toggle("active");
});

accordionBtn4.addEventListener('click', () => {
  answerTextBox4.classList.toggle("active");
});