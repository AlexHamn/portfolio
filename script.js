let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector(".hidden");
let closeIcon = document.querySelector(".closeIcon");
let menuItem1 = document.querySelector("#menuItem1");
let menuItem2 = document.querySelector("#menuItem2");
let menuItem3 = document.querySelector("#menuItem3");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu");
  menu.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem1.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem2.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem3.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});
