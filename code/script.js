// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("section1").onclick = toggle



// Accordion toggling for adding/removing "active" class
var acc = document.getElementsByClassName("faq__question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq__question--active");

    var faq__answer = this.nextElementSibling;
    if (faq__answer.style.display === "block") {
      faq__answer.style.display = "none";
    } else {
      faq__answer.style.display = "block";
    }
  });
}