
const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionHeader3 = document.getElementById('accordion-header-3');

console.log(accordionHeader1, accordionHeader2, accordionHeader3);
console.dir(accordionHeader1, accordionHeader2, accordionHeader3);

accordionHeader1.onclick = () => {
  const  accordionTextContainer1 = accordionHeader1.nextElementSibling;
  accordionTextContainer1.classList.toggle('active');
  
  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  accordionTextContainer2.classList.remove('active');
}

accordionHeader2.onclick = () => {
  const  accordionTextContainer2 = accordionHeader2.nextElementSibling;
  accordionTextContainer2.classList.toggle('active');

  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
}