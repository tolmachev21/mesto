import FormValidator from '../src/components/FormValidator.js';
import Card from '../src/components/Card.js';
import Section from '../src/components/Section.js';
import Popup from '../src/components/Popup.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import UserInfo from '../src/components/UserInfo.js';
import {popupEditProfileElement, 
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
  ValidationConfig,
  initialCards} from '../src/utils/constants.js'


const profileEditFormValidator = new FormValidator(ValidationConfig, formEditProfileElement);
const addCardFormValidator = new FormValidator(ValidationConfig, formAddCardElement);

profileEditFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Создание карточки
function createCard(card) {
  const cardElement = new Card(card, '.template__item', () => {
    const clickCard = new PopupWithImage(card, popupFullScreenElement);
    clickCard.open();
    clickCard.setEventListeners();
  });
  return cardElement.generateCard();
};

const renderingElement = new Section({
  data: initialCards, 
  renderer: () => {}}, 'places');




// Вставка первоначальных карточек из массива с данными
initialCards.forEach((defaultCard) => {
  places.append(createCard(defaultCard));
});

// Вставка добавленных карточек через форму-добавления 
function renderAddedCard (newCard) {
  places.prepend(createCard(newCard));
};

// Специальные функции для открытия каждого попапа 
function openEditProfilePopup () {
  inputNameElement.value = profileNameElement.textContent;
  inputJobElement.value = profileJobElement.textContent;
  workPopup(popupEditProfileElement).open();
};

function openAddCardPopup () {
  inputPlaceElement.value = '';
  inputLinkElement.value = '';
  workPopup(popupAddCardElement).open();
};

const popupProfile = new PopupWithForm(popupEditProfileElement, (event) => {

});

const popupCard = new PopupWithForm(popupAddCardElement, (event) => {
  event.preventDefault();
  const addNewCard = {
    name: inputPlaceElement.value,
    link: inputLinkElement.value
  };
  renderAddedCard(addNewCard);
  // this.close();
  console.log(this)
});

popupProfile.setEventListeners();
popupCard.setEventListeners();

// Слушатели на открытие попапов
popupEditProfileOpenButtonElement.addEventListener('click', () => {popupProfile.open()});
popupAddCardOpenButtonElement.addEventListener('click', () => {popupCard.open()});