window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");
  const listItem = document.querySelectorAll(".nav-menu__item");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_open");
    menu.classList.toggle("nav-menu_open");
  });

  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_open");
      menu.classList.toggle("nav-menu_open");
    });
  });
});
