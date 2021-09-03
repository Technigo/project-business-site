function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("nav").onclick = toggle

// another solution
// const btn = document.getElementById('section1')
// btn.onclick = toggleDrinkMenu

// function toggleDrinkMenu() {
//   console.log ('Hola!') /*only showed in the console*/
//   this.classList.toggle('open')
//   console.log(this)
// }

// const video = document.getElementById('myvideo');

// const WindowWidth = window.innerWidth;

// if (WindowWidth <= 768) {
//     //It is a small screen
//     video.append("<source src='videos/mobile-video.mp4' type='video/mp4'/>");
// } else if (WindowWidth <= 1300) {
//     // Medium screen
//     video.append("<source src='videos/tablet-video.mp4' type='video/mp4'/>")
// } else {
//     //It is a big screen or desktop
//     video.append("<source src='videos/desktop-video.mp4' type='video/mp4'/>");
//     video.append("<poster='photos/desktop-photo.jpg'/>");
// }



