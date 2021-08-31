const myForm = document.getElementById("my-form")
const myButton = document.getElementById("submit-button")
const submitConfirmation = document.getElementById("submit-confirmation")

myForm.onsubmit = () => {
  alert("You have pressed submit")
}

myButton.onclick = () => {
  submitConfirmation.style.display = "block"
  
}


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}





// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
