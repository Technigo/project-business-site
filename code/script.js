// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle


// const question1 = document.getElementById("section1");
// question1.onclick = function(){
// question1.classList.toggle('active');
// }


// const question1 = document.getElementById("section1")
// const question2 = document.getElementById("section2")
// const question3 = document.getElementById("section3")



{/* <p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button> */}

// onclick="toggle('answer')"