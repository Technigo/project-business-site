const accordionDisplay = document.querySelectorAll(".accordion__display");
const accordionExpand = document.querySelectorAll(".accordion__expand");
const accordionButton = document.querySelectorAll(".accordion__button");

//loops through the array of multiple objects of the same class and toggles the --selected class on and off on mouseclick //
for (let i = 0; i < accordionDisplay.length; i++) {
  accordionDisplay[i].addEventListener("click", () => {
    accordionExpand[i].classList.toggle("accordion__expand--selected");
    //if the selected class is active the expand/collapse button has a minus, otherwise + //
    if (accordionExpand[i].classList.contains("accordion__expand--selected")) {
      accordionButton[i].textContent = "-";
      accordionDisplay[i].style.backgroundColor = "#4C3F88";
    } else {
      accordionButton[i].textContent = "+";
      accordionDisplay[i].style.backgroundColor = "inherit";
    }
    //loops trhough the class array and if any other object has the expand--selected active, that will collapse//
    for (let j = 0; j < accordionDisplay.length; j++)
      if (j != i && accordionExpand[j].classList.contains("accordion__expand--selected") && (accordionExpand[i].classList.contains("accordion__expand--selected"))) {
        accordionExpand[j].classList.remove("accordion__expand--selected");
        accordionButton[j].textContent = "+";
        accordionDisplay[j].style.backgroundColor = "inherit";
      }
    else {
      console.log("nothing applied")
    }
  });
}

const navMenu = document.querySelector(".nav__menu");
const navButton = document.querySelector(".nav__button");

if (navButton.style.display = "block") {
  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--active");
  })
}