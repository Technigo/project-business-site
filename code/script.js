const questionOne = document.querySelectorAll('.question');

questionOne.forEach(questionOne => {
  questionOne.addEventListener('click', event => {
    questionOne.classList.toggle('active');
  });
});