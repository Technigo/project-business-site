

const headerAll = document.querySelectorAll(".accordion-question");

headerAll.forEach(headerAll => {
  headerAll.addEventListener("click", event => {
    const activeHeader = document.querySelector(".accordion-question.active");
    if (activeHeader && activeHeader !== headerAll) {
      activeHeader.classList.toggle("active");
    }

    headerAll.classList.toggle("active");
  });
});

