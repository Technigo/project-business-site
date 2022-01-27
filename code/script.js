// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


let x = document.getElementById("section1");
let y = document.getElementById("section2");
let z = document.getElementById("section3");
let a = document.getElementById("section4");
let b = document.getElementById("section5");

x.onclick = toggle
y.onclick = toggle
z.onclick = toggle
a.onclick = toggle
b.onclick = toggle


function toggle() {
  this.classList.toggle('active');

}



document.getElementById('form').onsubmit = event => {
  event.preventDefault()
  
  document.getElementById('greeting').innerText = "Thank you for signing up!"
  document.getElementById('input-name').style.opacity = "0"
  document.getElementById('input-email').style.opacity = "0"
  document.getElementById('input-password').style.opacity = "0"
  console.log('Form submitted')
  
}







// Selects an HTML element, and calls a function which will be executed when the element is clicked.


