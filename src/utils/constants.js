// Переменные для функций редактирования профиля 
const popupEditProfileElement = document.querySelector('.popup-edit-profile');
const popupEditProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const formEditProfileElement = popupEditProfileElement.querySelector('.popup__form');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');
const inputNameElement = formEditProfileElement.querySelector('.popup__input_field_name');
const inputJobElement = formEditProfileElement.querySelector('.popup__input_field_job');

// Переменные для функций добавления карточек 
const popupAddCardElement = document.querySelector('.popup-add-card');
const popupAddCardOpenButtonElement = document.querySelector('.profile__add-button');
const formAddCardElement = popupAddCardElement.querySelector('.popup__form');
const inputPlaceElement = formAddCardElement.querySelector('.popup__input_field_place');
const inputLinkElement = formAddCardElement.querySelector('.popup__input_field_link');

// Переменные для функции создания карточек 
const places = document.querySelector('.places');

// Переменные для функции полноэкранного просмотра картинок
const popupFullScreenElement = document.querySelector('.popup-fullscreen');
const popupFullScreenImageElement = popupFullScreenElement.querySelector('.popup__image');
const popupFullScreenTitleElement = popupFullScreenElement.querySelector('.popup__subtitle');

// 
const ValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  invalidButtonClass: 'popup__submit-button_state_invalid',
  validButtonClass: 'popup__submit-button_state_valid',
  inputErrorClass: 'popup__input_type_error'
}; 


// Массив с первоначальными картинками 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


export {popupEditProfileElement, 
        popupEditProfileOpenButtonElement, 
        formEditProfileElement, 
        profileNameElement,
        profileJobElement,
        inputNameElement,
        inputJobElement,
        popupAddCardElement,
        popupAddCardOpenButtonElement,  
        formAddCardElement,
        inputPlaceElement,
        inputLinkElement,
        places,
        popupFullScreenElement, 
        popupFullScreenImageElement, 
        popupFullScreenTitleElement,
        ValidationConfig,
        initialCards};