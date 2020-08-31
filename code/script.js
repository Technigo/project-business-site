// Selects the different elements to be opened with the function
document.getElementById("button1").onclick = open
document.getElementById("button2").onclick = open
document.getElementById("button3").onclick = open
document.getElementById("button4").onclick = open

// This function toggles the open class on the button elements
function open() {
  this.classList.toggle("open")
}