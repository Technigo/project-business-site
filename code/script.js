
// this function is responsible for displaying the answer
function toggle() {
  this.classList.toggle("active");
  
}
// this function changes the arrow button which is <span> element in html.
function changeArrow(){
  if (this.lastChild.innerHTML=="+") {
    this.lastChild.innerHTML= "-";
  }
  else{
    this.lastChild.innerHTML="+";
  }
}

//A looping function adds two listeners to all the FAQ sessions.
function loopThroughQuestions(){
  let numberOfAnswers= document.querySelectorAll('#faq-container .answer').length;
  for(let i=1; i<=numberOfAnswers; i++){
    document.getElementById(`section${i}`).addEventListener("click", toggle);
    document.getElementById(`section${i}`).addEventListener("click", changeArrow);
  }
}
//The looping function runs when page loads.
window.onload = loopThroughQuestions;
