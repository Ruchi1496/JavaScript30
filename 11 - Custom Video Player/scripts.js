/* Get out elements */
const player= document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar= progress.querySelector('.progress__filled');
const toggle= player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges=player.querySelectorAll('.player__slider');

/*Build our functions */
function togglePlay(){
  if(video.paused){ // paused is a property on the video tag
    video.play();
  }else{
    video.pause();
  }
}

function updateButton(){
  const icon=this.paused ? '►' : '❚ ❚';
  toggle.textContent=icon;
}
function skip(){
  video.currentTime+= parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
  video[this.name] = this.value; //upate the value of the bar with the changed values
}

function handleProgress() {
  const percent= (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis=`${percent}%`;
}
function scrub(e) { //here one of the the event properties gives us the position where we have clicked the mouse
  const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration; //offsetWidth gives us the entire width of the bar
  video.currentTime=scrubTime;
}
/*Hook up the event listeners */
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress); //triggered when the video is updating its time code and when paused,it wont be running the function

toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range=>range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
progress.addEventListener('mousedown',()=> mousedown=true);
progress.addEventListener('mouseup',()=> mousedown=false);
