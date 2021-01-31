function toggle() {
    this.classList.toggle("active");
}

const sektion1 = document.getElementById("section-1");
const answer1 = document.getElementById("answer-1");

const sektion2 = document.getElementById("section-2");
const answer2 = document.getElementById("answer-2");

const sektion3 = document.getElementById("section-3");
const answer3 = document.getElementById("answer-3");

const sektion4 = document.getElementById("section-4");
const answer4 = document.getElementById("answer-4");

console.log("section-1");
console.log("section-2");
console.log("section-3");
console.log("section-4");
console.log("answer-1");
console.log("answer-2");
console.log("answer-3");
console.log("answer-4");

//Just trying to get things to work okey

function toggle1() {
    answer1.classList.toggle("answer-selected");
}

function toggle2() {
    answer2.classList.toggle("answer-selected");
}

function toggle3() {
    answer3.classList.toggle("answer-selected");
}

function toggle4() {
    answer4.classList.toggle("answer-selected");
}

document.getElementById("section-1").onclick = toggle1;
document.getElementById("section-2").onclick = toggle2;
document.getElementById("section-3").onclick = toggle3;
document.getElementById("section-4").onclick = toggle4;