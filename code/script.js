const FAQHeader1 = document.getElementById('FAQ-Header-1');
const FAQHeader1 = document.getElementById('FAQ-Header-2');
const FAQHeader1 = document.getElementById('FAQ-Header-3');

console.log(FAQHeader1, FAQHeader2, FAQHeader3);
console.dir(FAQHeader1, FAQHeader2, FAQHeader3);

FAQHeader1.onclick = () => {
  const FAQAnswerContainer1 = FAQAnswerContainer1.nextElementSibling;
  FAQAnswerContainer1.classList.toggle('active');
}

FAQHeader2.onclick = () => {
  const FAQAnswerContainer1 = FFAQAnswerContainer2.nextElementSibling;
  FAQAnswerContainer2.classList.toggle('active');
}

FAQHeader3.onclick = () => {
  const FAQAnswerContainer2 = FAQAnswerContainer3.nextElementSibling;
  FAQAnswerContainer3.classList.toggle('active');
}