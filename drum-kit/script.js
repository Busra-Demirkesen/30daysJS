

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);

    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    

    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the
    audio.play();
    key.classList.add('playing');
}
   
function removeTransition(e){
    if(e.propertyName !== 'transition') return;
    this.classList.remove('playing');
}
 


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);