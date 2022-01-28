// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
document.getElementById('form').onsubmit = event => {
  event.preventDefault()

  // console.log('Form submitted')
  // alert('Form submitted')
  const inputValue = document.getElementById('first-name').value

  // document.getElementById('greeting').innerText = 'Hello ' + inputValue
  document.getElementById('form').innerText = `Hello ${inputValue}!`
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
