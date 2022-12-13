var openMenu = document.querySelector(".header-mob-js");
var openMenuBtn = document.querySelector(".heading-section__menu-btn");
var closeMenu = document.querySelector(".header-mob__close-btn");
var signInModal = document.querySelector(".sign-in-modal-js");
var openSignInModal = document.querySelector(".sign-in-modal-btn-js");
var closeSignInModal = document.querySelector(".sign-in-modal__close-btn")

openMenuBtn.addEventListener("click", function() {
    openMenu.classList.add("header-mob");
})

closeMenu.addEventListener("click", function() {
    openMenu.classList.remove("header-mob");
})

openSignInModal.addEventListener("click", function() {
    signInModal.classList.remove("hidden");
    signInModal.classList.add("sign-in-modal");
})


closeSignInModal.addEventListener("click", function() {
    signInModal.classList.remove("sign-in-modal");
    signInModal.classList.add("hidden");
})
