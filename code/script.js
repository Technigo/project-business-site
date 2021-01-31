// ACCORDION & "+" AND "-" ICONS //

const faqQuestions = document.querySelectorAll('.accordion-container .question'); 
faqQuestions.forEach(addClickEvent);

function addClickEvent(question) {
  question.addEventListener('click', () => {
    const currentOpenQuestion = document.querySelector('.active');
    if(currentOpenQuestion && currentOpenQuestion != question){
      currentOpenQuestion.classList.remove('active');
      const plus = currentOpenQuestion.querySelector('.question-plus');
      const minus = currentOpenQuestion.querySelector('.question-minus');
      minus.classList.add('hide');
      plus.classList.remove('hide');
    }
    question.classList.toggle('active');
    const plus = question.querySelector('.question-plus');
    const minus = question.querySelector('.question-minus');
    plus.classList.toggle('hide');
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