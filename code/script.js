
// A function that adds and remove the class "active" on the section you click on.

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

document.getElementById("Question1").onclick = toggle

document.getElementById("Question2").onclick = toggle






// sign up form javascript below

document.getElementById('form').onsubmit = (event) => {
  event.preventDefault()

  const inputValue = document.getElementById('nameInput').value

 document.getElementById('thankYou').innerText = `Thank you ${inputValue}` 
}
