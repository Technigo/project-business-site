// ACCORDION
const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionContent1 = document.getElementById('accordion-content-1');

const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionContent2 = document.getElementById('accordion-content-2');

const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionContent3 = document.getElementById('accordion-content-3');

const accordionHeader4 = document.getElementById('accordion-header-4');
const accordionContent4 = document.getElementById('accordion-content-4');

const accordionHeader5 = document.getElementById('accordion-header-5');
const accordionContent5 = document.getElementById('accordion-content-5');

const accordionHeader6 = document.getElementById('accordion-header-6');
const accordionContent6 = document.getElementById('accordion-content-6');

accordionHeader1.addEventListener('click', () => {
  accordionContent1.classList.toggle('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  accordionContent4.classList.remove('accordion-selected');
  accordionContent5.classList.remove('accordion-selected');
  accordionContent6.classList.remove('accordion-selected');
});

accordionHeader2.addEventListener('click', () => {
  accordionContent2.classList.toggle('accordion-selected');
  accordionContent1.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  accordionContent4.classList.remove('accordion-selected');
  accordionContent5.classList.remove('accordion-selected');
  accordionContent6.classList.remove('accordion-selected');
});

accordionHeader4.addEventListener('click', () => {
  accordionContent4.classList.toggle('accordion-selected');
  accordionContent1.classList.remove('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  accordionContent5.classList.remove('accordion-selected');
  accordionContent6.classList.remove('accordion-selected');
});

accordionHeader5.addEventListener('click', () => {
  accordionContent5.classList.toggle('accordion-selected');
  accordionContent1.classList.remove('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  accordionContent4.classList.remove('accordion-selected');
  accordionContent6.classList.remove('accordion-selected');
});

accordionHeader6.addEventListener('click', () => {
  accordionContent6.classList.toggle('accordion-selected');
  accordionContent1.classList.remove('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  accordionContent4.classList.remove('accordion-selected');
  accordionContent5.classList.remove('accordion-selected');
});

accordionHeader3.addEventListener('click', () => {
  accordionContent3.classList.toggle('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent1.classList.remove('accordion-selected');
  accordionContent4.classList.remove('accordion-selected');
  accordionContent5.classList.remove('accordion-selected');
  accordionContent6.classList.remove('accordion-selected');
});