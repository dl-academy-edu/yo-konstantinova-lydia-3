const changePasswordModal = document.querySelector(".change-password-modal-js");
const passwordBtn = document.querySelector(".password-btn-js");
const closeChangePasswordModal = document.querySelectorAll(".modal__close-btn")[2];
const changePasswordForm = document.forms.changePassword;

const changeDataModal = document.querySelector(".change-data-modal-js");
const dataBtn = document.querySelector(".data-btn-js");
const closeChangeDataModal = document.querySelectorAll(".modal__close-btn")[3];
const changeDataForm = document.forms.changeData;

const deleteBtn = document.querySelector(".delete-profile-js");

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
        closeModalByEsc(changePasswordModal);
        closeModalByEsc(changeDataModal);
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
        profileImg.attributes.src = `url(${BASE_SERVER_PATH + profile.photoUrl})`;
        profileName.innerText = profile.name;
        profileSurname.innerText = profile.surname;
        profileEmail.innerText = profile.email;
        profileLocation.innerText = profile.location;
        profileAge.innerText = profile.age;
    }

    function getProfile() {
        showLoader();
        sendRequest({
            method: "GET",
            url: `/api/users/${localStorage.getItem("userId")}`,
        })
        .then((res) => res.json())
        .then(res => {
            if (res.success) {
                profile = res.data;
                renderProfile(profile);
                console.log(profileImg.attributes.src);
            } else {
                location.pathname = "/";
            }
        })
        .catch(
            alert("Something went wrong")
        )
        .finally(
            hideLoader()
        )
    }

    const changeData = (e) => {
        e.preventDefault();
        const data = new FormData(changeDataForm);
        showLoader();
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
                renderProfile(profile);
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
            hideLoader();
        })
    }

    changeDataForm.addEventListener("submit", changeData);
})();

changePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = {};

    const oldPassword = changePasswordForm.elements.oldPassword;
    const newPassword = changePasswordForm.elements.newPassword;
    const repeatNewPassword = changePasswordForm.elements.repeatNewPassword;

    if (repeatNewPassword.value !== newPassword.value) {
        errors.repeatNewPassword = "The password doesn't match";
    } else if (repeatNewPassword.value.length <=0) {
        errors.repeatNewPassword = "This field is required";
    } else {
        showValidInput(repeatNewPassword);
    }

    if (oldPassword.value.length <=0) {
        errors.oldPassword = "This field is required";
    } else {
        showValidInput(oldPassword);
    }

    if (newPassword.value.length <=0) {
        errors.newPassword = "This field is required";
    } else if (newPassword.value.length > 0 && newPassword.value.length < 4) {
        errors.newPassword = "This password is too short";
    } else if (newPassword.value === oldPassword.value) {
        errors.newPassword = "New password must not macth the old one"
    } else {
        showValidInput(newPassword);
    }

    if (Object.keys(errors).length) {
        errorFormHandler(errors, changePasswordForm);
        return;
    } else {
        const data = {
            oldPassword: oldPassword.value,
            newPassword: newPassword.value,
        }
        showLoader();
        sendRequest({
            method: "PUT",
            url: "/api/users",
            body: JSON.stringify(data),
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        })
        .then(res => {
            if (res.status === 422) {
                alert("Your old password is not correct, please try again");
                changePasswordForm.reset();
                removeValidInput(changePasswordForm.elements.oldPassword);
                removeValidInput(changePasswordForm.elements.newPassword);
                removeValidInput(changePasswordForm.elements.repeatNewPassword);
                return;
            }
            return res.json();
        })
        .then(res => {
            if (res.success) {
                alert(`The password was changed successfully`);
            }
        })
        .catch( 
            console.log("Something went wrong")
        )
        .finally(() => {
            hideLoader();
        })
    }
});

deleteBtn.addEventListener("click", () => {
    showLoader();
    sendRequest({
        method: "DELETE",
        url: `/api/users/${localStorage.getItem("userId")}`,
        headers: {
            "x-access-token": localStorage.getItem("token"),
        }
    })
    .then(res => {
        res.json();
    })
    .then(res => {
        if(res.success) {
            alert(`Your account has been deleted successfully`)
        }
    })
    .catch(err => {
        if(err._message) {
            alert(`Something went wrong. Error ${err._message}`)
        }
    })
    .finally(
        hideLoader()
    )
})