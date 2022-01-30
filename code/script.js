// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
document.getElementById('form').onsubmit = event => {
  event.preventDefault()

  // Getting the first name with capital letter with perhaps some 'unnecessary' code to make it a little easier to read
  const firstName = document.getElementById('first-name').value
  const firstLetterToUpperCase = firstName[0].toUpperCase()
  const restOfName = firstName.slice(1)
  const name = firstLetterToUpperCase + restOfName

  //getting the choice of insurance type from the form
  const insuranceType = form["private-or-business"].value

  const thankYouMsg = `Thank you ${name}! We will contact you shortly to discuss your ${insuranceType} options.`

  document.getElementById('form').innerHTML = thankYouMsg;
}


//function to make the accordion open and close by toggling the active class, stolen almost entirely from youtube
document.querySelectorAll(".question").forEach(question => {
  question.addEventListener("click", () => {
    const accordionContent = question.nextElementSibling;

    question.classList.toggle("active");

    if (question.classList.contains("active")) {
      accordionContent.getElementsByClassName.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
