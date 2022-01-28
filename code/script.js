const questions = document.querySelectorAll('.panel-questions');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
 
// Force the video to always autoplay (it doesn't always play despite the autoplay attribut in the video tag, the video size is around 1MB)
function onPlayerReady(event) {
  event.target.playVideo();
}