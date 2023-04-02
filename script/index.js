// Переменные для функции редактирования профиля 
const popupEditProfileElement = document.querySelector('.popup-edit-profile');
const popupEditProfileOpenButtonElement = document.querySelector('.profile__edit-button');
const popupEditProfileCloseButtonElement = popupEditProfileElement.querySelector('.popup__close-button');
const formEditProfileElement = popupEditProfileElement.querySelector('.popup__form');
const formSubmitEditProfileElement = formEditProfileElement.querySelector('.popup__submit-button');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');
const inputNameElement = formEditProfileElement.querySelector('.popup__input_field_name');
const inputJobElement = formEditProfileElement.querySelector('.popup__input_field_job');

// Переменные для функции добавления карточек 
const popupAddCardElement = document.querySelector('.popup-add-card');
const popupAddCardOpenButtonElement = document.querySelector('.profile__add-button')
const popupAddCardCloseButtonElement = popupAddCardElement.querySelector('.popup__close-button');
const formAddCardElement = popupAddCardElement.querySelector('.popup__form');
const formSubmitAddCardElement = formAddCardElement.querySelector('.popup__submit-button');
const inputPlaceElement = formAddCardElement.querySelector('.popup__input_field_place');
const inputLinkElement = formAddCardElement.querySelector('.popup__input_field_link');

// Переменные для функции создания карточек 
const itemTemplate = document.querySelector('.template__item').content; 
const places = document.querySelector('.places');

// Переменные для функции полноэкранного просмотра картинок
const popupFullScreenElement = document.querySelector('.popup-fullscreen');
const popupFullScreenCloseButtonElement = popupFullScreenElement.querySelector('.popup-fullscreen__close-button');
const popupFullScreenImageElement = popupFullScreenElement.querySelector('.popup-fullscreen__image');
const popupFullScreenTitleElement = popupFullScreenElement.querySelector('.popup-fullscreen__title');


// Универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
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

function openFullScreenPopup () {
  popupFullScreenElement.classList.add('popup-fullscreen_opened');
};

// Специальные функции для закрытия каждого попапа
function closeEditPorfilePopup () {
  closePopup(popupEditProfileElement);
}; 

function closeAddCardPopup () {
  closePopup(popupAddCardElement);
};

function closeFullScreenPopup () {
  popupFullScreenElement.classList.remove('popup-fullscreen_opened');
};

// Закрытие попапов по клику на оверлей
function closePopupByClickOnOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(event.target);
};

// Добавление первоначальных карточек из массива с данными
initialCards.forEach(renderIntialCards);

// Функция добавления созданной карточки в разметку
function renderIntialCards (newCard) {
  const card = createCard(newCard);
  places.append(card);
};

function renderAddedCard (newCard) {
  const card = createCard(newCard);
  places.prepend(card);
};

// Функция создания карточек (как первоначальных, так и добавленных)
function createCard (newCard) {
  const itemCard = itemTemplate.cloneNode(true);
  itemCard.querySelector('.place__title').textContent = newCard.name;
  itemCard.querySelector('.place__image').src = newCard.link;
  setEventListener(itemCard);
  itemCard.querySelector('.place__image').addEventListener('click', () => openFullScreen(newCard));
  return itemCard;
}; 

// Функция удаления картинок
function handleDelete (event) {
  const trash = event.target.closest('.place');
  trash.remove();
};

// Функция добавления картинок в избранное
function selectCard (event) {
  const select = event.target;
  select.classList.toggle('place__select_active');
};

// Функция откртытия просмотра картинки на весь экран
function openFullScreen (newCard) {
  popupFullScreenImageElement.src = newCard.link;
  popupFullScreenTitleElement.textContent = newCard.name;
  popupFullScreenImageElement.alt = newCard.name;
  openFullScreenPopup();
};

// Функция слушателей для первоначальных карточек
function setEventListener (itemCard) {
  itemCard.querySelector('.place__trash').addEventListener('click', handleDelete);
  itemCard.querySelector('.place__select').addEventListener('click', selectCard);
};

// Функция слушателей для добавленных карточек
function setEventListenerForAddCard (addNewCard) {
  addNewCard.querySelector('.place__trash').addEventListener('click', handleDelete);
  addNewCard.querySelector('.place__select').addEventListener('click', selectCard);
};

// Функция обрабочтика формы редактирования профиля
function handleFormEditProfileSubmit (event) {
  event.preventDefault();
  profileNameElement.textContent = inputNameElement.value;
  profileJobElement.textContent = inputJobElement.value;
  closeEditPorfilePopup();
}; 

// Функция обработчки формы добавления карты
function handleFormAddCardSubmit (event) {
  event.preventDefault();
  const addNewCard = {
    name: inputPlaceElement.value,
    link: inputLinkElement.value
  };
  renderAddedCard(addNewCard);
  closeAddCardPopup();
};

// Слушатели на открытие попапов
popupEditProfileOpenButtonElement.addEventListener('click', openEditProfilePopup);
popupAddCardOpenButtonElement.addEventListener('click', openAddCardPopup);

// Слушатели на закрытие попапов
popupEditProfileCloseButtonElement.addEventListener('click', closeEditPorfilePopup);
popupAddCardCloseButtonElement.addEventListener('click', closeAddCardPopup);
popupFullScreenCloseButtonElement.addEventListener('click', closeFullScreenPopup);

// Слушатели на закрытие попапов при клике на оверлей
popupEditProfileElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddCardElement.addEventListener('click', closePopupByClickOnOverlay);
popupFullScreenElement.addEventListener('click', closePopupByClickOnOverlay);

// Слушатели отправки формы
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);