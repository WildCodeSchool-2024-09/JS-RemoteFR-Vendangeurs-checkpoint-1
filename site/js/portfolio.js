const avatar = document.getElementById("avatar");
const newImageAvatar = "image/avatar-bis.png";

avatar.addEventListener("click", function() {
    avatar.src = newImageAvatar;
}
)

const firstName = document.getElementById("firstname");

firstName.innerHTML = "Bob";
firstName.style.color = "white";

const colorText = document.querySelectorAll(".pink-text");

colorText.forEach(".pink-text") => {
    ".pink-text".style.color = "#750ff7";
};

// colorText.style.color = "#750ff7";