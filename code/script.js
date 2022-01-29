// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

//Improved default code by using for-loop and event listeners
//Selecting all classes with the question selector, looping through them and adding click event listener to each of them
let questionSections = document.querySelectorAll('.question');
for (i = 0; i < questionSections.length; i++){
  questionSections[i].addEventListener('click', toggle);
}

//Adding an automatic page reload after 5s using setTimeOut, and modifying the DOM for confirmation message after submit event 
const submitForm = document.querySelector('form');
const submittedResponse = document.createElement('h1');

  submitForm.addEventListener('submit', e => {
  e.preventDefault();

  submitForm.innerHTML = '';
  submitForm.style.width = '200px';
  submitForm.style.height = '500px';
  submittedResponse.innerHTML = '<span style="display: flex; flex-direction: column; align-items: center;"><p>Thanks for your submit.</p><p>You will be redirected to the landing page in 5s</p></span>';
  submitForm.appendChild(submittedResponse);

  setTimeout(() => {
    location.reload();
  }, 5000)
});