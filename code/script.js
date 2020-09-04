// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

/*const sectionOne = document.getElementById('section1');
const sectionTwo = document.getElementById('section2');
const sectionThree = document.getElementById('section3');
const sectionFour = document.getElementById('section4');
const questions = document.querySelectorAll('.question');

function toggle(event) {
  this.classList.toggle("active");
  questions.forEach(question => {
    if (question !== event.target){
      question.classList.remove('active');
    } else {
      question.classList.toggle('active');
    }
  })
}
 
sectionOne.onclick = toggle
sectionTwo.onclick = toggle
sectionThree.onclick = toggle
sectionFour.onclick = toggle*/

/*Youtube: 23:23*/
const accordionQuestions = document.querySelectorAll('.question');

accordionQuestions.forEach(accordionQuestion => {
  accordionQuestion.addEventListener('click', event => {
    
    
    accordionQuestion.classList.toggle('active');
    const accordionAnswer = accordionQuestion.nextElementSibling;
    if(accordionAnswer.classList.contains('active')){
      accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + "px";
    }
   

    const currentQuestion = document.querySelector('.question.active');
    if(currentQuestion && currentQuestion!==accordionQuestion) {
      currentQuestion.classList.toggle('active');
    }
  })
})
