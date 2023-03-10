const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    pop
}

function togglePopupDisplay (evt) {
    evt.preventDefault();
    if (popupElement.classList.contains('popup_opened')) {
        popupElement.classList.remove('popup_opened');
    } else {
        popupElement.classList.add('popup_opened');
    }
};

popupCloseButtonElement.addEventListener('click', togglePopupDisplay);
popupOpenButtonElement.addEventListener('click', togglePopupDisplay);

const formElement = popupElement.querySelector('.popup__form');
const formSubmitElement = formElement.querySelector('.popup__form_submit-button');
const nameInputElement = formElement.querySelector('.popup__form_input_name');
const jobInputElement = formElement.querySelector('.popup__form_input_job');// 

function handleFormSubmit (event) {
    event.preventDefault();
    nameInputElement.getAttribute('value');
    jobInputElement.getAttribute('value');
    const profileNameElement = document.querySelector('.profile__name');
    const profileJobElemtnt = document.querySelector('.profile__job');
    profileNameElement.textContent = nameInputElement.value;
    profileJobElemtnt.textContent = jobInputElement.value;
}; 

formElement.addEventListener('submit', handleFormSubmit);

