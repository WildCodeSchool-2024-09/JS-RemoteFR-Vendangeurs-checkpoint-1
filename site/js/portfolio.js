// change the avatar image on click

const imgAvatar = document.querySelector('.avatarDev');
imgAvatar.addEventListener('click', function(){
    imgAvatar.src = "image/avatar.svg";
});


// change username and recolor text and background
const askButton = document.getElementById('.askButton');
askButton.addEventListener('click', function(){

    let devName= prompt("quel est ton prénom?");

    if (devName) {
        let devNameUpdated = document.getElementById("firstname");
        devNameUpdated = devName;
        devNameUpdated.style.color= 'white';

        let recoloredBackground = document.getElementsByClassName("description pink-bg");
        recoloredBackground.style.backgroundColor='#750ff7';
    }
});


// change pink element 
const pinkText = document.getElementsByClassName("pink-text");
pinkText.forEach(element => {
    element.style.color = '#750ff7';
});