const accordionSection1 = document.getElementById('accordion-section1');
const accordionSection1Content = document.getElementById('accordion-section1-content');

const accordionSection2 = document.getElementById('accordion-section2');
const accordionSection2Content = document.getElementById('accordion-section2-content');

const accordionSection3 = document.getElementById('accordion-section3');
const accordionSection3Content = document.getElementById('accordion-section3-content');

const accordionSection4 = document.getElementById('accordion-section4');
const accordionSection4Content = document.getElementById('accordion-section4-content');

accordionSection1.addEventListener('click', () => {
    accordionSection1Content.classList.toggle('accordion-selected');
    accordionSection2Content.classList.remove('accordion-selected');
    accordionSection3Content.classList.remove('accordion-selected');
    accordionSection4Content.classList.remove('accordion-selected');
});

accordionSection2.addEventListener('click', () => {
    accordionSection1Content.classList.remove('accordion-selected');
    accordionSection2Content.classList.toggle('accordion-selected');
    accordionSection3Content.classList.remove('accordion-selected');
    accordionSection4Content.classList.remove('accordion-selected');
});

accordionSection3.addEventListener('click', () => {
    accordionSection1Content.classList.remove('accordion-selected');
    accordionSection2Content.classList.remove('accordion-selected');
    accordionSection3Content.classList.toggle('accordion-selected');
    accordionSection4Content.classList.remove('accordion-selected');
});

accordionSection4.addEventListener('click', () => {
    accordionSection1Content.classList.remove('accordion-selected');
    accordionSection2Content.classList.remove('accordion-selected');
    accordionSection3Content.classList.remove('accordion-selected');
    accordionSection4Content.classList.toggle('accordion-selected');
});

