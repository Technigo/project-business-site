const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")

question1.onclick = function toggle() {
  this.classList.toggle("active")
  question2.classList.remove("active")
  question3.classList.remove("active")

}

question2.onclick = function toggle() {
  this.classList.toggle("active")
  question1.classList.remove("active")
  question3.classList.remove("active")

}

question3.onclick = function toggle() {
  this.classList.toggle("active")
  question1.classList.remove("active")
  question2.classList.remove("active")

}