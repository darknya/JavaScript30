const video = document.querySelector('.player_video');
const player_controls = document.querySelector('.player_controls');
const play_button = player_controls.querySelector('.play_button');
const ranges = player_controls.querySelectorAll('.player_slider');
const progress = player_controls.querySelector('.progress');
const progress_filled = player_controls.querySelector('.progress_filled');
const skip_buttons = player_controls.querySelectorAll('.skip_button');

function playToggle() {
  let method = video.paused ? 'play' : 'pause';
  video[method]();
  // console.dir(video);
}
function updatePlayButton(e) {
  let icon = this.paused ? '►' : '❚❚';
  play_button.textContent = icon;
}
function rangeUpdate() {
  video[this.name] = this.value;
}
function timeupdateHandler() {
  let percent = (video.currentTime / video.duration) * 100;
  progress_filled.style.flexBasis = `${percent}%`;
}
function progressHandler(e) {
  let clickTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = clickTime;
}

function videoSkipHandler() {
  let skipSec = this.dataset.skip *1;
  video.currentTime += skipSec;
}

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', timeupdateHandler);

ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
play_button.addEventListener('click', playToggle);

let isMouseDown = false;
progress.addEventListener('click', progressHandler);
progress.addEventListener('mousemove', (e) => !isMouseDown || progressHandler(e));
progress.addEventListener('mousedown', () => isMouseDown = true);
window.addEventListener('mouseup', () => isMouseDown = false);

skip_buttons.forEach(skip_button => skip_button.addEventListener('click', videoSkipHandler));