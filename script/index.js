const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

const formElement = popupElement.querySelector('.popup__form');
const formSubmitElement = formElement.querySelector('.popup__form_submit-button');
const nameInputElement = formElement.querySelector('.popup__form_input_name');
const jobInputElement = formElement.querySelector('.popup__form_input_job');

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

formElement.addEventListener('submit', handleFormSubmit);

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
}

popupElement.addEventListener('click', closePopupByClickOnOverlay);