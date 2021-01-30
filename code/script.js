const questionHeader1 = document.getElementById("question-header1")
const questionContent1 = document.getElementById("question-content1")

const questionHeader2 = document.getElementById("question-header2")
const questionContent2 = document.getElementById("question-content2")

const questionHeader3 = document.getElementById("question-header3")
const questionContent3 = document.getElementById("question-content3")

const questionHeader4 = document.getElementById("question-header4")
const questionContent4 = document.getElementById("question-content4")

const questionHeader5 = document.getElementById("question-header5")
const questionContent5 = document.getElementById("question-content5")

const questionHeader6 = document.getElementById("question-header6")
const questionContent6 = document.getElementById("question-content6")



questionHeader1.addEventListener('click', () => {
  questionContent1.classList.toggle('question-selected');
  questionContent2.classList.remove('question-selected');
  questionContent3.classList.remove('question-selected');
  questionContent4.classList.remove('question-selected');
  questionContent5.classList.remove('question-selected');
  questionContent6.classList.remove('question-selected');
});



questionHeader2.addEventListener('click', () => {
  questionContent1.classList.remove('question-selected');
  questionContent2.classList.toggle('question-selected');
  questionContent3.classList.remove('question-selected');
  questionContent4.classList.remove('question-selected');
  questionContent5.classList.remove('question-selected');
  questionContent6.classList.remove('question-selected');
});

questionHeader3.addEventListener('click', () => {
  questionContent1.classList.remove('question-selected');
  questionContent2.classList.remove('question-selected');
  questionContent3.classList.toggle('question-selected');
  questionContent4.classList.remove('question-selected');
  questionContent5.classList.remove('question-selected');
  questionContent6.classList.remove('question-selected');
});

questionHeader4.addEventListener('click', () => {
  questionContent1.classList.remove('question-selected');
  questionContent2.classList.remove('question-selected');
  questionContent3.classList.remove('question-selected');
  questionContent4.classList.toggle('question-selected');
  questionContent5.classList.remove('question-selected');
  questionContent6.classList.remove('question-selected');
});

questionHeader5.addEventListener('click', () => {
  questionContent1.classList.remove('question-selected');
  questionContent2.classList.remove('question-selected');
  questionContent3.classList.remove('question-selected');
  questionContent4.classList.remove('question-selected');
  questionContent5.classList.toggle('question-selected');
  questionContent6.classList.remove('question-selected');
});

questionHeader6.addEventListener('click', () => {
  questionContent1.classList.remove('question-selected');
  questionContent2.classList.remove('question-selected');
  questionContent3.classList.remove('question-selected');
  questionContent4.classList.remove('question-selected');
  questionContent5.classList.remove('question-selected');
  questionContent6.classList.toggle('question-selected');
});
