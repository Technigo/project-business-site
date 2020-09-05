const container1 = document.getElementById("container-1")
const container2 = document.getElementById("container-2")
const container3 = document.getElementById("container-3")
const container4 = document.getElementById("container-4")
const container5 = document.getElementById("container-5")
const question1 = document.getElementById("question-1")
const question2 = document.getElementById("question-2")
const question3 = document.getElementById("question-3")
const question4 = document.getElementById("question-4")
const question5 = document.getElementById("question-5")
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answer5 = document.getElementById("answer-5");

container1.onclick = () => {
  container1.classList.toggle('open');
  container2.classList.remove('open');
  container3.classList.remove('open');
  container4.classList.remove('open');
  container5.classList.remove('open');
  question1.classList.toggle('clicked');
  question2.classList.remove('clicked');
  question3.classList.remove('clicked');
  question4.classList.remove('clicked');
  question5.classList.remove('clicked');
  answer1.classList.toggle('active');
  answer2.classList.remove('active');
  answer3.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

container2.onclick = () => {
  container2.classList.toggle('open');
  container1.classList.remove('open');
  container3.classList.remove('open');
  container4.classList.remove('open');
  container5.classList.remove('open');
  question2.classList.toggle('clicked');
  question1.classList.remove('clicked');
  question3.classList.remove('clicked');
  question4.classList.remove('clicked');
  question5.classList.remove('clicked');
  answer2.classList.toggle('active');
  answer1.classList.remove('active');
  answer3.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

container3.onclick = () => {
  container3.classList.toggle('open');
  container2.classList.remove('open');
  container1.classList.remove('open');
  container4.classList.remove('open');
  container5.classList.remove('open');
  question3.classList.toggle('clicked');
  question2.classList.remove('clicked');
  question1.classList.remove('clicked');
  question4.classList.remove('clicked');
  question5.classList.remove('clicked');
  answer3.classList.toggle('active');
  answer2.classList.remove('active');
  answer1.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

container4.onclick = () => {
  container4.classList.toggle('open');
  container2.classList.remove('open');
  container3.classList.remove('open');
  container1.classList.remove('open');
  container5.classList.remove('open');
  question4.classList.toggle('clicked');
  question2.classList.remove('clicked');
  question3.classList.remove('clicked');
  question1.classList.remove('clicked');
  question5.classList.remove('clicked');
  answer4.classList.toggle('active');
  answer2.classList.remove('active');
  answer3.classList.remove('active');
  answer1.classList.remove('active');
  answer5.classList.remove('active');
}

container5.onclick = () => {
  container5.classList.toggle('open');
  container2.classList.remove('open');
  container3.classList.remove('open');
  container4.classList.remove('open');
  container1.classList.remove('open');
  question5.classList.toggle('clicked');
  question2.classList.remove('clicked');
  question3.classList.remove('clicked');
  question4.classList.remove('clicked');
  question1.classList.remove('clicked');
  answer5.classList.toggle('active');
  answer2.classList.remove('active');
  answer3.classList.remove('active');
  answer4.classList.remove('active');
  answer1.classList.remove('active');
}

//Sticky nav in Javascript
const nav = document.querySelector('nav');
const navOffset = nav.offsetTop;

window.onscroll = () => {
  if (navOffset > window.pageYOffset) {
    nav.classList.remove('sticky')
  }
  else {
    nav.classList.add('sticky')
  }
}
