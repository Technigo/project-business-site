let accordionHeader = document.getElementById("accordionHeader");
let accordionContent = document.getElementById("accordionContent");

let accordionHeaderTwo = document.getElementById("accordionHeaderTwo");
let accordionContentTwo = document.getElementById("accordionContentTwo");

let accordionHeaderThree = document.getElementById("accordionHeaderThree")
let accordionContentThree = document.getElementById("accordionContentThree")

console.log(accordionHeader);
console.log(accordionContent);
console.log(accordionHeaderTwo);

accordionHeader.addEventListener("click", () => {
 accordionContent.classList.toggle("active"); 
})

accordionHeaderTwo.addEventListener("click", () => {
accordionContentTwo.classList.toggle("activeTwo");
})

accordionHeaderThree.addEventListener("click", () => {
    accordionContentThree.classList.toggle("activeThree");
    })
