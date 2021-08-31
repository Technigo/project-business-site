// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
  let chevronDown = this.getElementsByClassName("fa-chevron-down")[0];

  if (!chevronDown) {
    let chevronUp = this.getElementsByClassName("fa-chevron-up")[0];
    chevronUp.classList.remove(`fa-chevron-up`);
    chevronUp.classList.add(`fa-chevron-down`);
  } else {
    chevronDown.classList.remove(`fa-chevron-down`);
    chevronDown.classList.add(`fa-chevron-up`);
  }
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("question1").onclick = toggle;
// document.getElementById("question2").onclick = toggle;
// document.getElementById("question3").onclick = toggle;
// document.getElementById("question4").onclick = toggle;
// document.getElementById("question5").onclick = toggle;

let questions = document.getElementsByClassName("question");

// questions[0].onclick = toggle;
// questions[1].onclick = toggle;
// questions[2].onclick = toggle;
// questions[3].onclick = toggle;
// questions[4].onclick = toggle;

for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = toggle;
}
