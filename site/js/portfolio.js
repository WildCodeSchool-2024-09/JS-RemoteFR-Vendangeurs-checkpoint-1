const avatarImg = document.querySelector(".avatar");
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector("#change-name");
const elementsColor = document.querySelectorAll(".pink-bg");
const titlesColor = document.querySelectorAll(".pink-text");
const linksColor = document.querySelectorAll("a");
const buttonChangeLi = document.querySelector("#change-dev-tools");
const listToChange = document.querySelector("#front-dev-tools");

// Change Avatar Image On Click
avatarImg.addEventListener("click", () => {
	avatarImg.src = "./image/avatar.svg";
});

// Modify text and color button

changeNameButton.addEventListener("click", () => {
	const choiceBgColor = prompt("What color do you want ?");
	const userName = prompt("What's your name ?");

	firstName.textContent = userName;
	firstName.style.color = "white";
	changeNameButton.style.backgroundColor = choiceBgColor;
	buttonChangeLi.style.backgroundColor = choiceBgColor;

	for (const element of elementsColor) {
		element.style.backgroundColor = choiceBgColor;
	}
	for (const title of titlesColor) {
		title.style.color = choiceBgColor;
	}
	for (const link of linksColor) {
		link.style.color = choiceBgColor;
	}
});

// Change dev tools list

buttonChangeLi.addEventListener("click", () => {
	listToChange.children[0].textContent = "VSCode";
	listToChange.children[1].textContent = "Github";
	listToChange.children[2].textContent = "Terminal";
});
