const accordionDisplay = document.querySelectorAll(".accordion__display");
const accordionExpand = document.querySelectorAll(".accordion__expand");
const accordionButton = document.querySelectorAll(".accordion__button");

// loops through the array of multiple objects of the same class and toggles the .active class on and off on mouseclick //
for (let i = 0; i < accordionDisplay.length; i++) {
  const acc = accordionDisplay[i]; // added local const as I find it easier to follow the code when this is used many times//

  acc.addEventListener("click", () => {
    acc.classList.toggle("active");

    if (acc.classList.contains("active")) {
      // loops trhough the class array and if any other of the same class has the .active class, that will collapse //
      for (let j = 0; j < accordionDisplay.length; j++)
        if (j != i && acc.classList.contains("active")) {
          accordionDisplay[j].classList.remove("active");
          accordionButton[j].textContent = "+";
          accordionDisplay[j].style.backgroundColor = "inherit";
        }
      //if the selected class has .active the expand/collapse button has a minus and display other background color, otherwise + //
      accordionButton[i].textContent = "-";
      acc.style.backgroundColor = "#4C3F88";
    } else {
      accordionButton[i].textContent = "+";
      acc.style.backgroundColor = "inherit";
      // js overwrites css :hover, so putting it here //
      acc.addEventListener("mouseover", () => {
        acc.style.backgroundColor = "#4C3F88";
    });}
  });
}

const navMenu = document.querySelector(".nav__menu");
const navButton = document.querySelector(".nav__button");

// when drop-down menu-button is pressed the menu will be toggled active/inactive //
if (navButton.style.display = "block") {
  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--active");
  })
}