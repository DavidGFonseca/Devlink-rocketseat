const tema = document.querySelector("#page");
const btnLight = document.querySelector("#modif-tema");
const img = document.querySelector("#profile img");

btnLight.addEventListener("click", () => {
  tema.classList.toggle("light");
  if (tema.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-light.png");
  } else {
    img.setAttribute("src", "./assets/profile-dark.png");
  }
});
