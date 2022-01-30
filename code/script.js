// accordion
const accordion = document.getElementsByClassName('accordion-question');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) { // means that if `answer` has a height (is open), put it at `null` (close it)
      answer.style.maxHeight = null;
    } else { // otherwise (if `answer` has no height), put the other answers' height at `null` (close them) if there are any
      const active = document.querySelectorAll('.accordion-question.active');
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove('active');
        active[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle('active'); // ... and open the answer for the question clicked
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}
// end accordion


// button back to top
//Get the button
const myButton = document.getElementById('myBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
});

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// To toggle in adult mode

const adult = document.getElementById('buttonAdult');

let modeAdult = false;
adult.addEventListener('click', function () {
  modeAdult = !modeAdult;
  if (modeAdult) {
    displayAdult();
  }
  else {
    displayChild();
  }
});


document.addEventListener('DOMContentLoaded', displayChild);

function displayChild() {
  document.getElementById('subtitle').innerText = 'vegetables';
  document.getElementById('name').innerText = 'Your child\'s name';
  document.getElementById('instruction').innerText = 'your child';
  document.getElementById('selectChild').style.display = 'block';
  document.getElementById('selectAdult').style.display = 'none';
  document.getElementById('check').innerText = 'vegetables that your child like';
  document.getElementById('check1').innerText = 'Leafy greens';
  document.getElementById('check2').innerText = 'Root';
  document.getElementById('check3').innerText = 'Squashes';
  document.getElementById('check4').innerText = 'Beans';
  document.getElementById('check5').innerText = 'Fruits';
  document.getElementById('check6').innerText = 'Cruciferous';

  document.getElementById('buttonSubmit').innerText = 'Please register my child!';
  document.getElementById('questionBusiness').innerText = 'grocery store';
  document.getElementById('answerWho').innerText = 'your child';
  document.getElementById('answerType').innerText = 'vegetables';
  document.getElementById('questionType').innerText = 'vegetables';
  document.getElementById('relatedType').innerText = 'vegetable';


  document.getElementById('buttonAdult').innerText = 'Interested in our 18+ services?';
  
  const greenMedium = document.querySelectorAll('.signup-item .btn, .accordion-answer, footer .footer1, footer .footer1 .btn2, #myBtn');
  for (let i = 0; i < greenMedium.length; i++) {
    greenMedium[i].style.backgroundColor = '#87A93A';
  }
  const greenDark = document.querySelectorAll('html');
  for (let i = 0; i < greenDark.length; i++) {
    greenDark[i].style.color = '#3d4c1a';
  }

  const buttonHover = document.querySelectorAll('#buttonSubmit, #buttonAdult, #myBtn');

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('mouseover', function (eventB) {
      eventB.target.style.backgroundColor = '#3d4c1a';
    }, false);
  }

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('mouseout', function (eventB) {
      eventB.target.style.backgroundColor = '#87A93A';
    }, false);
  }

}

function displayAdult() {
  document.getElementById('subtitle').innerText = 'fruits';
  document.getElementById('name').innerText = 'Your name';
  document.getElementById('instruction').innerText = 'you';
  document.getElementById('selectChild').style.display = 'none';
  document.getElementById('selectAdult').style.display = 'block';
  document.getElementById('check').innerText = 'fruits that interest you';
  document.getElementById('check1').innerText = 'Banana';
  document.getElementById('check2').innerText = 'Cherry';
  document.getElementById('check3').innerText = 'Strawberry';
  document.getElementById('check4').innerText = 'Pomegranate';
  document.getElementById('check5').innerText = 'Peach';
  document.getElementById('check6').innerText = 'Papaya';

  document.getElementById('buttonSubmit').innerText = 'Please register me!';
  document.getElementById('questionBusiness').innerText = 'sex shop';
  document.getElementById('answerWho').innerText = 'yourself alone';
  document.getElementById('answerType').innerText = 'fruits';
  document.getElementById('questionType').innerText = 'fruits';
  document.getElementById('relatedType').innerText = 'fruit';


  document.getElementById('buttonAdult').innerText = 'Back to our child services';
  const redMedium = document.querySelectorAll('.signup-item .btn, .accordion-answer, footer .footer1, footer .footer1 .btn2, #myBtn');
  for (let i = 0; i < redMedium.length; i++) {
    redMedium[i].style.backgroundColor = '#EA5E5A';
  }
  const darkRed = document.querySelectorAll('html');
  for (let i = 0; i < darkRed.length; i++) {
    darkRed[i].style.color = '#71120f';
  }

  const buttonHover = document.querySelectorAll('#buttonSubmit, #buttonAdult, #myBtn');

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('mouseover', function (eventB) {
      eventB.target.style.backgroundColor = '#71120f';
    }, false);
  }

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('mouseout', function (eventB) {
      eventB.target.style.backgroundColor = '#EA5E5A';
    }, false);
  }
}