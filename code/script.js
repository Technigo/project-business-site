// accordion
const accordion = document.getElementsByClassName("accordion-question");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) { // means that if `answer` has a height (is open), put it at `null` (close it)
      answer.style.maxHeight = null;
    } else { // otherwise (if `answer` has no height), put the other answers' height at `null` (close them) if there are any
      const active = document.querySelectorAll(".accordion-question.active");
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
  document.getElementById('accordion-wrapper').style.display = 'block';
  document.getElementById('name').innerText = 'Your child\'s name';
  document.getElementById('buttonAdult').innerText = 'Interested in our 18+ services?';
  const greenMedium = document.querySelectorAll('.signup-item .btn, .active, .accordion-answer, footer .footer1, footer .footer1 .btn2, #myBtn');
  for (let i = 0; i < greenMedium.length; i++) {
    greenMedium[i].style.backgroundColor = "#87A93A";
  }
  const greenDark = document.querySelectorAll('html');
  for (let i = 0; i < greenDark.length; i++) {
    greenDark[i].style.color = "#3d4c1a";
  }

}

function displayAdult() {
  document.getElementById('accordion-wrapper').style.display = 'none';
  document.getElementById('name').innerText = 'Your name';
  document.getElementById('buttonAdult').innerText = 'Back';
  const redMedium = document.querySelectorAll('.signup-item .btn, .active, .accordion-answer, footer .footer1, footer .footer1 .btn2, #myBtn');
  for (let i = 0; i < redMedium.length; i++) {
    redMedium[i].style.backgroundColor = "#EA5E5A";
  }
  const darkRed = document.querySelectorAll('html');
  for (let i = 0; i < darkRed.length; i++) {
    darkRed[i].style.color = "#71120f";
  }
}