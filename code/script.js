// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
this.classList.toggle("active")
} 

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question-1").onclick = toggle 
const questionOne = document.getElementById("question-1");

document.getElementById("question-2").onclick = toggle
const questionTwo = document.getElementById("question-2");

document.getElementById("question-3").onclick = toggle
const questionThree = document.getElementById("question-3");

document.getElementById("question-4").onclick = toggle
const questionFour = document.getElementById("question-4");

document.getElementById("question-5").onclick = toggle
const questionFive = document.getElementById("question-5");

console.log(this)


/*
document.getElementById("section1").onclick = toggle 

const sectionOne = document.getElementById("section1");

function toggleFirst () {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionOne.classList.remove("active");
  } else {
    this.innerHTML = "➕";
    sectionOne.classList.add("active");
  }
}

document.getElementById("section2").onclick = toggle

const sectionTwo = document.getElementById("section2");

function toggleFirst () {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionTwo.classList.remove("active");
  } else {
    this.innerHTML = "➕";
    sectionTwo.classList.add("active");
  }
}

document.getElementById("section3").onclick = toggle

const sectionThree = document.getElementById("section3");

function toggleFirst () {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionThree.classList.remove("active");
  } else {
    this.innerHTML = "➕";
    sectionThree.classList.add("active");
  }
}

document.getElementById("section4").onclick = toggle

const sectionFour = document.getElementById("section4");

function toggleFirst () {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionFour.classList.remove("active");
  } else {
    this.innerHTML = "➕";
    sectionFour.classList.add("active");
  }
}

document.getElementById("section5").onclick = toggle

const sectionFive = document.getElementById("section5");

function toggleFirst () {
  if (this.innerHTML === "➕") {
    this.innerHTML = "➖";
    sectionFive.classList.remove("active");
  } else {
    this.innerHTML = "➕";
    sectionFive.classList.add("active");
  }
}

document.getElementById("accordion").onclick = toggleFirst


var sec = document.getElementsByClassName("question");
var i;

for (i=0; i < sec.length; i++) {
  sec[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
} */
/*
const questionOne = document.getElementById("question-1");
const questionTwo = document.getElementById("question-2");
const questionThree = document.getElementById("question-3");
const questionFour = document.getElementById("question-4");
const questionFive = document.getElementById("question-5");

const onQuestionClick = (event) => {
  event.target.nextElementSibling.classList.toggle("active");

  const questionList = document.querySelectorAll(".question");
  questionList.forEach(item => {
    if (item !== event.target) {
      item.nextElementSibling.classList.remove("active");
    }
  });
}

questionOne.onclick = onQuestionClick;
questionTwo.onclick = onQuestionClick;
questionThree.onclick = onQuestionClick;
questionFour.onclick = onQuestionClick;
questionFive.onclick = onQuestionClick;
*/