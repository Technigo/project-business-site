// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const acc = document.getElementById("section1")
const pru = document.getElementById("section2")
const lan = document.getElementById("section3")
const val = document.getElementById("section4")



acc.onclick = () => {
  acc.classList.toggle('active')

}

pru.onclick = () => {
  pru.classList.toggle('active')

}

lan.onclick = () => {
  lan.classList.toggle('active')

}

val.onclick = () => {
  val.classList.toggle('active')

}




// Selects an HTML element, and call a function which will be executed when the element is clicked.