// Get out elements
const player = document.querySelector('.player'); 
const video = document.querySelector('.viewer'); 
const progress = document.querySelector('.progress'); 
const progressBar = document.querySelector('.progress__filled'); 
const toggle = document.querySelector('.toggle'); 
const skipButtons = document.querySelectorAll(`[data-skip]`); 
const ranges = document.querySelectorAll('.player__slider'); 


// build out funtion
function togglePlay() {
  // const method = video.paused ? 'play' : 'pause'; 
  // video[method](); 
  if (video.paused) {
    video.play(); 
  } else {
    video.pause(); 
  }
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip); 
}

function updateButton() {
  const icon = this.pause ? '►' : '❚ ❚'; 
  toggle.textContent = icon; 
  console.log('update the button'); 
}

// hook up the event listeners
video.addEventListener('click', togglePlay); 
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton); 

toggle.addEventListener('click', togglePlay); 

skipButtons.forEach(button => button.addEventListener('click', skip)); 