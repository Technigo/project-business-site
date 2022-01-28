const questions = document.querySelectorAll('.panel-questions');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
 
// Force the video to always autoplay just an extra efford to make sure the video will be rendered.
// (Sometimes the video doesn't always play despite the autoplay attribut in the video tag, the video size is around 1MB, it might also be cache issue)
function onPlayerReady(event) {
  event.target.playVideo();
}

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}