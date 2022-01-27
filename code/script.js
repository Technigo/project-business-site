// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const question = document.querySelectorAll(".question")
const btn = document.getElementsByClassName("button")
const form = document.getElementById("form")
const message = document.getElementsByClassName("submit-message")

/* const question = document.getElementsByClassName("question")
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active")
  })
}*/

question.forEach(item => {
    item.addEventListener("click", e => {
      e.currentTarget.classList.toggle("active");
    })
})


btn.addEventListener("onclick", () => {
  form.classList.display = hidden
  message.classList.display = block
})



/*function toggle() {
  this.classList.toggle("active")
}*/

//(‘Hello $ {inputName}!’) 

