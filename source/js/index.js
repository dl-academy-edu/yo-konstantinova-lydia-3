let openMenu = document.querySelector(".header-mob-js");
let openMenuBtn = document.querySelector(".heading-section__menu-btn");
let closeMenu = document.querySelector(".header-mob__close-btn");
let signInModal = document.querySelector(".sign-in-modal-js");
let openSignInModal = document.querySelector(".sign-in-modal-btn-js");
let closeSignInModal = document.querySelectorAll(".modal__close-btn")[0];
let registerModal = document.querySelector(".register-modal-js");
let openRegisterModal = document.querySelector(".register_modal-btn-js");
let closeRegisterModal = document.querySelectorAll(".modal__close-btn")[1];
let checkbox = document.querySelector(".cb-js");
let formBtn = document.querySelector(".btn-register-js");
let checkboxLabel = document.querySelector(".cb-label-js");


const openModal = function () {
    signInModal.classList.remove("hidden");
    signInModal.classList.add("modal");
}

const closeModal = function () {
    signInModal.classList.remove("modal");
    signInModal.classList.add("hidden");
}


openMenuBtn.addEventListener("click", function() {
    openMenu.classList.add("header-mob");
})

closeMenu.addEventListener("click", function() {
    openMenu.classList.remove("header-mob");
})

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        signInModal.classList.remove("modal");
        signInModal.classList.add("hidden");
        registerModal.classList.remove("modal");
        registerModal.classList.add("hidden");
    }
})

openSignInModal.addEventListener("click", openModal);
closeSignInModal.addEventListener("click", closeModal);

openRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("hidden");
    registerModal.classList.add("modal");
})

closeRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("modal");
    registerModal.classList.add("hidden");
})

checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        formBtn.removeAttribute("disabled");
        checkboxLabel.classList.remove("modal__form__checkbox-wrap__label-disabled");
    } else {
        formBtn.setAttribute("diasbled");
    }
})
