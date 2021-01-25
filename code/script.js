// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
 // this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle

const question1 = document.getElementById("question1");
const answer = document.getElementById("answer");
console.log(question1);

question1.addEventListener("click", () => {
  answer.classList.toggle("question-selected");
})
