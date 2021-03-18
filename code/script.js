const accordionHeader = document.getElementById("accordionHeader")
const accordionContent = document.getElementById("accordionContent")

const accordionHeaderTwo = document.getElementById("accordionHeaderTwo")
const accordionContentTwo = document.getElementById("accordionContentTwo")

const accordionHeaderThree = document.getElementById("accordionHeaderThree")
const accordionContentThree = document.getElementById("accordionContentThree")

accordionHeader.addEventListener("click", () => {
 accordionContent.classList.toggle("active")
})

accordionHeaderTwo.addEventListener("click", () => {
accordionContentTwo.classList.toggle("activeTwo")
})

accordionHeaderThree.addEventListener("click", () => {
    accordionContentThree.classList.toggle("activeThree")
})
