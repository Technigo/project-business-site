// Get the video
var videoPlayer = document.getElementById("my-video");

// Get the button
var playPauseBtn = document.getElementById("my-play-button");

// JavaScript to handle video playlist and play/pause functionality
const videoPlayer = document.getElementById('my-video');
const playPauseBtn = document.getElementById('my-play-button');
let isPlaying = true;

function myFunction() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
        isPlaying = true;
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    }
}

videoPlayer.addEventListener('ended', () => {
    if (isPlaying) {
        videoPlayer.currentTime = 0;
        videoPlayer.play();
    }
});
