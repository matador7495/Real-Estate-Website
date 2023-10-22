const header = document.querySelector("header");
window.addEventListener("scroll", () => {
   header.classList.toggle("sticky", window.scrollY > 80);
});
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
   menuIcon.classList.toggle("bx-x");
   navbar.classList.toggle("open");
});
window.onscroll = () => {
   menuIcon.classList.remove("bx-x");
   navbar.classList.remove("open");
};
