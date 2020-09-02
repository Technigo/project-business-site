const question1 = document.getElementById('button1');
const question2 = document.getElementById('button2');
const question3 = document.getElementById('button3');
const question4 = document.getElementById('button4');

question1.onclick = () => {
  question1.classList.toggle('sign');  /* This 'sign' class is added to be able to style the + and - signs and change background color when button is opened and closed*/
  const panel1 = question1.nextElementSibling;
  panel1.classList.toggle('open');

  const panel2 = question2.nextElementSibling;
  const panel3 = question3.nextElementSibling;
  const panel4 = question4.nextElementSibling;
  panel2.classList.remove('open');
  panel3.classList.remove('open');
  panel4.classList.remove('open');
}

question2.onclick = () => {
  question2.classList.toggle('sign');
  const panel2 = question2.nextElementSibling;
  panel2.classList.toggle('open');

  const panel1 = question1.nextElementSibling;
  const panel3 = question3.nextElementSibling;
  const panel4 = question4.nextElementSibling;
  panel1.classList.remove('open');
  panel3.classList.remove('open');
  panel4.classList.remove('open');
}

question3.onclick = () => {
  question3.classList.toggle('sign');
  const panel3 = question3.nextElementSibling;
  panel3.classList.toggle('open');

  const panel2 = question2.nextElementSibling;
  const panel1 = question1.nextElementSibling;
  const panel4 = question4.nextElementSibling;
  panel2.classList.remove('open');
  panel1.classList.remove('open');
  panel4.classList.remove('open');
}

question4.onclick = () => {
  question4.classList.toggle('sign');
  const panel4 = question4.nextElementSibling;
  panel4.classList.toggle('open');

  const panel2 = question2.nextElementSibling;
  const panel3 = question3.nextElementSibling;
  const panel1 = question1.nextElementSibling;
  panel2.classList.remove('open');
  panel3.classList.remove('open');
  panel1.classList.remove('open');
}