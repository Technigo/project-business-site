// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstName.value.length >= 15) {
    messages.push('Name must be less than 15 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

})