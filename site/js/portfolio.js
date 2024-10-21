const profileImage = document.querySelector("#profile-image");

profileImage.addEventListener("click", () => {
  if (profileImage.src.match("image/avatar-bis.png")) {
    profileImage.src = "image/avatar.svg";
  } else {
    profileImage.src = "image/avatar-bis.png";
  }
});
