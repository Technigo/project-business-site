const subtitle = document.getElementById("subtitle")

subtitle.textContent = "Let's clean the ocean"
subtitle.onclick = () => {
  alert("Welcome!")
  subtitle.innerText = "Join Us!"


}



function toggle() {
  this.classList.toggle("active")
  //classList adds and remove the class "active" on the section you click on.

}

// Selects an HTML element, and calls here the toggle function. It will be executed when the element is clicked.

var question1 = document.getElementById('section1').onclick = toggle
var question2 = document.getElementById('section2').onclick = toggle
var question3 = document.getElementById('section3').onclick = toggle


