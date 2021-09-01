const section1 = document.getElementById("section1").onclick = toggle 
const section2 = document.getElementById("section2").onclick = toggle 
const section3 = document.getElementById("section3").onclick = toggle 
const section4 = document.getElementById("section4").onclick = toggle


document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()

    const inputValue = document.getElementById('fname').value
    const greeting = document.getElementById('greeting')
    console.log(inputValue)
    greeting.innerHTML = `<h5>Welcome ${inputValue}! We've got you covered ☔</h5>`

}) 



function toggle() {
  this.classList.toggle("active");
}

