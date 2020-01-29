// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// function toggleFAQ will toggle between class active and without class active
// active class is styled in CSS (does not exist in HTML)
// in CSS .active {} will style the question
// .active + .answer {} display and style the answer 

function toggleFAQ() {
  this.classList.toggle("active")
}


// variables

var section1 = document.getElementById("section1")

var section2 = document.getElementById("section2")

var section3 = document.getElementById("section3")

// Selects variables and call for function which will be executed when the element is clicked.


section1.onclick = toggleFAQ

section2.onclick = toggleFAQ

section3.onclick = toggleFAQ