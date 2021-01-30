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

const iconOne = document.getElementById('icon-one');
const iconTwo = document.getElementById('icon-two');
const iconThree = document.getElementById('icon-three');
const iconFour = document.getElementById('icon-four');
const iconFive = document.getElementById('icon-five');
const iconSix = document.getElementById('icon-six');


// Accordion functions


accordionQuestionOne.addEventListener('click', () => {
  accordionAnswerOne.classList.toggle('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (iconOne.innerHTML === '+') {
    iconOne.innerHTML = '-'
  } else {
    iconOne.innerHTML = '+';
  };
  if (iconTwo.innerHTML === '-' || iconThree.innerHTML === '-' || iconFour.innerHTML === '-' || iconFive.innerHTML === '-' || iconSix.innerHTML === '-') {
    iconTwo.innerHTML = '+';
    iconThree.innerHTML = '+';
    iconFour.innerHTML = '+';
    iconFive.innerHTML = '+';
    iconSix.innerHTML = '+';
  };
  });

accordionQuestionTwo.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.toggle('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (iconTwo.innerHTML === '+') {
    iconTwo.innerHTML = '-';
  } else {
    iconTwo.innerHTML = '+';
  };
  if (iconOne.innerHTML === '-' || iconThree.innerHTML === '-' || iconFour.innerHTML === '-' || iconFive.innerHTML === '-' || iconSix.innerHTML === '-') {
    iconOne.innerHTML = '+';
    iconThree.innerHTML = '+';
    iconFour.innerHTML = '+';
    iconFive.innerHTML = '+';
    iconSix.innerHTML = '+';
  };

});

accordionQuestionThree.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.toggle('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (iconThree.innerHTML === '+') {
    iconThree.innerHTML = '-';
  } else {
    iconThree.innerHTML = '+';
  };
  if (iconOne.innerHTML === '-' || iconTwo.innerHTML === '-' || iconFour.innerHTML === '-' || iconFive.innerHTML === '-' || iconSix.innerHTML === '-') {
    iconOne.innerHTML = '+';
    iconTwo.innerHTML = '+';
    iconFour.innerHTML = '+';
    iconFive.innerHTML = '+';
    iconSix.innerHTML = '+';
  };
});

accordionQuestionFour.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.toggle('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (iconFour.innerHTML === '+') {
    iconFour.innerHTML = '-';
  } else {
    iconFour.innerHTML = '+';
  };
  if (iconOne.innerHTML === '-' || iconTwo.innerHTML === '-' || iconThree.innerHTML === '-' || iconFive.innerHTML === '-' || iconSix.innerHTML === '-') {
    iconOne.innerHTML = '+';
    iconTwo.innerHTML = '+';
    iconThree.innerHTML = '+';
    iconFive.innerHTML = '+';
    iconSix.innerHTML = '+';
  };
});

accordionQuestionFive.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.toggle('accordion-visible');
  accordionAnswerSix.classList.remove('accordion-visible');
  if (iconFive.innerHTML === '+') {
    iconFive.innerHTML = '-';
  } else {
    iconFive.innerHTML = '+';
  };
  if (iconOne.innerHTML === '-' || iconTwo.innerHTML === '-' || iconThree.innerHTML === '-' || iconFour.innerHTML === '-' || iconSix.innerHTML === '-') {
    iconOne.innerHTML = '+';
    iconTwo.innerHTML = '+';
    iconThree.innerHTML = '+';
    iconFour.innerHTML = '+';
    iconSix.innerHTML = '+';
  };
});

accordionQuestionSix.addEventListener('click', () => {
  accordionAnswerOne.classList.remove('accordion-visible');
  accordionAnswerTwo.classList.remove('accordion-visible');
  accordionAnswerThree.classList.remove('accordion-visible');
  accordionAnswerFour.classList.remove('accordion-visible');
  accordionAnswerFive.classList.remove('accordion-visible');
  accordionAnswerSix.classList.toggle('accordion-visible');
  if (iconSix.innerHTML === '+') {
    iconSix.innerHTML = '-';
  } else {
    iconSix.innerHTML = '+';
  };
  if (iconOne.innerHTML === '-' || iconTwo.innerHTML === '-' || iconThree.innerHTML === '-' || iconFour.innerHTML === '-' || iconFive.innerHTML === '-') {
    iconOne.innerHTML = '+';
    iconTwo.innerHTML = '+';
    iconThree.innerHTML = '+';
    iconFour.innerHTML = '+';
    iconFive.innerHTML = '+';
  };
});




