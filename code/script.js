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
});
