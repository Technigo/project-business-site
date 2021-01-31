
 // Accordion FAQ //

 const accordionHeaderOne = document.getElementById("accordion-headerOne");
const accordionHeaderTwo = document.getElementById("accordion-headerTwo");
const accordionHeaderThree = document.getElementById("accordion-headerThree");
const accordionHeaderFour = document.getElementById("accordion-headerFour");

accordionHeaderOne.addEventListener("click", () => {
  accordionHeaderOne.classList.toggle("active");
  accordionHeaderTwo.classList.remove("active");
  accordionHeaderThree.classList.remove("active");
  accordionHeaderFour.classList.remove("active");

});

accordionHeaderTwo.addEventListener("click", () => {
  accordionHeaderOne.classList.remove("active");
  accordionHeaderTwo.classList.toggle("active");
  accordionHeaderThree.classList.remove("active");
  accordionHeaderFour.classList.remove("active");

});

accordionHeaderThree.addEventListener("click", () => {
  accordionHeaderOne.classList.remove("active");
  accordionHeaderTwo.classList.remove("active");
  accordionHeaderThree.classList.toggle("active");
  accordionHeaderFour.classList.remove("active");

});

accordionHeaderFour.addEventListener("click", () => {
  accordionHeaderOne.classList.remove("active");
  accordionHeaderTwo.classList.remove("active");
  accordionHeaderThree.classList.remove("active");
  accordionHeaderFour.classList.toggle("active");
  
});
