
const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")

function toggle() {
  this.classList.toggle("active")
}

question1.onclick = toggle
question2.onclick = toggle
question3.onclick = toggle




