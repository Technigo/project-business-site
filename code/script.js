// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle



















// My code:


// const answer1 = document.getElementById("answer1")
// const section1 = document.getElementById("section1")



// section1.onclick = () => {
//   alert("Hello you")
// }


// answer1.textContent = "Hey"

// answer1.innerText = "Hey"








// HTML:

{/* <section class="accordion">
<h1>FAQ</h1>

<div class="question" id="section1">Question 1</div>
<div class="answer" id="answer1">
  <p>Answer 1...</p>
</div>

<div class="question" id="section2">Question 2</div>
<div class="answer" id="answer2">
  <p>Answer 2...</p>
</div>
</section>*/}