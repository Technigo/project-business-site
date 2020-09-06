const accordionHeader1 = document.getElementById("accordion-header1");
const accordionHeader2 = document.getElementById("accordion-header2");
const accordionHeader3 = document.getElementById("accordion-header3");
const accordionHeader4 = document.getElementById("accordion-header4");
const accordionHeader5 = document.getElementById("accordion-header5");

accordionHeader1.onclick = () => {
  // Add class .active to expand / collapse text-container
  accordionHeader1.nextElementSibling.classList.toggle("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");

  // Add class .active to animate animate plus sign in header
  accordionHeader1.classList.toggle("active");
  accordionHeader2.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader4.classList.remove("active");
  accordionHeader5.classList.remove("active");
};

accordionHeader2.onclick = () => {
  // Add class .active to expand / collapse text-container
  accordionHeader2.nextElementSibling.classList.toggle("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");

  // Add class .active to animate animate plus sign in header
  accordionHeader2.classList.toggle("active");
  accordionHeader1.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader4.classList.remove("active");
  accordionHeader5.classList.remove("active");
};

accordionHeader3.onclick = () => {
  // Add class .active to expand / collapse text-container
  accordionHeader3.nextElementSibling.classList.toggle("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");

  // Add class .active to animate animate plus sign in header
  accordionHeader3.classList.toggle("active");
  accordionHeader1.classList.remove("active");
  accordionHeader2.classList.remove("active");
  accordionHeader4.classList.remove("active");
  accordionHeader5.classList.remove("active");
};

accordionHeader4.onclick = () => {
  // Add class .active to expand / collapse text-container
  accordionHeader4.nextElementSibling.classList.toggle("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader5.nextElementSibling.classList.remove("active");

  // Add class .active to animate animate plus sign in header
  accordionHeader4.classList.toggle("active");
  accordionHeader1.classList.remove("active");
  accordionHeader2.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader5.classList.remove("active");
};

accordionHeader5.onclick = () => {
  // Add class .active to expand / collapse text-container
  accordionHeader5.nextElementSibling.classList.toggle("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
  accordionHeader4.nextElementSibling.classList.remove("active");

  // Add class .active to animate animate plus sign in header
  accordionHeader5.classList.toggle("active");
  accordionHeader1.classList.remove("active");
  accordionHeader2.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader4.classList.remove("active");
};
