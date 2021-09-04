// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// Selects an HTML element, and calls a function which will be executed when the element is clicked.





document.getElementById('question1').onclick = toggleMagic

document.getElementById('question2').onclick = toggleMagic

document.getElementById('question3').onclick = toggleMagic

document.getElementById('question4').onclick = toggleMagic

document.getElementById('question5').onclick = toggleMagic

function toggleMagic(){
  this.classList.toggle('open')
}


