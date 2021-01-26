let accordionDisplay = document.getElementsByClassName("accordion__display");
let accordionExpand = document.getElementsByClassName("accordion__expand");
let accordionButton = document.getElementsByClassName("accordion__button");

for (let i = 0; i < accordionDisplay.length; i++) {
  accordionDisplay[i].addEventListener("click", () => {
    accordionExpand[i].classList.toggle("accordion__expand--selected");
    
    if(accordionExpand[i].classList.contains("accordion__expand--selected")){
      accordionButton[i].textContent="-";}
    else {
        accordionButton[i].textContent="+";
      }
    
  });
}

