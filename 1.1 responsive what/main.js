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

// Showcase Camera Flash

// var showcaseSources = [ url('./background/WD_mainBG.jpg'), url('./background/WD_mainBG_flash.jpg')]

//       var index = 0;
//       setInterval(function(){
//         if (index === showcaseSources.length) {
//           index = 0;
//         }
//         document.getElementsByClassName("showcase").src = showcaseSources[index];
//         index++;
//       }, 2000);