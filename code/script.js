const header = document.querySelector('.header-bar');
const headerOffset = header.offsetTop;

window.onscroll = () => {
    if (headerOffset >= window.pageYOffset) {
        header.classList.remove('sticky');
    } else header.classList.add('sticky');
}

const accordionList = document.querySelectorAll('.accordion-header');

accordionList.forEach(item => {
  item.onclick = (event) => {
    accordionList.forEach(itemNested => {
      if (itemNested !== event.target) {
        itemNested.nextElementSibling.classList.remove('active');
        itemNested.classList.remove('active');
      } else {
        itemNested.nextElementSibling.classList.toggle('active');
        itemNested.classList.toggle('active')
      }
    })
  } 
})