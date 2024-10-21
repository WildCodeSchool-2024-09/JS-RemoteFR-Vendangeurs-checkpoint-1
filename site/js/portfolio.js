const profileImage = document.querySelector("#profile-image");

profileImage.addEventListener("click", () => {
  if (profileImage.src.match("image/avatar-bis.png")) {
    profileImage.src = "image/avatar.svg";
  } else {
    profileImage.src = "image/avatar-bis.png";
  }
});

// STEP 2 + 3 + 4
const userFirstName = document.querySelector("#firstname");
const modifyUserButton = document.querySelector("#modifyUserButton");

const backgrounds = document.querySelectorAll(".pink-bg");
const texts = document.querySelectorAll(".pink-text");

modifyUserButton.addEventListener("click", () => {
  const newColor = prompt("Gimme your color!");
  const newName = prompt("Entrez votre nom !");

  userFirstName.textContent = newName;
  userFirstName.style.color = "white";

  backgrounds.forEach((bg) => (bg.style.backgroundColor = newColor));
  texts.forEach((text) => (text.style.color = newColor));
});

// SUPER BONUS

const backendSkills = document.querySelector(".column ul");
const button = document.querySelector("#button-add-elements");
const input = document.querySelector("#back-elements");

button.addEventListener("click", () => {
  // je stocke la valeur de l'input.
  const inputValue = input.value;

  // je crée un élément LI
  const newLI = document.createElement("li");

  // je rajoute la valeur de l'input en tant que texte.
  newLI.innerText = inputValue;

  // on rajoute le LI en tant qu'enfant de UL
  backendSkills.appendChild(newLI);
});
