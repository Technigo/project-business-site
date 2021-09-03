"use strict";

// I create a variable called elements
// I get all elements with the class name of "question"
// The content in this variable is created as an array
let elements = document.getElementsByClassName("question");

// This is a function that is activated with a click of the element with class name "question"
function toggle() {
  // The "this" keyword means that I select the element I click on
  this.classList.toggle("active");
}

// on page-load this loop runs and gets all the element in the variable "elements"
// It then sets an onclick event on all elements within the array
for (let i = 0; i < elements.length; ++i) {
  elements[i].onclick = toggle;
}
