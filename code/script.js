// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
document.getElementById("question1").onclick = toggle
document.getElementById("question2").onclick = toggle
document.getElementById("question3").onclick = toggle
document.getElementById("question4").onclick = toggle

const signupBtn = document.getElementById("signupBtn")
const closeBtn = document.getElementById("closeBtn")
const modalForm = document.getElementById("modalForm")

const selectCountry = document.getElementById("selectCountry")
const tel = document.getElementById("tel")

const faqBtn = document.getElementById("faqBtn")
const closeBtn2 = document.getElementById("closeBtn2")
const modalAccordion = document.getElementById("modalAccordion")


signupBtn.onclick = () => {                 //pop up the form when clicking on Sign Up-btn
  modalForm.style.display="block"
}

closeBtn.onclick = () => {                  //close the form
  modalForm.style.display="none"
}

selectCountry.onchange = () => {            //select country and autofill the country code"
  tel.value = selectCountry.value
}

faqBtn.onclick = () => {                    //pop up the faq accordion when clicking on FAQ-btn
  modalAccordion.style.display="block"
}

closeBtn2.onclick = () => {                 //close the accordion
  modalAccordion.style.display="none"
}

