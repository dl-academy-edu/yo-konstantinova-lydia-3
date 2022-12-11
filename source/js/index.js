let openMenu = document.querySelector(".header-mob-js");
let openMenuBtn = document.querySelector(".heading-section__menu-btn");
let closeMenu = document.querySelector(".header-mob__close-btn");

openMenuBtn.addEventListener("click", function() {
    openMenu.classList.add("header-mob");
})

closeMenu.addEventListener("click", function() {
    openMenu.classList.remove("header-mob");
})