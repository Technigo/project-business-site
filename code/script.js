
// Calls for accordion to open

document.getElementById('button1').onclick = toggleAnswer
document.getElementById('button2').onclick = toggleAnswer
document.getElementById('button3').onclick = toggleAnswer
document.getElementById('button4').onclick = toggleAnswer

function toggleAnswer() {
  this.classList.toggle('open')
}