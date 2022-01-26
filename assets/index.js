const inputLabels = document.querySelectorAll(".input__header");

inputLabels.forEach(label => {
  label.addEventListener("click", () => {
    label.classList.toggle("active");
  })
})








