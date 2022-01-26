// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const question = document.getElementsByClassName("question") 
const form = document.getElementById("form")

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active")
  })
}


form.onsubmit = e => {
  e.preventDefault()
   
}



/*function toggle() {
  this.classList.toggle("active")
}*/

//(‘Hello $ {inputName}!’) 

