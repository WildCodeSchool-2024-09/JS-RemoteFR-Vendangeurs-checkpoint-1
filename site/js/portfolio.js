// Change Avatar Image On Click
const avatarImg = document.querySelector(".avatar");
avatarImg.addEventListener("click", () => {
	avatarImg.src = "./image/avatar.svg";
});

// Modify text and color button
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector("#change-name");
const elementsColor = document.querySelectorAll(".pink-bg");
const titlesColor = document.querySelectorAll(".pink-text");
const linksColor = document.querySelectorAll("a");

changeNameButton.addEventListener("click", () => {
	const choiceBgColor = prompt("What color do you want ?");
	const userName = prompt("What's your name ?");
	firstName.textContent = userName;
	firstName.style.color = "white";
	changeNameButton.style.backgroundColor = choiceBgColor;
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
