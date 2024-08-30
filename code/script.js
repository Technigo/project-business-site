/* ****************************************************************
Add classes to the hero input form for 
when a input is focused and not focused
**************************************************************** */

const inputs = document.querySelectorAll(".hero__form input");

// Add event listeners to each input field
inputs.forEach((input) => {
  // When the input is focused
  input.addEventListener("focus", function () {
    // Add the 'focused' class to the parent label
    input.parentElement.classList.add("is-focused");

    // Remove 'is-not-focused' class from the focused input
    input.parentElement.classList.remove("is-not-focused");

    // Add 'is-not-focused' class to all other inputs
    inputs.forEach((otherInput) => {
      if (otherInput !== input) {
        otherInput.parentElement.classList.add("is-not-focused");
      }
    });
  });

  // When the input loses focus
  input.addEventListener("blur", function () {
    // Remove the 'focused' class from the parent label
    input.parentElement.classList.remove("is-focused");

    // Remove 'is-not-focused' class from all inputs
    inputs.forEach((otherInput) => {
      otherInput.parentElement.classList.remove("is-not-focused");
    });
  });
});

/* ****************************************************************
Trigger class .is-open on the menu when the user clicks it
**************************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.querySelector(".page-header__nav__link");

  navLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    this.classList.toggle("is-open");
  });
});

/* ****************************************************************
Filter list of ads based on their category
**************************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("category");
  const ads = document.querySelectorAll(".ad");

  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;

    ads.forEach(function (ad) {
      const adCategory = ad.getAttribute("data-category");

      if (selectedCategory === "all" || adCategory === selectedCategory) {
        ad.style.display = "block";
      } else {
        ad.style.display = "none";
      }
    });
  });
});

/* ****************************************************************
  Add class to header when the user has scrolled. Remove again when reaching the top.
**************************************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });
});
