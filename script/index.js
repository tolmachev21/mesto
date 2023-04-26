import {FormValidator} from './validate.js';
import {Card} from './card.js';

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

// Переменная для всех кнопок-кретистиков
const buttonCloseList = document.querySelectorAll('.popup__close-button');

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

const profileEditFormValidator = new FormValidator(ValidationConfig, formEditProfileElement);
const addCardFormValidator = new FormValidator(ValidationConfig, formAddCardElement);

profileEditFormValidator.enableValidation();
addCardFormValidator.enableValidation();

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

// Создание карточки
function createCard(card) {
  const cardElement = new Card(card, '.template__item');
  return cardElement.generateCard();
};

// Вставка первоначальных карточек из массива с данными
initialCards.forEach((defaultCard) => {
  places.append(createCard(defaultCard));
});

// Вставка добавленных карточек через форму-добавления 
function renderAddedCard (newCard) {
  places.prepend(createCard(newCard));
};

// Универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnKeyEsape);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnKeyEsape);
};

// Специальные функции для открытия каждого попапа 
function openEditProfilePopup () {
  inputNameElement.value = profileNameElement.textContent;
  inputJobElement.value = profileJobElement.textContent;
  openPopup(popupEditProfileElement);
};

function openAddCardPopup () {
  inputPlaceElement.value = '';
  inputLinkElement.value = '';
  openPopup(popupAddCardElement);
};

// Закрытие попапов по клику на оверлей и на клавишу ESC
function closePopupByClickOnOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(event.target);
};

function closePopupByClickOnKeyEsape (event) {
  if (event.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  };  
};

// Функция обрабочтика формы редактирования профиля
function handleFormEditProfileSubmit (event) {
  event.preventDefault();
  profileNameElement.textContent = inputNameElement.value;
  profileJobElement.textContent = inputJobElement.value;
  closePopup(popupEditProfileElement);;
}; 

// Функция обработчки формы добавления карточки
function handleFormAddCardSubmit (event) {
  event.preventDefault();
  const addNewCard = {
    name: inputPlaceElement.value,
    link: inputLinkElement.value
  };
  renderAddedCard(addNewCard);
  closePopup(popupAddCardElement);
};

// Слушатели на открытие попапов
popupEditProfileOpenButtonElement.addEventListener('click', openEditProfilePopup);
popupAddCardOpenButtonElement.addEventListener('click', openAddCardPopup);

// Единый слушать на закрытие всех попапов (кнопкой-крестиком и оверлеем)
buttonCloseList.forEach(button => {
  const popup = button.closest('.popup');
  popup.addEventListener('mousedown', closePopupByClickOnOverlay);
  button.addEventListener('click', () => closePopup(popup));
});

// Слушатели отправки формы
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

export {popupFullScreenElement, popupFullScreenImageElement, popupFullScreenTitleElement, openPopup}