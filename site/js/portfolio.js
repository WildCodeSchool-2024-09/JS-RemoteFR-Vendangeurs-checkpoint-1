// Change Avatar Image On Click
const avatarImg = document.querySelector(".avatar");
avatarImg.addEventListener("click", () => {
	avatarImg.src = "./image/avatar.svg";
});

// Modify text and color button
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector("#change-name");

changeNameButton.addEventListener("click", () => {
	const userName = prompt("What's your name ?");
	firstName.textContent = userName;
	firstName.style.color = "white";
});
