// Defining variables
const accordion=document.getElementById("accordion");

const section1=document.getElementById("section1");
const answer1=document.getElementById("answer-1");

const section2=document.getElementById("section2");
const answer2=document.getElementById("answer-2");

const section3=document.getElementById("section3");
const answer3=document.getElementById("answer-3");

const section4=document.getElementById("section4");
const answer4=document.getElementById("answer-4");

const section5=document.getElementById("section5");
const answer5=document.getElementById("answer-5");

// A function that adds and remove the class "active" on the section clicked on.
section1.addEventListener('click', () => {
  section1.classList.toggle('active');
});

section2.addEventListener('click', () => {
  section2.classList.toggle('active');
});

section3.addEventListener('click', () => {
  section3.classList.toggle('active');
});

section4.addEventListener('click', () => {
  section4.classList.toggle('active');
});

section5.addEventListener('click', () => {
  section5.classList.toggle('active');
});



