let accordionDisplay = document.querySelectorAll(".accordion__display");
let accordionExpand = document.querySelectorAll(".accordion__expand");
let accordionButton = document.querySelectorAll(".accordion__button");

//loops through the array of multiple objects of the same class and toggles the --selected class on and off on mouseclick //
for (let i = 0; i < accordionDisplay.length; i++) {
  accordionDisplay[i].addEventListener("click", () => {
    accordionExpand[i].classList.toggle("accordion__expand--selected");
    //if the selected class is active the expand/collapse button has a minus, otherwise + //
    if(accordionExpand[i].classList.contains("accordion__expand--selected")){
      accordionButton[i].textContent="-";}
    else {
        accordionButton[i].textContent="+";
      }   
  });
}

