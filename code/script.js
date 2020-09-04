const FAQHeader1 = document.getElementById('FAQ-Header-1');
const FAQHeader2 = document.getElementById('FAQ-Header-2');
const FAQHeader3 = document.getElementById('FAQ-Header-3');

console.log(FAQHeader1, FAQHeader2, FAQHeader3);
console.dir(FAQHeader1, FAQHeader2, FAQHeader3);

const onFAQ1Click = () => {
  FAQHeader1.nextElementSibling.classList.toggle('active');

  FAQHeader2.nextElementSibling.classList.remove('active');
  FAQHeader3.nextElementSibling.classList.remove('active');
} 

const onFAQ2Click = () => {
  FAQHeader2.nextElementSibling.classList.toggle('active');

  FAQHeader1.nextElementSibling.classList.remove('active');
  FAQHeader3.nextElementSibling.classList.remove('active');
}

const onFAQ3Click =() => {
  FAQHeader3.nextElementSibling.classList.toggle('active');

  FAQHeader1.nextElementSibling.classList.remove('active');
  FAQHeader2.nextElementSibling.classList.remove('active');
}

FAQHeader1.onclick = onFAQ1Click;
FAQHeader2.onclick = onFAQ2Click;
FAQHeader3.onclick = onFAQ3Click;