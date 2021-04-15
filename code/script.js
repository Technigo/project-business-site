
//Variable declaration
const accordionHeaderOne = document.getElementById("accordion-header-1")
const accordionContentOne = document.getElementById("accordion-content-1")

const accordionHeaderTwo = document.getElementById("accordion-header-2")
const accordionContentTwo = document.getElementById("accordion-content-2")

const accordionHeaderThree = document.getElementById("accordion-header-3")
const accordionContentThree = document.getElementById("accordion-content-3")

//When clicking the first accordion header
accordionHeaderOne.addEventListener("click",() => {
    accordionContentOne.classList.toggle("accordion-selected")  //toggles the first accordion header
    accordionContentTwo.classList.remove("accordion-selected")  //closes the second accordion header
    accordionContentThree.classList.remove("accordion-selected") //closes the third accordion header
})

//When clicking the second accordion header
accordionHeaderTwo.addEventListener("click",() => {
    accordionContentOne.classList.remove("accordion-selected")
    accordionContentTwo.classList.toggle("accordion-selected")
    accordionContentThree.classList.remove("accordion-selected")
})

//When clicking the third accordion header
accordionHeaderThree.addEventListener("click",() => {
    accordionContentOne.classList.remove("accordion-selected")
    accordionContentTwo.classList.remove("accordion-selected")
    accordionContentThree.classList.toggle("accordion-selected")
})