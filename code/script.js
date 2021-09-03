
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle;

//A looping function adds listeners to all the FAQ sessions.
function loopThroughQuestions(){
  let numberOfAnswers= document.querySelectorAll('#faq-container .answer').length;
  for(let i=1; i<=numberOfAnswers; i++){
    document.getElementById(`section${i}`).addEventListener("click", toggle);
  }
}
//The looping function runs when page loads.
window.onload = loopThroughQuestions;
