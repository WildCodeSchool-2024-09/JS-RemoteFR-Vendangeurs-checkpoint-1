const avatar = document.querySelector(".banner_avatar");

avatar.addEventListener("click", () =>{
  const img = document.querySelector (".banner_avatar");img.src="/site/image/avatar.svg"
})

const pinkBg = document.querySelector(".description")
const button = document.querySelector("#modifybutton")
const footer = document.querySelector("#footerbackground")
const pinkText1 = document.querySelector("#text1")
const pinkText2 = document.querySelector("#text2")
const pinkText3 = document.querySelector ("#text3")
const pinkText4 = document.querySelector ("#text4")

button.addEventListener("click", () =>{ 
  let firstname = prompt (" what's your name ??")
  document.getElementById("firstname").innerHTML=firstname;
  document.getElementById("firstname").style.color="white";
let color = prompt ("enter a color")

if (color === "#750ff7"){ pinkBg.style.backgroundColor = "#750ff7";
  footer.style.backgroundColor= "#750ff7"
 
  pinkText1.style.color = "#750ff7"
  pinkText2.style.color = "#750ff7"
  pinkText3.style.color = "#750ff7"
  pinkText4.style.color = "#750ff7"

  }

   });
   
   




