
function playSound(e){
    //console.log(e.keyCode);
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // div[data-key] but out div has 'key' class
    if(!audio)return; //stop the function from running all together
    audio.currentTime=0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
if(e.propertyName !== "transform") return; //skip if its not transform

this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition)); // traverse through the node list
                                        // execute removeTransitionfunction after the transition is over
window.addEventListener('keydown',playSound);
