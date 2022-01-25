//form validation
function invalid(e) {
  const element = e.target.parentElement;
  element.classList.add("invalid");
}
function valid(e) {
  const element = e.target.parentElement;
  const value = e.target.value;
  !value && element.classList.remove("invalid");
}
const validationElements = ["#uname", "#email", "#pass", "#agreed"];
validationElements.map((elementId) => {
  const element = document.querySelector(elementId);
  element.addEventListener("invalid", invalid);
  element.addEventListener("keypress", valid);
});
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  // e.preventDefault();
  form.reset();
});

function toggle() {
  this.classList.toggle("active");
  const icon = this.children[0].children[0];

  if (this.classList.contains("active")) {
    // section is expanded
    icon.src = "./assets/icons/minus-solid.svg";
  } else {
    icon.src = "./assets/icons/plus-solid.svg";
  }
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
