const menuIcon = document.querySelector(".nav__logo-container--menu-logo");
const menu = document.querySelector(".nav__menu-container-bg");

menuIcon.addEventListener("click", (e) => {
  menu.classList.toggle("menu--open");
  menuIcon.classList.toggle("nav--open");
});

window.onload = document.body.style.overflowX = "hidden";
