// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
 // this.classList.toggle("active")
//}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle//commented out to check later

const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionContent1 = document.getElementById('accordion-content-1')

const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionContent2 = document.getElementById('accordion-content-2')

const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionContent3 = document.getElementById('accordion-content-3')

const accordionHeader4 = document.getElementById('accordion-header-4');
const accordionContent4 = document.getElementById('accordion-content-4')

accordionHeader1.addEventListener('click', () => {
    accordionContent1.classList.add('accordion-selected');
    accordionContent2.classList.remove('accordion-selected');
    accordionContent3.classList.remove('accordion-selected');
    accordionContent4.classList.remove('accordion-selected');
});

accordionHeader2.addEventListener('click', () => {
   accordionContent1.classList.remove('accordion-selected');
   accordionContent2.classList.add('accordion-selected');
   accordionContent3.classList.remove('accordion-selected');
   accordionContent4.classList.remove('accordion-selected');
});

accordionHeader3.addEventListener('click', () => {
   accordionContent1.classList.remove('accordion-selected');
   accordionContent2.classList.remove('accordion-selected');
   accordionContent3.classList.add('accordion-selected');
   accordionContent4.classList.remove('accordion-selected');
});

accordionHeader4.addEventListener('click', () => {
   accordionContent1.classList.remove('accordion-selected');
   accordionContent2.classList.remove('accordion-selected');
   accordionContent3.classList.remove('accordion-selected');
   accordionContent4.classList.add('accordion-selected');
});