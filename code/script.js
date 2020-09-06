



// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionHeader3 = document.getElementById('accordion-header-3');




const onAccordion1Click = () => {
  accordionHeader1.nextElementSibling.classList.toggle('active');

  accordionHeader2.nextElementSibling.classList.remove('active');
  accordionHeader3.nextElementSibling.classList.remove('active');
};

const onAccordion2Click = () => {
  accordionHeader2.nextElementSibling.classList.toggle('active');

  accordionHeader1.nextElementSibling.classList.remove('active');
  accordionHeader3.nextElementSibling.classList.remove('active');
}

const onAccordion3Click = () => {
  accordionHeader3.nextElementSibling.classList.toggle('active');

  accordionHeader1.nextElementSibling.classList.remove('active');
  accordionHeader2.nextElementSibling.classList.remove('active');
}

accordionHeader1.onclick = onAccordion1Click;
accordionHeader2.onclick = onAccordion2Click;
accordionHeader3.onclick = onAccordion3Click;


