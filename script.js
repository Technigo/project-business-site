// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
  //this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle
//document.getElementById("section2").onclick = toggle
//document.getElementById("section3").onclick = toggle
//document.getElementById("section4").onclick = toggle
//document.getElementById("section5").onclick = toggle



const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5"); 

section1.onclick = () => {
  const answer = document.getElementById("answer1");
  answer.classList.toggle("active");
  document.getElementById("answer2").classList.remove('active');
  document.getElementById("answer3").classList.remove('active');
  document.getElementById("answer4").classList.remove('active');
  document.getElementById("answer5").classList.remove('active');

  document.getElementById("section1".toggle('a'))
}

section2.onclick = () => {
  const answer = document.getElementById("answer2");
  answer.classList.toggle("active");
  document.getElementById("answer1").classList.remove('active');
  document.getElementById("answer3").classList.remove('active');
  document.getElementById("answer4").classList.remove('active');
  document.getElementById("answer5").classList.remove('active');

}

section3.onclick = () => {
  const answer = document.getElementById("answer3");
  answer.classList.toggle("active");
  document.getElementById("answer1").classList.remove('active');
  document.getElementById("answer2").classList.remove('active');
  document.getElementById("answer4").classList.remove('active');
  document.getElementById("answer5").classList.remove('active');
}

section4.onclick = () => {
  const answer = document.getElementById("answer4");
  answer.classList.toggle("active");

  document.getElementById("answer1").classList.remove('active');
  document.getElementById("answer2").classList.remove('active');
  document.getElementById("answer3").classList.remove('active');
  document.getElementById("answer5").classList.remove('active');
}

section5.onclick = () => {
  const answer = document.getElementById("answer5");
  answer.classList.toggle("active-image");

  document.getElementById("answer1").classList.remove('active');
  document.getElementById("answer2").classList.remove('active');
  document.getElementById("answer3").classList.remove('active');
  document.getElementById("answer4").classList.remove('active');
}

