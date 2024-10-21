// Change Avatar Image On Click
const avatarImg = document.querySelector(".avatar");
avatarImg.addEventListener("click", () => {
	avatarImg.src = "./image/avatar.svg";
});

// Modify text and color button
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector("#change-name");
const bgColorSection = document.querySelector("section.pink-bg");
const bgColorFooter = document.querySelector("footer.pink-bg");

changeNameButton.addEventListener("click", () => {
	const choiceBgColor = prompt("What color do you want ?");
	const userName = prompt("What's your name ?");
	firstName.textContent = userName;
	firstName.style.color = "white";
	bgColorSection.style.backgroundColor = choiceBgColor;
	bgColorFooter.style.backgroundColor = choiceBgColor;
});

console.log(bgColorFooter);
