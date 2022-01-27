// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

function toggle() {
   this.classList.toggle("active")
  //  console.log(this) Visar i inspekt konsollen vad som händer när funktionen åberopas
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle


