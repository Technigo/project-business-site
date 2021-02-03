const section1 = document.getElementById('section1');
const answer1 = document.getElementById('answer1');

const section2 = document.getElementById('section2');
const answer2 = document.getElementById('answer2');

const section3 = document.getElementById('section3');
const answer3 = document.getElementById('answer3');



console.log('section1')
console.log('section2')
console.log('section3')
console.log('answer1')
console.log('answer2')
console.log('answer3')

// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle1() {
    answer1.classList.toggle('answer-selected')
}

function toggle2() {
    answer2.classList.toggle('answer-selected')
}

function toggle3() {
    answer3.classList.toggle('answer-selected')
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle1
document.getElementById('section2').onclick = toggle2
document.getElementById('section3').onclick = toggle3