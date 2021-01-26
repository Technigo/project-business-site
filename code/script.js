const accordionHeader = document.getElementById("accordion-header");
const accordionContent = document.getElementById("accordion-content");
console.log(accordionHeader);

accordionHeader.addEventListener("click", () => {
    accordionContent.classList.add("accordion-selected");
})