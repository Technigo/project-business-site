
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("accordion1").onclick = toggle
// document.getElementById("accordion2").onclick = toggle
// document.getElementById("accordion3").onclick = toggle

const accordionQuestion1 = document.getElementById("question1");
const accordionQuestion2 = document.getElementById("question2");
const accordionQuestion3 = document.getElementById("question3");

const accordionAnswer1 = document.getElementById("answer1");
const accordionAnswer2 = document.getElementById("answer2");
const accordionAnswer3 = document.getElementById("answer3");

accordionQuestion1.addEventListener("click", () => {
  accordionQuestion1.classList.toggle("active");
  accordionQuestion2.classList.remove("active");
  accordionQuestion3.classList.remove("active");
});

accordionQuestion2.addEventListener("click", () => {
  accordionQuestion2.classList.toggle("active");
  accordionQuestion1.classList.remove("active");
  accordionQuestion3.classList.remove("active");
});

accordionQuestion3.addEventListener("click", () => {
  accordionQuestion3.classList.toggle("active");
  accordionQuestion2.classList.remove("active");
  accordionQuestion1.classList.remove("active");
});