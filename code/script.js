// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
    this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('accordion-section-1').onclick = toggle


const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionContent1 = document.getElementById('accordion-content-1');

const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionContent2 = document.getElementById('accordion-content-2');

const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionContent3 = document.getElementById('accordion-content-3');

console.log(accordionHeaderOne);

accordionHeade1.addEventListener('click', () => {
    accordionContent1.classList.toggle('accordion-selected');
});

accordionHeader2.addEventListener('click', () => {
    accordionContent2.classList.toggle('accordion-selected');
});

accordionHeader3.addEventListener('click', () => {
    accordionContent3.classList.toggle('accordion-selected');
});