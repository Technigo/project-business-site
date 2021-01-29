// ACCORDION & "+" AND "-" ICONS //

const faqQuestions = document.querySelectorAll('.accordion .question'); 
faqQuestions.forEach(addClickEvent);

function addClickEvent(question) {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const plus = question.querySelector('.question-plus');
    plus.classList.toggle('hide');
    const minus = question.querySelector('.question-minus');
    minus.classList.toggle('hide');
  });
}



// HAMBURGER //

const navigation = document.querySelector('.navigation');
const ham = document.querySelector('.ham');

ham.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  navigation.classList.toggle('open-menu');
  ham.classList.toggle('close-menu');
}