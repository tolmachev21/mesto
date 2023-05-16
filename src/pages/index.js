import './index.css';

import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {popupEditProfileElement, 
  popupEditProfileOpenButtonElement, 
  formEditProfileElement, 
  profileNameElement,
  profileJobElement,
  popupAddCardElement,
  popupAddCardOpenButtonElement,  
  formAddCardElement,
  popupFullScreenElement,
  ValidationConfig,
  initialCards} from '../scripts/utils/constants.js'

const profileEditFormValidator = new FormValidator(ValidationConfig, formEditProfileElement);
const addCardFormValidator = new FormValidator(ValidationConfig, formAddCardElement);

profileEditFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// 
function createCard(card) {
  const cardElement = new Card(card, '.template__item', () => {
    const clickCard = new PopupWithImage(card, popupFullScreenElement);
    clickCard.open();
    clickCard.setEventListeners();
  });
  return cardElement.generateCard();
};

//
function renderCard(card) {
  const cardElement = createCard(card);
  renderingElement.addItem(cardElement);
};

//
const renderingElement = new Section({
  items: initialCards, 
  renderer: renderCard}, '.places');

renderingElement.renderItems();

// Отвечает за информацию о пользователе на странице
const userInfo = new UserInfo({userNameSelector: profileNameElement, userJobSelector: profileJobElement})

// 
const popupProfile = new PopupWithForm(popupEditProfileElement, (data) => {
    userInfo.setUserInfo(data);
  });

popupProfile.setEventListeners();

// 
const popupCard = new PopupWithForm(popupAddCardElement, (data) => {
  renderingElement.addItem(createCard(data));
});

popupCard.setEventListeners();

// Слушатели на открытие попапов
popupEditProfileOpenButtonElement.addEventListener('click', () => {
  userInfo.getUserInfo();
  popupProfile.open();
});

popupAddCardOpenButtonElement.addEventListener('click', () => {
  popupCard.open();
});