// Step 1

const myAvatar = document.querySelector('.avatar');

myAvatar.addEventListener('click', () => {
    myAvatar.src = './image/avatar.svg';
});

// Step 2 & 3

const buttonSwitch = document.querySelector('.button-switch');
const myName = document.querySelector('#firstname');
const bannerColor = document.querySelectorAll('.pink-bg');
const textColor = document.querySelectorAll('.pink-text');


buttonSwitch.addEventListener('click', () => {
    myName.textContent = prompt('What is your name ?');
    myName.style.color = 'white';

    // bannerColor.style.backgroundColor = prompt('What is a new color ?'); Step 3

    const whatAColor = prompt('What is a new color ?');

    // bannerColor.style.backgroundColor = whatAColor; Ne fonctionne pas avec querySelectorAll (c'est triste)
    // textColor.style.color = whatAColor;

});

