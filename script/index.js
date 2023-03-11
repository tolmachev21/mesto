const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

const formElement = popupElement.querySelector('.popup__form');
const formSubmitElement = formElement.querySelector('.popup__submit-button');
const nameInputElement = formElement.querySelector('.popup__input_field_name');
const jobInputElement = formElement.querySelector('.popup__input_field_job');

function handleFormSubmit (event) {
    event.preventDefault();
    nameInputElement.getAttribute('value');
    jobInputElement.getAttribute('value');
    const profileNameElement = document.querySelector('.profile__name');
    const profileJobElemtnt = document.querySelector('.profile__job');
    profileNameElement.textContent = nameInputElement.value;
    profileJobElemtnt.textContent = jobInputElement.value;
    closePopup();
}; 

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', handleFormSubmit);