const inputLabels = document.querySelectorAll(".input__header");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");

inputLabels.forEach(label => {
  label.addEventListener("click", () => {
    label.classList.toggle("active");
  })
});

nameInput.addEventListener("change", () => {
  if (nameInput.value.match("[a-zA-Z]")) {
    nameInput.classList.add('form__input--valid');
    nameInput.classList.remove('form__input--invalid');
  } else {
    nameInput.classList.add('form__input--invalid');
    nameInput.classList.remove('form__input--valid');
  }
});

emailInput.addEventListener("change", () => {
  if (emailInput.value.match(/^\S+@\S+\.\S+$/)) {
    emailInput.classList.add('form__input--valid');
    emailInput.classList.remove('form__input--invalid');
  } else {
    emailInput.classList.add('form__input--invalid');
    emailInput.classList.remove('form__input--valid');
  }
});

phoneInput.addEventListener("change", () => {
  if (phoneInput.value.match(/^[1-9]\d{2}-\d{3}-\d{4}/)) {
    phoneInput.classList.add('form__input--valid');
    phoneInput.classList.remove('form__input--invalid');
  } else {
    phoneInput.classList.add('form__input--invalid');
    phoneInput.classList.remove('form__input--valid');
  }
});






