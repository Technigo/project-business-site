// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// const answer1 = document.getElementById("answer1")
// const question1 = document.getElementById("question1")

// question1.onclick () 
// question1.onclick = answer1.classList.toggle("active");

const accordionHeader1 = document.getElementById('question1');
const accordionHeader2 = document.getElementById('question2');
const accordionHeader3 = document.getElementById('question3');
const accordionHeader4 = document.getElementById('question4');

const onAccordion1Click = () => {
    accordionHeader1.nextElementSibling.classList.toggle('active');

    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
};

const onAccordion2Click = () => {
    accordionHeader2.nextElementSibling.classList.toggle('active');

    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
}

const onAccordion3Click = () => {
    accordionHeader3.nextElementSibling.classList.toggle('active');

    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
}

const onAccordion4Click = () => {
  accordionHeader4.nextElementSibling.classList.toggle('active');

  accordionHeader1.nextElementSibling.classList.remove('active');
  accordionHeader2.nextElementSibling.classList.remove('active');
  accordionHeader3.nextElementSibling.classList.remove('active');
}

accordionHeader1.onclick = onAccordion1Click;
accordionHeader2.onclick = onAccordion2Click;
accordionHeader3.onclick = onAccordion3Click;
accordionHeader4.onclick = onAccordion4Click;
