// Set the date for check in
const checkIn = document.querySelector('#check-in');
const date = new Date();
checkIn.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

// Set the date for check out
const checkOut = document.querySelector('#check-out');
const depart = new Date();
checkOut.value = depart.getFullYear().toString() + '-' + (depart.getMonth() + 1).toString().padStart(2, 0) +
    '-' + depart.getDate().toString().padStart(2, 0)


//Accordion. Toggles between the different headers.
const accordionHeader1 = document.getElementById("accordion-header-1");
const accordionHeader2 = document.getElementById("accordion-header-2");
const accordionHeader3 = document.getElementById("accordion-header-3");
const accordionHeader4 = document.getElementById("accordion-header-4");

accordionHeader1.onclick = () => {
    const accordionTextContainer1 = accordionHeader1.nextElementSibling;
    accordionTextContainer1.classList.toggle('active');
    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
}

accordionHeader2.onclick = () => {
    const accordionTextContainer2 = accordionHeader2.nextElementSibling;
    accordionTextContainer2.classList.toggle('active');
    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
}

accordionHeader3.onclick = () => {
    const accordionTextContainer3 = accordionHeader3.nextElementSibling;
    accordionTextContainer3.classList.toggle('active');
    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader4.nextElementSibling.classList.remove('active');
}

accordionHeader4.onclick = () => {
    const accordionTextContainer4 = accordionHeader4.nextElementSibling;
    accordionTextContainer4.classList.toggle('active');
    accordionHeader1.nextElementSibling.classList.remove('active');
    accordionHeader2.nextElementSibling.classList.remove('active');
    accordionHeader3.nextElementSibling.classList.remove('active');
}