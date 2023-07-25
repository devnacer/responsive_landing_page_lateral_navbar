const btnMenu = document.getElementById("btn-menu");
const navBarContainer = document.getElementById("nav-bar-container");
const fog = document.getElementById("fog");

btnMenu.addEventListener("click", () => {
  navBarContainer.classList.toggle("active");
  fog.classList.toggle("fog-active");
});

fog.addEventListener("click", () => {
  navBarContainer.classList.toggle("active");
  fog.classList.toggle("fog-active");
});
