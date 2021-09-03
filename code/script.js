// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("FAQ1").onclick = toggle
document.getElementById("FAQ2").onclick = toggle
document.getElementById("FAQ3").onclick = toggle
document.getElementById("FAQ4").onclick = toggle
document.getElementById("FAQ5").onclick = toggle









// My code:


// const answer1 = document.getElementById("answer1")
// const section1 = document.getElementById("section1")



// section1.onclick = () => {
//   alert("Hello you")
// }


// answer1.textContent = "Hey"

// answer1.innerText = "Hey"



