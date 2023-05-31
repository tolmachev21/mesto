import Api from '../components/Api.js'

const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');
const profileAvatarElement = document.querySelector('.profile__avatar');
const popupEditProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupAddCardOpenButtonElement = document.querySelector('.profile__add-button');
const popupEditAvatarOpenButtonElement = document.querySelector('.profile__avatar-button');

// Переменные для функций редактирования профиля 
const popupEditProfileElement = document.querySelector('.popup-edit-profile');
const formEditProfileElement = popupEditProfileElement.querySelector('.popup__form');

// Переменные для функций добавления карточек 
const popupAddCardElement = document.querySelector('.popup-add-card');
const formAddCardElement = popupAddCardElement.querySelector('.popup__form');

// 
const popupEditAvatarElement = document.querySelector('.popup-edit-avatar');
const formEditAvatarElement = popupEditAvatarElement.querySelector('.popup__form');

//
const popupDeleteCardElement = document.querySelector('.popup-delete-card');

// Переменные для функции полноэкранного просмотра картинок
const popupFullScreenElement = document.querySelector('.popup-fullscreen');

// 
const ValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  invalidButtonClass: 'popup__submit-button_state_invalid',
  validButtonClass: 'popup__submit-button_state_valid',
  inputErrorClass: 'popup__input_type_error'
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers:  {
    authorization: 'e72a7094-3b1a-4cd8-9d0f-c71e8371a4be',
    'Content-Type': 'application/json'
  }
});


export {popupEditProfileElement, 
        popupEditProfileOpenButtonElement, 
        formEditProfileElement, 
        profileNameElement,
        profileJobElement,
        popupAddCardElement,
        popupAddCardOpenButtonElement,  
        formAddCardElement,
        popupFullScreenElement,
        popupEditAvatarElement,
        profileAvatarElement,
        popupEditAvatarOpenButtonElement,
        formEditAvatarElement,
        popupDeleteCardElement,
        ValidationConfig,
        api};