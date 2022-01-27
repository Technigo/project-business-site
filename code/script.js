console.log('HELLO')

// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects a "section", and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle

//Den här funktionen gör att min accordian inte fungerar? Men vår lärare sa att vi skulle ha den för att "behålla" informationen från formuläret?
//document.getElementById('form').onsubmit = event => {
  //event.preventDefault()
