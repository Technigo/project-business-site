//defining variable
const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

//function; for every variable toggle the class active when clicking on header
accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    });
});