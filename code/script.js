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

// Toggle one testimonial img
function changeImg() { 
  const bi = "https://laughing-sinoussi-bf359d.netlify.com/img/bi.jpg";
  const ernst = "https://laughing-sinoussi-bf359d.netlify.com/img/ernst.jpg";
  const element = document.getElementById("test");
  
  // Conditional ternary
  // this.src = condition ? ifTrue : ifFalse;
  element.src = (element.src === bi) ? ernst : bi;
};
