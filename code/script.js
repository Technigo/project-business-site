// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
document.getElementById('form').onsubmit = event => {
  event.preventDefault()

  const inputValue = document.getElementById('first-name').value

  const thankYouMsg = `Thank you ${inputValue[0].toUpperCase()}${inputValue.slice(1)}! We will contact you shortly to discuss your ${form["private-or-business"].value} options.`
  document.getElementById('form').innerText = thankYouMsg;
}

document.querySelectorAll(".question").forEach(question => {
  question.addEventListener("click", () => {
    const accordionContent = question.nextElementSibling;

    question.classList.toggle("active");

    if (question.classList.contains("active")) {
      accordionContent.getElementsByClassName.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
