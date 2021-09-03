//FORM: Alert message when filling the form section//
const formInp = document.getElementById('form');//selector for the form
formInp.addEventListener('submit',yourName); //event Listener

function yourName(e) {
  e.preventDefault();
  const name = document.getElementById('fname'); //selector for the input-text name value
  alert(`Thank you for registering with us ${name.value}!`);
  name.value= "";
}

//ACCORDION//

document.getElementById('question1').onclick = show; 
document.getElementById('question2').onclick = show; 
document.getElementById('question3').onclick = show; 
document.getElementById('question4').onclick = show; 
document.getElementById('question5').onclick = show; 

function show() {
this.classList.toggle('active');
}

