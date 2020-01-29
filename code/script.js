/*** Accordian functionality ***/

const sectionOne = document.getElementById('section1');
const sectionTwo = document.getElementById('section2');
const sectionThree = document.getElementById('section3');

function toggleFirst() {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionOne.classList.remove('folded');
    sectionOne.classList.add('active');
  } else {
    this.innerHTML = '➕';
    sectionOne.classList.remove('active');
    sectionOne.classList.add('folded');

  }
}

function toggleSecond() {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionTwo.classList.remove('folded');
    sectionTwo.classList.add('active');
  } else {
    this.innerHTML = '➕';
    sectionTwo.classList.remove('active');
    sectionTwo.classList.add('folded');

  }
}

function toggleThird() {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionThree.classList.remove('folded');
    sectionThree.classList.add('active');
  } else {
    this.innerHTML = '➕';
    sectionThree.classList.remove('active');
    sectionThree.classList.add('folded');

  }
}

/***  Night Mode Button in footer ***/

function nightTime() {
  document.getElementById('mainId').classList.toggle('nightMode');
  document.getElementById('footerId').classList.toggle('nightMode');
  document.getElementById('night-switch').classList.toggle('footer-button');
  if (this.innerHTML === "Night Mode") {
    this.innerHTML = "Day Mode";
  } else {
    this.innerHTML = "Night Mode";
  }
}

document.getElementById('night-switch').onclick = nightTime





// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("accordion1").onclick = toggleFirst
document.getElementById("accordion2").onclick = toggleSecond
document.getElementById("accordion3").onclick = toggleThird







