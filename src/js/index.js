const menuIcon = document.querySelector(".nav__logo-container--menu-logo");
const menu = document.querySelector(".nav__menu-container-bg");

const disableOverflowX = () => {
  document.body.style.overflowX = "hidden";
};

menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.toggle("nav--open");

  menu.classList.toggle("menu--open");
});

window.onload = disableOverflowX;
