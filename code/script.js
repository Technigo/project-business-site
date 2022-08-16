// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const accordionBtn1 = document.querySelector("#section1");
const accordionBtn2 = document.getElementById(section2);

const answerBox = document.querySelector(".answer");

accordionBtn1.addEventListener("click", () => {
  answerBox.classList.toggle("active");
});


/*
function toggle() {
  this.classList.toggle("active")
}
*/
// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
