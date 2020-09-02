// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("question1").onclick = toggle 

//Variables and functions for question number 1

const accordionQuestion1 = document.getElementById("question1")
const accordionAnswer1 = document.getElementById("answer1")

// How answers should behave on click
accordionQuestion1.onclick = () => {
  accordionAnswer1.classList.toggle("active")
  accordionAnswer2.classList.remove("active")
  accordionAnswer3.classList.remove("active")
  accordionAnswer4.classList.remove("active")

// How questions should behave on click  
  accordionQuestion1.classList.toggle("chosen")
  accordionQuestion2.classList.remove("chosen")
  accordionQuestion3.classList.remove("chosen")
  accordionQuestion4.classList.remove("chosen")
}

//Variables and functions for question number 2
const accordionQuestion2 = document.getElementById("question2")
const accordionAnswer2 = document.getElementById("answer2")

// How answers should behave on click
accordionQuestion2.onclick = () => {
  accordionAnswer2.classList.toggle("active")
  accordionAnswer1.classList.remove("active")
  accordionAnswer3.classList.remove("active")
  accordionAnswer4.classList.remove("active")

// How questions should behave on click    
  accordionQuestion2.classList.toggle("chosen")
  accordionQuestion1.classList.remove("chosen")
  accordionQuestion3.classList.remove("chosen")
  accordionQuestion4.classList.remove("chosen")
}

//Variables and functions for question number 3
const accordionQuestion3 = document.getElementById("question3")
const accordionAnswer3 = document.getElementById("answer3")

// How answers should behave on click
accordionQuestion3.onclick = () => {
  accordionAnswer3.classList.toggle("active")
  accordionAnswer1.classList.remove("active")
  accordionAnswer2.classList.remove("active")
  accordionAnswer4.classList.remove("active")

// How questions should behave on click    
  accordionQuestion3.classList.toggle("chosen")
  accordionQuestion1.classList.remove("chosen")
  accordionQuestion2.classList.remove("chosen")
  accordionQuestion4.classList.remove("chosen")
}

//Variables and functions for question number 4
const accordionQuestion4 = document.getElementById("question4")
const accordionAnswer4 = document.getElementById("answer4")

// How answers should behave on click
accordionQuestion4.onclick = () => {
  accordionAnswer4.classList.toggle("active")
  accordionAnswer1.classList.remove("active")
  accordionAnswer2.classList.remove("active")
  accordionAnswer3.classList.remove("active")

// How questions should behave on click  
  accordionQuestion4.classList.toggle("chosen")
  accordionQuestion1.classList.remove("chosen")
  accordionQuestion2.classList.remove("chosen")
  accordionQuestion3.classList.remove("chosen")
}