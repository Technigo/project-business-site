const myForm = document.getElementById("my-form");
const myButton = document.getElementById("submit-button");
const submitConfirmation = document.getElementById("submit-confirmation");

myForm.onsubmit = () => {
  alert("Itemsgit added to your basket");
};

myButton.onclick = () => {
  submitConfirmation.innerText = "Thank you, your order has been submitted"
  
};


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
}





// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;
document.getElementById("section5").onclick = toggle;
document.getElementById("section6").onclick = toggle;


const menuButton = document.getElementById("menu-button");
menuButton.onclick = toggleMenu;

function toggleMenu(e) {
  e.preventDefault();
  this.classList.toggle('open');
}