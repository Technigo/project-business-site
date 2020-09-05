const question1 = document.getElementById("question-1")
const question2 = document.getElementById("question-2")
const question3 = document.getElementById("question-3")
const question4 = document.getElementById("question-4")
const question5 = document.getElementById("question-5")
const answer1 = question1.nextElementSibling;
const answer2 = question2.nextElementSibling;
const answer3 = question3.nextElementSibling;
const answer4 = question4.nextElementSibling;
const answer5 = question5.nextElementSibling;

question1.onclick = () => {
  answer1.classList.toggle('active');
  answer2.classList.remove('active');
  answer3.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

question2.onclick = () => {
  answer2.classList.toggle('active');
  answer1.classList.remove('active');
  answer3.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

question3.onclick = () => {
  answer3.classList.toggle('active');
  answer2.classList.remove('active');
  answer1.classList.remove('active');
  answer4.classList.remove('active');
  answer5.classList.remove('active');
}

question4.onclick = () => {
  answer4.classList.toggle('active');
  answer2.classList.remove('active');
  answer3.classList.remove('active');
  answer1.classList.remove('active');
  answer5.classList.remove('active');
}

question5.onclick = () => {
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
