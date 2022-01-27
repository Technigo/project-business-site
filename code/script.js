const question = document.querySelectorAll(".question")



/* toggle accordion*/ 
question.forEach(item => {
  item.addEventListener("click", e => {
    e.currentTarget.classList.toggle("active");
  })
})


/*Showing message when submitting the form*/
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("hej")
  const message = document.getElementById("submit-message")
  message.style.display = "block"
  const signup = document.getElementById("signup")
  signup.style.display = "none"
})





//(‘Hello $ {inputName}!’) 

