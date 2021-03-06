let popup = document.querySelector('.popup');
let btnEditProfile = document.querySelector('.profile__btn-edit');
let btnClosePopup = document.querySelector('.popup__close');
let profileEditForm = document.forms['profileEdit'];
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let profileNameInput = document.querySelector('.popup__input_type_name');
let profileJobInput = document.querySelector('.popup__input_type_job');

function popupOpen() {
    popup.classList.add('popup_opened');

    // Setting initial text value in the input forms

    profileNameInput.value = profileName.textContent.trim();
    profileJobInput.value = profileJob.textContent.trim();

}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    profileName.textContent =  profileNameInput.value;
    profileJob.textContent =  profileJobInput.value;
    popupClose();
}

btnEditProfile.addEventListener('click', popupOpen);
btnClosePopup.addEventListener('click', popupClose);
profileEditForm.addEventListener('submit', formSubmitHandler);