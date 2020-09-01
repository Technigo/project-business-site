function toggleHamburger() {
  this.classList.toggle("responsive")
}

document.getElementById("topnavbar").onclick = toggleHamburger

function toggleFaq () {
  this.classList.toggle("question")
}

document.getElementById("question1").onclick = toggleFaq
document.getElementById("question2").onclick = toggleFaq
document.getElementById("question3").onclick = toggleFaq
document.getElementById("question4").onclick = toggleFaq
document.getElementById("question5").onclick = toggleFaq
