function toggle() {
  this.classList.toggle("active")
}

const questions = document.querySelectorAll(".question")

for (let question of questions) {
  question.addEventListener("click", toggle)
}