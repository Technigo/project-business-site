// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
  //this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle



const btn = document.getElementById ('section1')
  btn.onclick = toggleFaq

const btn2 = document.getElementById ('section2')
  btn2.onclick = toggleFaq

const btn3 = document.getElementById ('section3')
  btn3.onclick = toggleFaq


  function toggleFaq() {
    this.classList.toggle('active')
  }

