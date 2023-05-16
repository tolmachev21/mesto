// Переменные для функций редактирования профиля 
const popupEditProfileElement = document.querySelector('.popup-edit-profile');
const popupEditProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const formEditProfileElement = popupEditProfileElement.querySelector('.popup__form');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');

// Переменные для функций добавления карточек 
const popupAddCardElement = document.querySelector('.popup-add-card');
const popupAddCardOpenButtonElement = document.querySelector('.profile__add-button');
const formAddCardElement = popupAddCardElement.querySelector('.popup__form');

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

const arkhyz = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url)
const chelyabinskRegion = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url)
const ivanova = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url)
const kamchatka = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url)
const kholmogorskyDistrict = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url)
const baikal = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url)


// Массив с первоначальными картинками 
const initialCards = [
  {
    title: 'Архыз',
    link: arkhyz
  },
  {
    title: 'Челябинская область',
    link: chelyabinskRegion
  },
  {
    title: 'Иваново',
    link: ivanova
  },
  {
    title: 'Камчатка',
    link: kamchatka
  },
  {
    title: 'Холмогорский район',
    link: kholmogorskyDistrict
  },
  {
    title: 'Байкал',
    link: baikal
  }
];


export {popupEditProfileElement, 
        popupEditProfileOpenButtonElement, 
        formEditProfileElement, 
        profileNameElement,
        profileJobElement,
        popupAddCardElement,
        popupAddCardOpenButtonElement,  
        formAddCardElement,
        popupFullScreenElement, 
        popupFullScreenImageElement, 
        popupFullScreenTitleElement,
        ValidationConfig,
        initialCards};