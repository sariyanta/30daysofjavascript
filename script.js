
/** Javascript Drum Kit */
function play(e) {
    const key = document.querySelector(`div[data-key="${e.key}"]`)
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    if (!key || !audio) {
        return;
    }
    key.classList.add('playing');
    document.querySelector('#drum-kit').style.backgroundColor = key.dataset.color;
    document.querySelector('#drum-kit').style.filter = `drop-shadow(0 0 10px ${key.dataset.color})`;
    document.querySelector('#drum-kit').style.borderRadius = '2rem';
    document.querySelector('.dance').style.backgroundImage = `url(${key.dataset.bg})`;
    audio.currentTime = 0;
    audio.play();
}

function stop(e) {
    document.querySelector(`div[data-key="${e.key}"]`)?.classList.remove('playing')
    document.querySelector('#drum-kit').style.borderRadius = '1rem';

}


window.addEventListener('keydown', play)
window.addEventListener('keyup', stop)

/** JavaScript Clock */
document.querySelector('.clock-hand.seconds').style.transform = `rotate(${new Date().getSeconds() * 6 + 90}deg)`;
document.querySelector('.clock-hand.minute').style.transform = `rotate(${new Date().getMinutes() * 6 + 90}deg)`;
document.querySelector('.clock-hand.hour').style.transform = `rotate(${new Date().getHours() * 30 + 90}deg)`;
setInterval(() => {
    const seconds =  new Date().getSeconds();
    document.querySelector('.clock-hand.seconds').style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    if (seconds === 0) {
        document.querySelector('.clock-hand.seconds').style.transition = 'none';
    }
    document.querySelector('.clock-hand.seconds').style.transform = `rotate(${seconds * 6 + 90}deg)`;
    console.log(seconds);
}, 1000);

setInterval(() => {
    const minutes = new Date().getMinutes();
    document.querySelector('.clock-hand.minute').style.transform = `rotate(${minutes * 6 + 90}deg)`;
}, 60000)

setInterval(()=> {
    const hours = new Date().getHours();
    document.querySelector('.clock-hand.hour').style.transform = `rotate(${hours * 30 + 90}deg)`;
}, 3600000)

document.querySelector('.sound-control').addEventListener('click', () => {
    document.querySelector('.sound-control').classList.toggle('active');
});

if (document.querySelector('.sound-control').classList.contains('active')) {
    document.querySelector('.sound-control').innerHTML = `<i class="fas fa-volume-up"></i>`;
}


