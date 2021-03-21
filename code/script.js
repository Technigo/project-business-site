// Defining variables
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");

// A function that adds and removes the class "active" on the section clicked.
section1.addEventListener('click', () => {
  section1.classList.toggle('active');
  section2.classList.remove('active');
  section3.classList.remove('active');
  section4.classList.remove('active');
  section5.classList.remove('active');
});

section2.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.toggle('active');
  section3.classList.remove('active');
  section4.classList.remove('active');
  section5.classList.remove('active');
});

section3.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.remove('active');
  section3.classList.toggle('active');
  section4.classList.remove('active');
  section5.classList.remove('active');
});

section4.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.remove('active');
  section3.classList.remove('active');
  section4.classList.toggle('active');
  section5.classList.remove('active');
});

section5.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.remove('active');
  section3.classList.remove('active');
  section4.classList.remove('active');
  section5.classList.toggle('active');
});



