const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipeposition = pipe.offsetlesft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioposition);

    
    if(pipeposition <= 120 && pipeposition > 0 && marioposition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipeposition}px`;
        mario. src="./img/game ouver.png";
        mario.style.width='75px';
        mario.style.marginleft='50px';

        clearInterval(loop)
    } 
}, 10);

document.addEventListener('keydown', jump);
