const accordionDisplay = document.querySelectorAll(".accordion-section__display");
const navMenu = document.querySelector(".nav-wrapper__menu");
const navButton = document.querySelector(".nav-wrapper__button");


// loops through the array of multiple objects of the same class and toggles the .active class on and off on mouseclick //
for (let i = 0; i < accordionDisplay.length; i++) {
  const acc = accordionDisplay[i];
  accordionExpand(acc, i)
}

// when drop-down menu-button is pressed the menu will be toggled active/inactive //
if (navButton.style.display = "block") {
  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-wrapper__menu--active")
    if (navMenu.classList.contains("nav-wrapper__menu--active")) {
      navButton.style.backgroundColor = "#4C3F88";
    } else {
      navButton.style.backgroundColor = "#ffffff00";
    }
  })
}

// function for expanding and collapsing accordion on mouseclick//
function accordionExpand(acc, i) {
  acc.addEventListener("click", () => {
    acc.classList.toggle("accordion-section__display--active")
    if (acc.classList.contains("accordion-section__display--active")) {
      accordionCollapse(i)
    }
  })
}

// loops trhough the class array and if any other of the same class has the .active class, that will collapse //
const accordionCollapse = (i) => {
  for (let j = 0; j < accordionDisplay.length; j++) {
    if (j != i && accordionDisplay[j].classList.contains("accordion-section__display--active")) {
      accordionDisplay[j].classList.remove("accordion-section__display--active")
    }
  }
}