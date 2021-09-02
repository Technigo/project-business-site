// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works


// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// const button = document.getElementById("section1");
// button.onclick = toggle;

// console.log(toggle())

// function toggle() {

//   this.classList.toggle("question")
// }

// const btn = document.getElementById('section1');
// btn.addEventListener('click', () => {
//   btn.classList.toogle("answer");
// })


let acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}