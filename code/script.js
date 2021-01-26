function transformSection() {
  last_known_scroll_position = window.scrollY;
  var element = document.getElementById("first-box");
  element.classList.add("transform-sec");
  if (last_known_scroll_position == 0) {
    element.classList.remove("transform-sec");
  }
}
