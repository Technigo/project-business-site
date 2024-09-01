document.addEventListener("DOMContentLoaded", function () {
  /* ****************************************************************
  Add classes to the hero input form for 
  when a input is focused and not focused
  **************************************************************** */

  const inputs = document.querySelectorAll(".hero__form input");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      inputs.forEach((otherInput) => {
        otherInput.parentElement.classList.toggle(
          "is-not-focused",
          otherInput !== input
        );
      });
      input.parentElement.classList.add("is-focused");
    });

    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("is-focused");
      inputs.forEach((otherInput) => {
        otherInput.parentElement.classList.remove("is-not-focused");
      });
    });
  });

  /* ****************************************************************
  Trigger class .is-open on the menu when the user clicks it
  **************************************************************** */

  const navLink = document.querySelector(".page-header__nav__link");
  const menu = document.querySelector(".page-header__menu");

  navLink.addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("is-open");
  });

  document.addEventListener("click", function (event) {
    // Check if the click was outside the menu
    if (!menu.contains(event.target) && !navLink.contains(event.target)) {
      navLink.classList.remove("is-open");
    }
  });

  /* ****************************************************************
  Filter list of ads based on their category
  **************************************************************** */

  const categorySelect = document.getElementById("category");
  const ads = document.querySelectorAll(".ad");

  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    ads.forEach((ad) => {
      if (
        selectedCategory === "all" ||
        ad.getAttribute("data-category") === selectedCategory
      ) {
        ad.classList.remove("is-hidden");
      } else {
        ad.classList.add("is-hidden");
      }
    });
  });

  /* ****************************************************************
  Add class to header when the user has scrolled. Remove again when reaching the top.
  **************************************************************** */

  const header = document.querySelector(".page-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 100);
  });
});
