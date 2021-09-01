// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle;

// I wrote a looping function that gets runned as soon as page is loaded and adds listeners to all the FAQ sessions
function loopThrough(){
  for(let i=1; i<7; i++){
    document.getElementById(`section${i}`).addEventListener("click", toggle);
  }
}
window.onload = loopThrough;
