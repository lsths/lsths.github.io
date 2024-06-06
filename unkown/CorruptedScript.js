// Navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-options");
menuBtn.onclick = () => {
  menu.classList.toggle("active-nav");
};