// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const accordionHeader1 = document.getElementById('accordion-header1');
const accordionHeader2 = document.getElementById('accordion-header2');
const accordionHeader3 = document.getElementById('accordion-header3');


accordionHeader1.onclick = () => {
  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  accordionTextContainer1.classList.toggle('active');


}
accordionHeader2.onclick = () => {
  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  accordionTextContainer2.classList.toggle('active');
  accordionTextContainer2.classList.toggle('color-dark');

}
accordionHeader3.onclick = () => {
  const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  accordionTextContainer3.classList.toggle('active');

}