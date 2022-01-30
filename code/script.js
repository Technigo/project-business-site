// Load message after signing up
const form = document.getElementById("form")
const message = document.getElementById("submit-form")

form.onsubmit = event => {
  event.preventDefault();
  message.style.display = "block";
  form.style.display = "none";
}

// Converts key value pairs to array of elements with the class name 'question'
const headers = Object.values(document.getElementsByClassName('question'));

// Call a function which will be executed when the element is clicked.
headers.forEach((header) => {
  header.addEventListener('click', () => {
    header.classList.toggle('open');
  })
 })