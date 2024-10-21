// As a user I can change the avatar image when I click on it

const avatarImg = document.getElementById("avatar_img");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "./image/avatar-bis.png";
});

// As a user I can replace the text Matt on the paragraphe with your name and it's color with the color white

const button = document.getElementById("changeNameButton");
const firstname = document.getElementById("firstname");
const blocBgColor = document.getElementsByClassName("description pink-bg")[0];

button.addEventListener("click", () => {
  let username = prompt("What's your name?");
  if (username) {
    firstname.innerHTML = username;
    firstname.style.color = "white";
  }

  let bgColor = prompt("Enter a color");
  if (bgColor) {
    blocBgColor.style.backgroundColor = bgColor;
  }
});
