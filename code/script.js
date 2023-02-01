// Section 1 toggle
const elementToToggle = document.querySelector("#section1");
const toggleHTMLElementClass = () => {
  elementToToggle.classList.toggle("active");
};
// Section 2 toggle
  elementToToggle.onclick = toggleHTMLElementClass;
const elementToToggle2 = document.querySelector("#section2");
const toggleHTMLElementClass2 = () => {
  elementToToggle2.classList.toggle("active");
}
  elementToToggle2.onclick = toggleHTMLElementClass2;

//Section 3 toggle
const elementToToggle3 = document.querySelector("#section3");

const toggleHTMLElementClass3 = () => {
  elementToToggle3.classList.toggle("active");
}
  elementToToggle3.onclick = toggleHTMLElementClass3;

//Section 4 toggle
const elementToToggle4 = document.querySelector("#section4");

const toggleHTMLElementClass4 = () => {
  elementToToggle4.classList.toggle("active");
}
  elementToToggle4.onclick = toggleHTMLElementClass4;