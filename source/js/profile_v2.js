const changePasswordModal = document.querySelector(".change-password-modal-js");
const passwordBtn = document.querySelector(".password-btn-js");
const closeChangePasswordModal = document.querySelectorAll(".modal__close-btn")[2];

const changeDataModal = document.querySelector(".change-data-modal-js");
const dataBtn = document.querySelector(".data-btn-js");
const closeChangeDataModal = document.querySelectorAll(".modal__close-btn")[3];
const changeDataForm = document.forms.changeData;

let profile = null;

passwordBtn.addEventListener("click", () => {
    changePasswordModal.classList.remove("hidden");
    changePasswordModal.classList.add("modal");
});

dataBtn.addEventListener("click", () => {
    
    changeDataForm.email.value = profile.email;
    changeDataForm.name.value = profile.name;
    changeDataForm.surname.value = profile.surname;
    changeDataForm.location.value = profile.location;
    changeDataForm.age.value = profile.age;

    changeDataModal.classList.remove("hidden");
    changeDataModal.classList.add("modal");
});

closeChangePasswordModal.addEventListener("click", () => {
    changePasswordModal.classList.remove("modal");
    changePasswordModal.classList.add("hidden"); 
});

closeChangeDataModal.addEventListener("click", () => {
    changeDataModal.classList.remove("modal");
    changeDataModal.classList.add("hidden");
});

window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        changePasswordModal.classList.remove("modal");
        changePasswordModal.classList.add("hidden");
        changeDataModal.classList.remove("modal");
        changeDataModal.classList.add("hidden");
    }
});

(() => {
    const profileImg = document.querySelector(".profile-image--js");
    const profileName = document.querySelector(".profile-name--js");
    const profileSurname = document.querySelector(".profile-surname--js");
    const profileEmail = document.querySelector(".profile-email--js");
    const profileLocation = document.querySelector(".profile-location--js");
    const profileAge = document.querySelector(".profile-age--js");

    rerendeLinks();
    getProfile();

    function renderProfile(profile) {
        profileImg.src = `url(${BASE_SERVER_PATH + profile.photoUrl})`;
        profileName.innerText = profile.name;
        profileSurname.innerText = profile.surname;
        profileEmail.innerText = profile.email;
        profileLocation.innerText = profile.location;
        profileAge.innerText = profile.age;
    }

    function getProfile() {
        sendRequest({
            method: "GET",
            url: `/api/users/${localStorage.getItem("userId")}`,
        })
        .then((res) => res.json())
        .then(res => {
            if (res.success) {
                profile = res.data;
                renderProfile(profile);
            } else {
                location.pathname = "/";
            }
        })
    }

    const changeData = (e) => {
        e.preventDefault();
        const data = new FormData(changeDataForm);
        sendRequest({
            method: "PUT",
            url: "/api/users",
            body: data,
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403) {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                location.pathname = "/";
                return;
            }
            return res.json();
        })
        .then(res => {
            if(res.success) {
                profile = res.data;
                renderProfile();
            } else {
                throw res;
            }
        })
        .catch(err => {
            if(err._message) {
                alert(err._message);
            }

        })
        .finally(() => {
            changeDataModal.classList.remove("modal");
            changeDataModal.classList.add("hidden");
        })
    }

    changeDataForm.addEventListener("submit", changeData)
})();
/////////////TBD смена пароля, удаление аккаунта, проверить все формы, добавить прелоадеры (таймаут 2сек)
//+попробовать загрузить картинку в профиль