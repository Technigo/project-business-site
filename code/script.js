// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle




const headerTitle = document.getElementById("header-title")
const btn = document.getElementById("button")


btn.onclick = () => {
    alert("hello you")
    headerTitle.innerText = "tesnknksn"
    btn.style.backgroundColor = "yellow"
    btn.style.color = "blue"
    headerTitle.style.display = "none"
}


