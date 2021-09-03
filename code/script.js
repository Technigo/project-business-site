//Creates JS variables for different elements
const myForm = document.getElementById("my-form");
const myButton = document.getElementById("submit-button");
const submitConfirmation = document.getElementById("submit-confirmation");

//Produces alert when form is submitted
myForm.onsubmit = () => {
  alert("Items have been added to your basket");
};

//Displays a confirmation message on button click
myButton.onclick = () => {
  submitConfirmation.innerText = "Thank you, your order has been submitted"
};

//Toggles a class 'active' on an element for styling purposes
function toggle() {
  this.classList.toggle("active");
}

//Links the toggle function to the click action
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;
document.getElementById("section5").onclick = toggle;
document.getElementById("section6").onclick = toggle;

//Creating a toggle function on the nav bar for mobile view
const menuButton = document.getElementById("menu-button");
menuButton.onclick = toggleMenu;

function toggleMenu(e) {
  e.preventDefault();
  this.classList.toggle('open');
}