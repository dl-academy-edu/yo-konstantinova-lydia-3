let openMenu = document.querySelector(".header-mob-js");
let openMenuBtn = document.querySelector(".heading-section__menu-btn");
let closeMenu = document.querySelector(".header-mob__close-btn");
let signInModal = document.querySelector(".sign-in-modal-js");
let openSignInModal = document.querySelector(".sign-in-modal-btn-js");
let closeSignInModal = document.querySelectorAll(".modal__close-btn")[0];
let registerModal = document.querySelector(".register-modal-js");
let openRegisterModal = document.querySelector(".register_modal-btn-js");
let closeRegisterModal = document.querySelectorAll(".modal__close-btn")[1];
let checkbox = document.querySelectorAll(".cb-js")[0];
let formBtn = document.querySelectorAll(".btn-register-js")[0];
let checkboxLabel = document.querySelectorAll(".cb-label-js")[0];
let openMessageModal = document.querySelector(".msg-btn-js");
let messageModal = document.querySelector(".message-modal-js");
let closeMessageModal = document.querySelector(".modal__close-btn--msg");
let checkboxMessage = document.querySelectorAll(".cb-js")[1];
let formBtnMessage = document.querySelectorAll(".btn-register-js")[1];
let checkboxLabelMessage = document.querySelectorAll(".cb-label-js")[1];
let scrollBtn = document.querySelector(".scroll-btn");


const openModal = function () {
    signInModal.classList.remove("hidden");
    signInModal.classList.add("modal");
};

const closeModal = function () {
    signInModal.classList.remove("modal");
    signInModal.classList.add("hidden");
};


openMenuBtn.addEventListener("click", function() {
    openMenu.classList.add("header-mob");
});

closeMenu.addEventListener("click", function() {
    openMenu.classList.remove("header-mob");
});

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        signInModal.classList.remove("modal");
        signInModal.classList.add("hidden");
        registerModal.classList.remove("modal");
        registerModal.classList.add("hidden");
        messageModal.classList.remove("modal");
        messageModal.classList.add("hidden");
        changePasswordModal.classList.remove("modal");
        changePasswordModal.classList.add("hidden");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1500) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

openSignInModal.addEventListener("click", openModal);
closeSignInModal.addEventListener("click", closeModal);

openRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("hidden");
    registerModal.classList.add("modal");
});

closeRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("modal");
    registerModal.classList.add("hidden");
});

checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        formBtn.removeAttribute("disabled", "disabled");
        checkboxLabel.classList.remove("modal__form__checkbox-wrap__label-disabled");
    } else {
        formBtn.setAttribute("disabled", "disabled");
        checkboxLabel.classList.add("modal__form__checkbox-wrap__label-disabled");
    }
});

checkboxMessage.addEventListener("click", function() {
    if (checkboxMessage.checked) {
        formBtnMessage.removeAttribute("disabled", "disabled");
        checkboxLabelMessage.classList.remove("modal__form__checkbox-wrap__label-disabled");
    } else {
        formBtnMessage.setAttribute("disabled", "disabled");
        checkboxLabelMessage.classList.add("modal__form__checkbox-wrap__label-disabled");
    }
});

openMessageModal.addEventListener("click", function() {
    messageModal.classList.remove("hidden");
    messageModal.classList.add("modal");
});

closeMessageModal.addEventListener("click", function() {
    messageModal.classList.remove("modal");
    messageModal.classList.add("hidden");
});