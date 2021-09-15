// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question1").onclick = toggle;
document.getElementById("question2").onclick = toggle;
document.getElementById("question3").onclick = toggle;
document.getElementById("question4").onclick = toggle;

const bookBtn = document.getElementById("bookBtn");
const closeBtn = document.getElementById("closeBtn");
const modalForm = document.getElementById("modalForm");

const selectCountry = document.getElementById("selectCountry");
const tel = document.getElementById("tel");

const faqBtn = document.getElementById("faqBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const modalAccordion = document.getElementById("modalAccordion");

const homeBtn = document.getElementById("homeBtn");
const home = document.getElementById("home");

const contactBtn = document.getElementById("contactBtn");
const contactInfo = document.getElementById("contactInfo");

bookBtn.onclick = () => {
  //pop up the form when clicking on Sign Up-btn
  modalForm.style.display = "block";
  document.body.style.overflow = "hidden"; //disable the scrolling on the main page
};

closeBtn.onclick = () => {
  //close the form
  modalForm.style.display = "none";
  document.body.style.overflow = "auto"; //enable the scrolling on the main page
};

selectCountry.onchange = () => {
  //select country and autofill the country code"
  tel.value = selectCountry.value;
};

faqBtn.onclick = () => {
  //pop up the faq accordion when clicking on FAQ-btn
  modalAccordion.style.display = "block";
  document.body.style.overflow = "hidden"; //disable the scrolling on the main page
};

closeBtn2.onclick = () => {
  //close the accordion
  modalAccordion.style.display = "none";
  document.body.style.overflow = "auto"; //enable the scrolling on the main page
};

homeBtn.onclick = () => {
  //when clicking home button, scroll to id="home"
  home.scrollIntoView();
};

contactBtn.onclick = () => {
  //when clicking contact button, scroll to id="contactInfo"
  contactInfo.scrollIntoView();
};
