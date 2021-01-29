
const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionHeader4 = document.getElementById('accordion-header-4');

console.log (accordionHeader1, accordionHeader2, accordionHeader3, accordionHeader4);
console.dir (accordionHeader1, accordionHeader2, accordionHeader3, accordionHeader4);

accordionHeader1.onclick = () => {
  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  accordionTextContainer1.classList.toggle ('active');

  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  const accordionTextContainer4 = accordionHeader4.nextElementSibling;
  accordionTextContainer2.classList.remove('active');
  accordionTextContainer3.classList.remove('active');
  accordionTextContainer4.classList.remove('active');
}


accordionHeader2.onclick = () => {
  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  accordionTextContainer2.classList.toggle ('active');

  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  const accordionTextContainer4 = accordionHeader4.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
  accordionTextContainer3.classList.remove('active');
  accordionTextContainer4.classList.remove('active'); 
}
 
   accordionHeader3.onclick = () => {
  const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  accordionTextContainer3.classList.toggle ('active');

  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  const accordionTextContainer4 = accordionHeader4.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
  accordionTextContainer2.classList.remove('active');
  accordionTextContainer4.classList.remove('active');
}

accordionHeader4.onclick = () => {
  const accordionTextContainer4 = accordionHeader4.nextElementSibling;
  accordionTextContainer4.classList.toggle ('active');

  const accordionTextContainer1 = accordionHeader1.nextElementSibling;
  const accordionTextContainer2 = accordionHeader2.nextElementSibling;
  const accordionTextContainer3 = accordionHeader3.nextElementSibling;
  accordionTextContainer1.classList.remove('active');
  accordionTextContainer2.classList.remove('active');
  accordionTextContainer3.classList.remove('active');
} 