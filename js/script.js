let popup = document.querySelector('.popup');
let btnEditProfile = document.querySelector('.profile__btn-edit');
let btnClosePopup = document.querySelector('.popup__close');
let profileEditForm = document.forms['profileEdit'];
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function popupOpen() {
    // in case .popup doesn't exist
    if (!popup) {
        return;
    }

    popup.classList.add('popup_opened');

    // Setting initial text value in the input forms
    profileEditForm.elements.name.value = profileName.textContent.trim();
    profileEditForm.elements.job.value = profileJob.textContent.trim();
}

function popupClose() {
    // in case popup doesn't exist
    if (!popup) {
        return;
    }

    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = profileEditForm.elements.name.value;
    let jobInput = profileEditForm.elements.job.value;

    // Updating profile name and job if not empty 
    profileName.textContent =  nameInput ? nameInput : profileName.textContent;
    profileJob.textContent =  jobInput ? jobInput : profileJob.textContent;
    popupClose();
}

btnEditProfile.addEventListener('click', popupOpen);
btnClosePopup.addEventListener('click', popupClose);
profileEditForm.addEventListener('submit', formSubmitHandler);