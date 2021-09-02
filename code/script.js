

function toggle() {
  
  this.classList.toggle("active")
  console.log('click')
}

// A function that adds and remove the class "active" on the section you click on.
document.getElementById("section1").onclick = toggle

document.getElementById("section2").onclick = toggle

document.getElementById("section3").onclick = toggle

document.getElementById("section4").onclick = toggle

