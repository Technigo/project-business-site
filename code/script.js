// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
/*document.getElementsByTagName("button").onclick = toggle
button.onclick = toggleAnswer

function toggleAnswer() {
  this.classlist.toggle(answer)
}*/
// Selects an HTML element, and calls a function which will be executed when the element is clicked.


var question = document.getElementsByClassName("question");
var i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("answer");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}