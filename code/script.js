//function toggle() {
// this.classList.toggle("active")
//}
//Selects an HTML element, and calls a function which will be executed when the element is clicked.

//const open = document.getElementById('section');

const openSection1 = document.getElementById('section1');
openSection1.onclick= () => {
  openSection1.classList.toggle('active')
};

const openSection2 = document.getElementById('section2')
openSection2.onclick= () => {
  openSection2.classList.toggle('active')
};

const openSection3 = document.getElementById('section3')
openSection3.onclick= () => {
  openSection3.classList.toggle('active')
};

const openSection4 = document.getElementById('section4')
openSection4.onclick= () => {
  openSection4.classList.toggle('active')
};

const openSection5 = document.getElementById('section5')
openSection5.onclick= () => {
  openSection5.classList.toggle('active')
};
