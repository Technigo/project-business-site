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


/* This is the code for the minus sign after clicking on the Question */
accordionHeaderOne.addEventListener('click', () => {
    accordionHeaderOne.classList.toggle("active")
});






accordionHeaderTwo.addEventListener('click', () => {
    accordionContentTwo.classList.toggle("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderTwo.addEventListener('click', () => {
    accordionHeaderTwo.classList.toggle("active")
});




accordionHeaderThree.addEventListener('click', () => {
    accordionContentThree.classList.toggle("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderThree.addEventListener('click', () => {
    accordionHeaderThree.classList.toggle("active")
});



accordionHeaderFour.addEventListener('click', () => {
    accordionContentFour.classList.toggle("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderFour.addEventListener('click', () => {
    accordionHeaderFour.classList.toggle("active")
});