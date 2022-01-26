// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const question = document.getElementsByClassName("question") 
//const form = document.getElementById("form")
//const inputName = document.getElementsById("firstname").value

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active")
  })
}


//form.onsubmit = e => {
//  e.preventDefault()
//}
//document.getElementsById("greeting") = inputName

/*function toggle() {
  this.classList.toggle("active")
}*/

//(‘Hello $ {inputValue}!’) 


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
/* document.getElementById("section1").onclick = toggle */

/*insead of "click* use "onsubmit"*/
