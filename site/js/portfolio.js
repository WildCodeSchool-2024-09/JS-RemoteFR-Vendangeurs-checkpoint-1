const avatarChange = document.querySelector("#avatar1");
avatarChange.addEventListener("click", () => {
  avatarChange.src = "./image/avatar-bis.png";
  console.log(img.src);
});

const pinkText1 = document.querySelector("#pink-text1");
const pinkText2 = document.querySelector("#pink-text2");
const pinkText3 = document.querySelector("#pink-text3");
const pinkText4 = document.querySelector("#pink-text4");
const pinkBg = document.querySelector(".pink-bg");
const footerBg = document.querySelector("#footerColor");
const buttonOn = document.querySelector("#usernameButton");

buttonOn.addEventListener("click", () => {
  const newBackgroundColor = prompt("Enter a color");
  if (newBackgroundColor === "#750ff7") {
    pinkBg.style.backgroundColor = "#750ff7";
    footerBg.style.backgroundColor = "#750ff7";
    pinkText1.style.color = "#750ff7";
    pinkText2.style.color = "#750ff7";
    pinkText3.style.color = "#750ff7";
    pinkText4.style.color = "#750ff7";
    buttonOn.style.backgroundColor = "#750ff7";
  }

  const username = prompt("What's your name?");
  document.getElementById("firstname").innerHTML = username;
  document.getElementById("firstname").style.color = "white";
});
