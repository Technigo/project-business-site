const accordionHeader1 = document.getElementById("accordion-header1");
const accordionHeader2 = document.getElementById("accordion-header2");
const accordionHeader3 = document.getElementById("accordion-header3");
const accordionHeader4 = document.getElementById("accordion-header4");
const accordionHeader5 = document.getElementById("accordion-header5");

accordionHeader1.onclick = () => {
  accordionHeader1.nextElementSibling.classList.toggle("active");

  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");
};

accordionHeader2.onclick = () => {
  accordionHeader2.nextElementSibling.classList.toggle("active");

  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");
};

accordionHeader3.onclick = () => {
  accordionHeader3.nextElementSibling.classList.toggle("active");

  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");
};

accordionHeader4.onclick = () => {
  accordionHeader4.nextElementSibling.classList.toggle("active");

  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");
};

accordionHeader5.onclick = () => {
  accordionHeader5.nextElementSibling.classList.toggle("active");

  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
};
