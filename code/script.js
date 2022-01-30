
console.log('CONNECTED')

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

document.getElementById('form').onsubmit = (event) => {
event.preventDefault()

 const inputValue = document.getElementById('nameInput').value

 document.getElementById('greeting').innerText= 'hello'
}

document.getElementById('form').onsubmit = event => {
    event.preventDefault()
  
    // console.log('Form submittegit commit d')
    // alert('Form submitted')
    const inputValue = document.getElementById('nameInput').value
  
    // document.getElementById('greeting').innerText = 'Hello ' + inputValue
    document.getElementById(
      'greeting'
    ).innerText = `Hello ${inputValue}!`
  }

//This is the JS for the accordion//
const sectionOne = document.getElementById("section1")

sectionOne.onclick = () => {
  sectionOne.classList.toggle("active")
} 

const sectionTwo = document.getElementById("section2")

sectionTwo.onclick = () => {
  sectionTwo.classList.toggle("active")
} 
 