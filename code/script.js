// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
    this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('accordion-section-1').onclick = toggle


const accordionHeader1 = document.getElementById('accordion-section1');
const accordionContent1 = document.getElementById('accordion-content1');

const accordionHeader2 = document.getElementById('accordion-section2');
const accordionContent2 = document.getElementById('accordion-content2');

const accordionHeader3 = document.getElementById('accordion-section3');
const accordionContent3 = document.getElementById('accordion-content3');

const accordionHeader4 = document.getElementById('accordion-section4');
const accordionContent4 = document.getElementById('accordion-content4');

console.log(accordionHeaderOne);

accordionHeader1.addEventListener('click', () => {
    accordionContent.classList.toggle('accordion-selected1');
});

accordionHeader2.addEventListener('click', () => {
    accordionContent.classList.toggle('accordion-selected2');
});

accordionHeader3.addEventListener('click', () => {
    accordionContent.classList.toggle('accordion-selected3');
});

accordionHeader4.addEventListener('click', () => {
    accordionContent.classList.toggle('accordion-selected4');
});