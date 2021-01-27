const accordionDisplay = document.querySelectorAll(".accordion__display");
const accordionButton = document.querySelectorAll(".accordion__button");
const navMenu = document.querySelector(".nav__menu");
const navButton = document.querySelector(".nav__button");


// loops through the array of multiple objects of the same class and toggles the .active class on and off on mouseclick //
for (let i = 0; i < accordionDisplay.length; i++) {
  const acc = accordionDisplay[i];
  //change color on hover //
  accordionHover(acc);
  //expand accordion on mouseclick //
  accordionExpand(acc, i);
}

// when drop-down menu-button is pressed the menu will be toggled active/inactive //
if (navButton.style.display = "block") {
  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--active");
  })
}


// function for expanding and collapsing accordion on mouseclick and also adding some dynamic styling //
function accordionExpand(acc, i) {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    if (acc.classList.contains("active")) {
      accordionCollapse(i);
      //if the selected class has .active the expand/collapse button has a minus and display other background color, otherwise + //
      accordionButton[i].textContent = "-";
      acc.style.backgroundColor = "#4C3F88";
    } else {
      accordionButton[i].textContent = "+";
      acc.style.backgroundColor = "inherit";
    }
  });

  // loops trhough the class array and if any other of the same class has the .active class, that will collapse //
  function accordionCollapse(i) {
    for (let j = 0; j < accordionDisplay.length; j++)
      if (j != i && accordionDisplay[j].classList.contains("active")) {
        accordionDisplay[j].classList.remove("active");
        accordionButton[j].textContent = "+";
        accordionDisplay[j].style.backgroundColor = "inherit";
      }
  }
}

function accordionHover(acc) {
  //change background color when on mouseover of accordion display //
  acc.addEventListener("mouseover", () => {
    acc.style.backgroundColor = "#4C3F88";
  });
  //change back on hover out , but only if .active is not on (it should stay the same color as on hover if active). //
  acc.addEventListener("mouseout", () => {
    if (acc.classList.contains("active")) {
      acc.style.backgroundColor = "#4C3F88";
    } else {
      acc.style.backgroundColor = "inherit";
    }
  });
}