// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//FRÅN KARIN Const myFunction = () => { ….. } //
script.js
console.log('CONNECTED')

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle

document.getElementById('form').onsubmit = (event) => {
event.preventDefault()

 //console.log ('form submitted')
 //alert ('Form submitted')
 const inputValue = document.getElementById('nameInput').value

 document.getElementById('greeting').innerText= 'hello'
}

document.getElementById('form').onsubmit = event => {
    event.preventDefault()
  
    // console.log('Form submitted')
    // alert('Form submitted')
    const inputValue = document.getElementById('nameInput').value
  
    // document.getElementById('greeting').innerText = 'Hello ' + inputValue
    document.getElementById(
      'greeting'
    ).innerText = `Hello ${inputValue}!`
  }