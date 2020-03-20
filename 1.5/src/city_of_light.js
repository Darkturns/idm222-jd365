document.querySelector('.menu-btn').addEventListener ('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// Who Menu

const whoButton = document.querySelector('#menuWho');
const whoMenu = document.querySelector('#modal');
const opacityBackground = document.querySelector('#opacityBackground');

console.log(opacityBackground);
whoButton.addEventListener('click', () => {
    whoMenu.removeAttribute('class');
    opacityBackground.removeAttribute('class');
});

opacityBackground.addEventListener('click', () => {
    whoMenu.setAttribute('class', 'hidden');
    opacityBackground.setAttribute('class', 'hidden');
});

/* Polariods */
var polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach(item => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  
  item.style.transform = `rotate(${randomRotation}deg)`
})