// Header buttons that scrolls down to the right section

const bookButton = document.getElementById('book-now');
const bigContent = document.getElementById('big-content');

const aboutUsButton = document.getElementById('about-us-button');
const contactUsButton = document.getElementById('contact-us-button');
const aboutUsContainer = document.getElementById('about-us');
const contactUsContainer = document.getElementById('contact');

bookButton.addEventListener('click', () => {
  bigContent.scrollIntoView({behavior: 'smooth'});
});

aboutUsButton.addEventListener('click', () => {
  aboutUsContainer.scrollIntoView({behavior: 'smooth'});
});

contactUsButton.addEventListener('click', () => {
  contactUsContainer.scrollIntoView({behavior: 'smooth'});
});


// Accordion questions and answers variables

const accordionQuestionOne = document.getElementById('accordion-question-one');
const accordionAnswerOne = document.getElementById('accordion-answer-one');

const accordionQuestionTwo = document.getElementById('accordion-question-two');
const accordionAnswerTwo = document.getElementById('accordion-answer-two');

const accordionQuestionThree = document.getElementById('accordion-question-three');
const accordionAnswerThree = document.getElementById('accordion-answer-three');

const accordionQuestionFour = document.getElementById('accordion-question-four');
const accordionAnswerFour = document.getElementById('accordion-answer-four');

const accordionQuestionFive = document.getElementById('accordion-question-five');
const accordionAnswerFive = document.getElementById('accordion-answer-five');

const accordionQuestionSix = document.getElementById('accordion-question-six');
const accordionAnswerSix = document.getElementById('accordion-answer-six');


// Accordion icons variables

const plusSignOne = document.getElementById('plus-one');
const plusSignTwo = document.getElementById('plus-two');
const plusSignThree = document.getElementById('plus-three');
const plusSignFour = document.getElementById('plus-four');
const plusSignFive = document.getElementById('plus-five');
const plusSignSix = document.getElementById('plus-six');


// Accordion functions

accordionQuestionOne.addEventListener('click', () => {
  accordionAnswerOne.classList.toggle('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (plusSignOne.innerHTML === '+') {
    plusSignOne.innerHTML = '-'
  } else {
    plusSignOne.innerHTML = '+';
  };
  if (plusSignTwo.innerHTML === '-' || plusSignThree.innerHTML === '-' || plusSignFour.innerHTML === '-' || plusSignFive.innerHTML === '-' || plusSignSix.innerHTML === '-') {
    plusSignTwo.innerHTML = '+';
    plusSignThree.innerHTML = '+';
    plusSignFour.innerHTML = '+';
    plusSignFive.innerHTML = '+';
    plusSignSix.innerHTML = '+';
  };
  });

accordionQuestionTwo.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.toggle('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (plusSignTwo.innerHTML === '+') {
    plusSignTwo.innerHTML = '-'
  } else {
    plusSignTwo.innerHTML = '+';
  };
  if (plusSignOne.innerHTML === '-' || plusSignThree.innerHTML === '-' || plusSignFour.innerHTML === '-' || plusSignFive.innerHTML === '-' || plusSignSix.innerHTML === '-') {
    plusSignOne.innerHTML = '+';
    plusSignThree.innerHTML = '+';
    plusSignFour.innerHTML = '+';
    plusSignFive.innerHTML = '+';
    plusSignSix.innerHTML = '+';
  };

});

accordionQuestionThree.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.toggle('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (plusSignThree.innerHTML === '+') {
    plusSignThree.innerHTML = '-'
  } else {
    plusSignThree.innerHTML = '+';
  };
  if (plusSignOne.innerHTML === '-' || plusSignTwo.innerHTML === '-' || plusSignFour.innerHTML === '-' || plusSignFive.innerHTML === '-' || plusSignSix.innerHTML === '-') {
    plusSignOne.innerHTML = '+';
    plusSignTwo.innerHTML = '+';
    plusSignFour.innerHTML = '+';
    plusSignFive.innerHTML = '+';
    plusSignSix.innerHTML = '+';
  };
});

accordionQuestionFour.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.toggle('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (plusSignFour.innerHTML === '+') {
    plusSignFour.innerHTML = '-'
  } else {
    plusSignFour.innerHTML = '+';
  };
  if (plusSignOne.innerHTML === '-' || plusSignTwo.innerHTML === '-' || plusSignThree.innerHTML === '-' || plusSignFive.innerHTML === '-' || plusSignSix.innerHTML === '-') {
    plusSignOne.innerHTML = '+';
    plusSignTwo.innerHTML = '+';
    plusSignThree.innerHTML = '+';
    plusSignFive.innerHTML = '+';
    plusSignSix.innerHTML = '+';
  };
});

accordionQuestionFive.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.toggle('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (plusSignFive.innerHTML === '+') {
    plusSignFive.innerHTML = '-'
  } else {
    plusSignFive.innerHTML = '+';
  };
  if (plusSignOne.innerHTML === '-' || plusSignTwo.innerHTML === '-' || plusSignThree.innerHTML === '-' || plusSignFour.innerHTML === '-' || plusSignSix.innerHTML === '-') {
    plusSignOne.innerHTML = '+';
    plusSignTwo.innerHTML = '+';
    plusSignThree.innerHTML = '+';
    plusSignFour.innerHTML = '+';
    plusSignSix.innerHTML = '+';
  };
});

accordionQuestionSix.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.toggle('accordion-visible');
  if (plusSignSix.innerHTML === '+') {
    plusSignSix.innerHTML = '-'
  } else {
    plusSignSix.innerHTML = '+';
  };
  if (plusSignOne.innerHTML === '-' || plusSignTwo.innerHTML === '-' || plusSignThree.innerHTML === '-' || plusSignFour.innerHTML === '-' || plusSignFive.innerHTML === '-') {
    plusSignOne.innerHTML = '+';
    plusSignTwo.innerHTML = '+';
    plusSignThree.innerHTML = '+';
    plusSignFour.innerHTML = '+';
    plusSignFive.innerHTML = '+';
  };
});




