const accordionHeaderOne = document.getElementById("accordion-header-1");
const accordionContentOne = document.getElementById("accordion-content-1");

const accordionHeaderTwo = document.getElementById("accordion-header-2");
const accordionContentTwo = document.getElementById("accordion-content-2");

const accordionHeaderThree = document.getElementById("accordion-header-3");
const accordionContentThree = document.getElementById("accordion-content-3");

const accordionHeaderFour = document.getElementById("accordion-header-4");
const accordionContentFour = document.getElementById("accordion-content-4");






accordionHeaderOne.addEventListener('click', () => {
    accordionContentOne.classList.toggle("accordion-selected")
});

accordionHeaderTwo.addEventListener('click', () => {
    accordionContentTwo.classList.toggle("accordion-selected")
});

accordionHeaderThree.addEventListener('click', () => {
    accordionContentThree.classList.toggle("accordion-selected")
});

accordionHeaderFour.addEventListener('click', () => {
    accordionContentFour.classList.toggle("accordion-selected")
});