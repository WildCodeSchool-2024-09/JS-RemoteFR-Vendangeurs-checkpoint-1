//Change Avatar//

const image = document.getElementById("image")
const isAvatar = true;

image.addEventListener("click", () => {
    if (isAvatar) {
        image.src = "./image/avatar-bis.png";
    } else {
        image.src = "./image/avatar.svg";
    }
}
)


//Replace name and color//



const button = document.getElementById("button");
button.addEventListener("click", () => {
    const yourName = prompt ("Enter your Name");
    if (yourName) {
        document.getElementById("firstname").textContent = yourName;
    }
    document.getElementById("firstname").style.color = "black";


    const backGroundColor = prompt ("Choose a color");
    if (backGroundColor) {
        document.getElementsByClassName("pink-bg").style.color = backGroundColor;
    }
})