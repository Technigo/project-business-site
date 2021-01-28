function transformSection() {
  last_known_scroll_position = window.scrollY;
  var element = document.getElementById("first-box");
  element.classList.add("transform-sec");
  if (last_known_scroll_position == 0) {
    element.classList.remove("transform-sec");
  }
}

const accordionHeader1 = document.getElementById("accordion-header-1");
const accordionContent1 = document.getElementById("accordion-content-1");

const accordionHeader2 = document.getElementById("accordion-header-2");
const accordionContent2 = document.getElementById("accordion-content-2");

const accordionHeader3 = document.getElementById("accordion-header-3");
const accordionContent3 = document.getElementById("accordion-content-3");

accordionHeader1.addEventListener("click", () => {
  accordionContent1.classList.toggle("accordion-selected");
  accordionContent2.classList.remove("accordion-selected");
  accordionContent3.classList.remove("accordion-selected");
});

accordionHeader2.addEventListener("click", () => {
  accordionContent1.classList.remove("accordion-selected");
  accordionContent2.classList.toggle("accordion-selected");
  accordionContent3.classList.remove("accordion-selected");
});

accordionHeader3.addEventListener("click", () => {
  accordionContent1.classList.remove("accordion-selected");
  accordionContent2.classList.remove("accordion-selected");
  accordionContent3.classList.toggle("accordion-selected");
});
