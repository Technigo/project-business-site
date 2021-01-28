const header1 = document.getElementById("header1");
const content1 = document.getElementById('content1');

const header2 =document.getElementById("header2");
const content2 = document.getElementById('content2');

const header3 = document.getElementById("header3");
const content3 = document.getElementById('content3');

const header4 = document.getElementById("header4");
const content4 = document.getElementById('content4');


header1.addEventListener('click', () => {
    content1.classList.toggle("content-selected");
});

header2.addEventListener('click', () => {
    content2.classList.toggle("content-selected");
});

header3.addEventListener('click', () => {
    content3.classList.toggle("content-selected");
});

header4.addEventListener('click', () => {
    content4.classList.toggle("content-selected");
});

