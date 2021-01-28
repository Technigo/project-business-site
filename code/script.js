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
    accordionContentTwo.classList.remove("accordion-selected")
    accordionContentThree.classList.remove("accordion-selected")
    accordionContentFour.classList.remove("accordion-selected")
});


/* This is the code for the minus sign after clicking on the Question */
accordionHeaderOne.addEventListener('click', () => {
    accordionHeaderOne.classList.toggle("active")
    accordionHeaderTwo.classList.remove("active")
    accordionHeaderThree.classList.remove("active")
    accordionHeaderFour.classList.remove("active")
});






accordionHeaderTwo.addEventListener('click', () => {
    accordionContentOne.classList.remove("accordion-selected")
    accordionContentTwo.classList.toggle("accordion-selected")
    accordionContentThree.classList.remove("accordion-selected")
    accordionContentFour.classList.remove("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderTwo.addEventListener('click', () => {
    accordionHeaderOne.classList.remove("active")
    accordionHeaderTwo.classList.toggle("active")
    accordionHeaderThree.classList.remove("active")
    accordionHeaderFour.classList.remove("active")
});




accordionHeaderThree.addEventListener('click', () => {
    accordionContentOne.classList.remove("accordion-selected")
    accordionContentTwo.classList.remove("accordion-selected")
    accordionContentThree.classList.toggle("accordion-selected")
    accordionContentFour.classList.remove("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderThree.addEventListener('click', () => {
    accordionHeaderOne.classList.remove("active")
    accordionHeaderTwo.classList.remove("active")
    accordionHeaderThree.classList.toggle("active")
    accordionHeaderFour.classList.remove("active")
});



accordionHeaderFour.addEventListener('click', () => {
    accordionContentOne.classList.remove("accordion-selected")
    accordionContentTwo.classList.remove("accordion-selected")
    accordionContentThree.classList.remove("accordion-selected")
    accordionContentFour.classList.toggle("accordion-selected")
});

/* This is the code for the minus sign after clicking on the Question */
accordionHeaderFour.addEventListener('click', () => {
    accordionHeaderOne.classList.remove("active")
    accordionHeaderTwo.classList.remove("active")
    accordionHeaderThree.classList.remove("active")
    accordionHeaderFour.classList.toggle("active")
});