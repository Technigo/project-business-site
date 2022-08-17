// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
//this.classList.toggle("active");}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle;
/* 
const questionBtn1 = document.getElementById("questionBtn1");
const answer1 = document.querySelector("#answer1");

const answer = document.querySelector(".question");

question.Btn.addEventlistener("click", () => {
  answer.classList.toggle("active");
}); */

//Questions
const panelBtn1 = document.getElementById("panelBtn1");
const panelBtn2 = document.querySelector("#secondaryPanelBtn");
const panelBtn3 = document.getElementById("testPanelBtn");

//Answers
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");
const panel3 = document.querySelector("#panel3");

panelBtn1.addEventListener("click", () => {
  // window.alert("Hello World");
  panel1.classList.toggle("active");
});
panelBtn2.addEventListener("click", () => {
  // window.alert("Hello World");
  panel2.classList.toggle("active");
});
panelBtn3.addEventListener("click", () => {
  // window.alert("Hello World");
  panel3.classList.toggle("active");
});
