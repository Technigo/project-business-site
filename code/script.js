const section1 = document.getElementById("section1").onclick = toggle 
const section2 = document.getElementById("section2").onclick = toggle 
const section3 = document.getElementById("section3").onclick = toggle 
const section4 = document.getElementById("section4").onclick = toggle

function toggle() {
  this.classList.toggle("active");
}


document.getElementById('signup').addEventListener('submit', (event) => {
    event.preventDefault()

    const inputValue = document.getElementById('fname').value
    const greeting = document.getElementById('greeting')
    greeting.innerHTML = `<h5>Welcome ${inputValue}! We've got you covered ☔</h5>`

}) 





