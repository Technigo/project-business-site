var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open")

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

//VIDEO 

var WindowWidth = document.documentElement.clientWidth;

var video = document.getElementById("myvideo");
var smallVideo = document.createElement("source");
var bigVideo = document.createElement("source");


if (WindowWidth < 1200) {
  //It is a small screen
  video.appendChild(smallVideo);
  video.setAttribute("src", "smallvideo.mp4");
  video.setAttribute("type", "video/mp4");
} else {
  //It is a big screen or desktop
  video.appendChild(bigVideo);
  video.setAttribute("src", "video.mp4");
  video.setAttribute("type", "video/mp4");
}