"use strict";

// let icon = document.getElementsByClassName("question").lastChild;
let elements = document.getElementsByClassName("question");
let menu = document.getElementById("mobile");

function toggle() {
  this.classList.toggle("active");
}

for (let i = 0; i < elements.length; ++i) {
  elements[i].onclick = toggle;
  menu[i].onclick = toggle;
}
