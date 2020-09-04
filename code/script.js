// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

//navbar

document.getElementById("hamburger").onclick = toggle;

function toggle() {
  this.classList.toggle("open");
}

//form

//validate

function validateForm() {
  const firstName = document.forms["myForm"]["firstName"].value;
  const lastName = document.forms["myForm"]["lastName"].value;
  const email = document.forms["myForm"]["email"].value;
  const radio = document.forms["myForm"]["gender"].value;
  const checkbox = document.forms["myForm"]["terms"].checked;

  //got the regexp-code below from https://emailregex.com/
  const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mail.test(email);

  if (firstName === "") {
    document.getElementById("error").innerHTML =
      "Oops! Forgot your first name?";
    console.log("test");
    return false;
  } else if (lastName === "") {
    document.getElementById("error").innerHTML = "Oops! Forgot your last name?";
    return false;
  } else if (email === "") {
    document.getElementById("error").innerHTML = "We need your e-mail!";
    return false;
  } else if (mail.test(email) === false) {
    document.getElementById("error").innerHTML =
      "Check if your e-mail is correct";
    return false;
  } else if (radio === "") {
    document.getElementById("error").innerHTML = "Select a gender!";
    return false;
  } else if (checkbox === false) {
    document.getElementById("error").innerHTML = "You must agree to terms!";
    return false;
  }
}

// accordion

const accordionHeader1 = document.getElementById("accordion-header-1");
const accordionHeader2 = document.getElementById("accordion-header-2");
const accordionHeader3 = document.getElementById("accordion-header-3");

const onAccordion1Click = () => {
  accordionHeader1.classList.toggle("active");
  accordionHeader1.nextElementSibling.classList.toggle("active");

  accordionHeader2.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
};

const onAccordion2Click = () => {
  accordionHeader2.classList.toggle("active");
  accordionHeader2.nextElementSibling.classList.toggle("active");

  accordionHeader1.classList.remove("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader3.classList.remove("active");
  accordionHeader3.nextElementSibling.classList.remove("active");
};

const onAccordion3Click = () => {
  accordionHeader3.classList.toggle("active");
  accordionHeader3.nextElementSibling.classList.toggle("active");

  accordionHeader1.classList.remove("active");
  accordionHeader1.nextElementSibling.classList.remove("active");
  accordionHeader2.classList.remove("active");
  accordionHeader2.nextElementSibling.classList.remove("active");
};

accordionHeader1.onclick = onAccordion1Click;
accordionHeader2.onclick = onAccordion2Click;
accordionHeader3.onclick = onAccordion3Click;

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

// document.getElementById("something").onclick = toggle;

//function toggle() {
// this.classList.toggle("active");
//}
