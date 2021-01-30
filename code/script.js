
const question = document.querySelectorAll('.accordion__title');

question.forEach(question => {
  question.addEventListener('click', event => {
     question.classList.toggle('active');
  });
  
});


/* Some more advance js, that I am not to so sure about yet, but will add it later 
when I know more about js.

const question = document.querySelectorAll('.question');

question.forEach(question => {
  question.addEventListener('click', event => {
     const currentlyActive = document.querySelector('.question.active'); 
     if(currentlyActive && currentlyActive !== question) {
       currentlyActive.classList.toggle('active');
       currentlyActive.nextElementSibling.style.maxHeight = 0;
     }

     question.classList.toggle('active');
     const answer = question.nextElementSibling;
     if (question.classList.contains('active')) {
       answer.style.maxHeight = answer.scrollHeight + 'px';
     }
     else {
       answer.style.maxHeight = 0;
     }

  });
}); */

