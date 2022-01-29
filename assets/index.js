const inputLabels = document.querySelectorAll(".accordion__header");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const validForm = "form__input--valid";
const invalidForm = "form__input--invalid";

inputLabels.forEach(label => {
  label.addEventListener("click", () => {
    label.classList.toggle("active");
  })
});

nameInput.addEventListener("change", () => {
  if (nameInput.value.match("[a-zA-Z]")) {
    nameInput.className = validForm
  } else {
    nameInput.className = invalidForm
  }
});

emailInput.addEventListener("change", () => {
  if (emailInput.value.match(/^\S+@\S+\.\S+$/)) {
    emailInput.className = validForm
  } else {
    emailInput.className = invalidForm
  }
});

phoneInput.addEventListener("change", () => {
  if (phoneInput.value.match(/^[1-9]\d{2}-\d{3}-\d{4}/)) {
    phoneInput.className = validForm
  } else {
    phoneInput.className = invalidForm
  }
});






