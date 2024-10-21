// Step 1

const myAvatar = document.querySelector('.avatar');

myAvatar.addEventListener('click', () => {
    myAvatar.src = './image/avatar.svg';
});

// Step 2 & 3

const buttonSwitch = document.querySelector('.button-switch');
const myName = document.querySelector('#firstname');
// const bannerColor = document.querySelector('.pink-bg'); Step 3
const bannerColor = document.querySelectorAll('.pink-bg');
const textColor = document.querySelectorAll('.pink-text');


buttonSwitch.addEventListener('click', () => {
    myName.textContent = prompt('What is your name ?');
    myName.style.color = 'white';

    // bannerColor.style.backgroundColor = prompt('What is a new color ?'); Step 3

    const whatAColor = prompt('What is a new color ?');

    bannerColor.forEach(banner => banner.style.backgroundColor = whatAColor);
    textColor.forEach(text => text.style.color = whatAColor);
    // correction 17h30 (j'étais a rien d'y arrivé en vrai pas mal du tout)
});

