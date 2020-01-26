// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// function slideToggle() {
//   this.classList.slideToggle("slow","active")
// }

// Section 1
const section1 = document.getElementById("section1")
section1.onclick = toggle

// Section 2
const section2 = document.getElementById("section2")
section2.onclick = toggle

// Section 3
const section3 = document.getElementById("section3")
section3.onclick = toggle

// Section 4
const section4 = document.getElementById("section4")
section4.onclick = toggle

// Section 5
const section5 = document.getElementById("section5")
section5.onclick = toggle

// Section 6
const section6 = document.getElementById("section6")
section6.onclick = toggle

// Section 7
const section7 = document.getElementById("section7")
section7.onclick = toggle

// Section 8
const section8 = document.getElementById("section8")
section8.onclick = toggle