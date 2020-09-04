// A function that adds and remove the class "active" on the section you click on.
// const questionVariables = document.querySelectorAll(".question");

// questionVariables.forEach(questionVariable => {
//   questionVariable.addEventListener("click", event => {
//     questionVariable.classList.toggle(".active");
//   });
// }); 

// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

const accordionSection1 = document.getElementById("section1");
const accordionSection2 = document.getElementById("section2");
const accordionSection3 = document.getElementById("section3");
const accordionSection4 = document.getElementById("section4");
console.log(accordionSection1, accordionSection2);
console.dir(accordionSection1, accordionSection2);

accordionSection1.onclick = () => {
  const answerContainer1 = accordionSection1.nextElementSibling;
  answerContainer1.classList.toggle("active");
 } 

 accordionSection2.onclick = () => {
  const answerContainer2 = accordionSection2.nextElementSibling;
  answerContainer2.classList.toggle("active");
 }

 accordionSection3.onclick = () => {
  const answerContainer3 = accordionSection3.nextElementSibling;
  answerContainer3.classList.toggle("active");
 } 

 accordionSection4.onclick = () => {
  const answerContainer4 = accordionSection4.nextElementSibling;
  answerContainer4.classList.toggle("active");
 }