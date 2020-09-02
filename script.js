function toggle() {
  this.classList.toggle("active")
}

document.getElementById("about-class").onclick = toggle
document.getElementById("cost").onclick = toggle
document.getElementById("location").onclick = toggle