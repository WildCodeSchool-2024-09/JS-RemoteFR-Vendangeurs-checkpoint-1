const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

const button = document.querySelector("#button");
const firstName = document.querySelector("#firstname");

button.addEventListener("click", () => {
    const newName =prompt("Quel est votre nom?");
    console.log(newName);
    firstName.innerHTML = newName;
    firstName.style.color = "white";
});

