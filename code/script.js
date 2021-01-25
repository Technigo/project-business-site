let accordionDisplay = document.getElementsByClassName("accordion__display");
let accordionExpand = document.getElementsByClassName("accordion__expand");

for (let i = 0; i < accordionDisplay.length; i++) {
  accordionDisplay[i].addEventListener("click", () => {
    accordionExpand[i].classList.toggle("accordion__expand--selected");
    
    accordionExpand[i] = this.nextElementSibling;
    if (accordionExpand[i].style.display === "block") {
      this.style.display = "none";
    } else {
      accordionExpand[i].style.display = "block";
    }
  });
}

