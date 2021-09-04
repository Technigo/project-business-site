

document.getElementById('form').addEventListener('submit',(event) => {
  event.preventDefault()


  const inputValue = document.getElementById('name').value

  alert (`Hello ${inputValue}! So nice that you would like to register with us`)
})

function toggle() {
  
  this.classList.toggle("active")
  
}

// A function that adds and remove the class "active" on the section you click on.
document.getElementById("section1").onclick = toggle

document.getElementById("section2").onclick = toggle

document.getElementById("section3").onclick = toggle

document.getElementById("section4").onclick = toggle

