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

    /*
    Старый код:
    let nameInput = profileEditForm.elements.name.value;
    let jobInput = profileEditForm.elements.job.value;

    Я не совсем понимаю, какие еще элементы DOM нужно вынести в переменную заранее.
    В правой части присваивания мы напрямую обращаемся свойствам объекта формы, который уже давно найден и сохранен
    в переменную profileEditForm (стр. 4).
    Переменные в левой части взяты напрямую из того кода, который предлагалось использовать в условии задания.
    
    В попытке это исправить я ввел еще две глобальные переменные profileNameInput и profileJobInput, но не совсем
    понимаю, зачем они нужны (вместо того, чтобы один раз найти форму и обращаться к свойствам ее объекта мы, получается,
    ищем отдельно каждый ее дочерний элемент).
    */

    let nameInput = profileNameInput.value;
    let jobInput = profileJobInput.value;
 
    profileName.textContent =  nameInput;
    profileJob.textContent =  jobInput;
    popupClose();
}

btnEditProfile.addEventListener('click', popupOpen);
btnClosePopup.addEventListener('click', popupClose);
profileEditForm.addEventListener('submit', formSubmitHandler);