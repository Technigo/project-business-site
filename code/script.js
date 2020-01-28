// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

function toggle() {
  this.classList.toggle("active")
};

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle
document.getElementById("section5").onclick = toggle


// document.getElementsByClassName('testimonials-img').onclick = changeImg

// document.getElementById('text') = swap;

// document.getElementById("pic2").onclick = changeImg
let test = document.getElementById("test");
console.log(test.src);

function changeImg() { 
  const bi = "";
  const ernst = "";
  console.log(bi);
  console.log(ernst);
  // Conditional ternary
  // this.src = condition ? ifTrue : ifFalse;
  this.src = (this.src === bi) ? ernst : bi;
};
