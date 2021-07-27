let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector(".hidden");
let menuItem = document.querySelector(".menuitem1");
let closeIcon = document.querySelector(".closeIcon");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu");
  menu.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});
