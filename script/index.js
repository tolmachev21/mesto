const popupEditProfileElement = document.querySelector('.popup-edit-profile');
const popupEditProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupEditProfileCloseButtonElement = popupEditProfileElement.querySelector('.popup__close-button');
const popupAddCardElement = document.querySelector('.popup-add-card');
const popupAddCardOpenButtonElement = document.querySelector('.profile__add-button')
const popupAddCardCloseButtonElement = popupAddCardElement.querySelector('.popup__close-button');
const formEditProfileElement = popupEditProfileElement.querySelector('.popup__form');
const formSubmitEditProfileElement = formEditProfileElement.querySelector('.popup__submit-button');
const formAddCardElement = popupAddCardElement.querySelector('.popup__form');
const formSubmitAddCardElement = formAddCardElement.querySelector('.popup__submit-button');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');
const inputNameElement = formEditProfileElement.querySelector('.popup__input_field_name');
const inputJobElement = formEditProfileElement.querySelector('.popup__input_field_job');
const inputPlaceElement = formAddCardElement.querySelector('.popup__input_field_place');
const inputLinkElement = formAddCardElement.querySelector('.popup__input_field_link');
// Переменные для создания карточек 
const itemTemplate = document.querySelector('.template__item').content; 
const places = document.querySelector('.places');
// Переменные для попапа открытия картинки 
const popupFullScreenElement = document.querySelector('.popup-fullscreen');
const popupFullScreenCloseButtonElement = popupFullScreenElement.querySelector('.popup-fullscreen__close-button');

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

function openPopup (event) {
  if (event.target === popupEditProfileOpenButtonElement) {
    popupEditProfileElement.classList.add('popup_opened');
    inputNameElement.value = profileNameElement.textContent;
    inputJobElement.value = profileJobElement.textContent;
  };
  if (event.target === popupAddCardOpenButtonElement) {popupAddCardElement.classList.add('popup_opened')};  
};

function closePopup () {
  popupEditProfileElement.classList.remove('popup_opened');
  popupAddCardElement.classList.remove('popup_opened');
  popupFullScreenElement.classList.remove('popup-fullscreen_opened');
};

function closePopupByClickOnOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup();
};

function handleFormEditProfileSubmit (event) {
  event.preventDefault();
  profileNameElement.textContent = inputNameElement.value;
  profileJobElement.textContent = inputJobElement.value;
  closePopup();
}; 

initialCards.forEach(renderItem);

function renderItem (item) {
  const itemCard = itemTemplate.cloneNode(true);
  itemCard.querySelector('.place__title').textContent = item.name;
  itemCard.querySelector('.place__image').src = item.link;
  setEventListener(itemCard);
  itemCard.querySelector('.place__image').addEventListener('click', () => openFullScreen(item));
  places.append(itemCard);
};

function handleFormAddCardSubmit (event) {
  event.preventDefault();
  const newCard = {
    name: inputPlaceElement.value,
    link: inputLinkElement.value
  };
  addCard(newCard);
  closePopup();
};

function addCard(newCard) {
  const addNewCard = itemTemplate.cloneNode(true);
  addNewCard.querySelector('.place__title').textContent = newCard.name;
  addNewCard.querySelector('.place__image').src = newCard.link;
  addNewCard.querySelector('.place__image').alt = newCard.name;
  setEventListenerForAddCard (addNewCard);
  addNewCard.querySelector('.place__image').addEventListener('click', () => openFullScreen(newCard));
  places.prepend(addNewCard);
};

function handleDelete (event) {
  const card = event.target.closest('.place');
  card.remove();
};

function selectCard (event) {
  const select = event.target;
  select.classList.toggle('place__select_active');
};

function openFullScreen (item) {
  popupFullScreenElement.querySelector('.popup-fullscreen__image').src = item.link;
  popupFullScreenElement.querySelector('.popup-fullscreen__title').textContent = item.name;
  popupFullScreenElement.classList.add('popup-fullscreen_opened');
  
};

function openFullScreen (newCard) {
  popupFullScreenElement.querySelector('.popup-fullscreen__image').src = newCard.link;
  popupFullScreenElement.querySelector('.popup-fullscreen__title').textContent = newCard.name;
  popupFullScreenElement.classList.add('popup-fullscreen_opened');
};

function setEventListener (itemCard) {
  itemCard.querySelector('.place__trash').addEventListener('click', handleDelete);
  itemCard.querySelector('.place__select').addEventListener('click', selectCard);
};

function setEventListenerForAddCard (addNewCard) {
  addNewCard.querySelector('.place__trash').addEventListener('click', handleDelete);
  addNewCard.querySelector('.place__select').addEventListener('click', selectCard);
};

popupEditProfileOpenButtonElement.addEventListener('click', openPopup);
popupEditProfileCloseButtonElement.addEventListener('click', closePopup);
popupAddCardOpenButtonElement.addEventListener('click', openPopup);
popupAddCardCloseButtonElement.addEventListener('click', closePopup);

popupFullScreenCloseButtonElement.addEventListener('click', closePopup);

popupEditProfileElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddCardElement.addEventListener('click', closePopupByClickOnOverlay);


formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);