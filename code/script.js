const form = document.getElementById("form")
const message = document.getElementById("submit-message")
const signup = document.getElementById("signup")
const question = document.querySelectorAll(".question")
const delivery = document.getElementById("delivery")


//Showing message when submitting the form
form.addEventListener("submit", e => {
  e.preventDefault()

  //Save the data from a specific input field
  const firstName = document.getElementById("firstname").value
  
  message.style.display = "block"
  signup.style.display = "none"

  //grab the first chlid of the message (parent) and change the text content
  message.firstElementChild.textContent = `Hi ${firstName},`
  
  //save data from our form and get the delivery frequency to use in text.
  const ourFormData = new FormData(e.target)
  const deliverFrequency = ourFormData.get("delivery-frequency")
  
  delivery.innerText = `Thank you for your ${deliverFrequency} order of flowers!`
}) 


// toggle accordion 
question.forEach(item => {
  item.addEventListener("click", e => {
    e.currentTarget.classList.toggle("active");
  })
})

