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
const popupFullScreenCloseButtonElement = popupFullScreenElement.querySelector('.popup__close-button');
const popupFullScreenImageElement = popupFullScreenElement.querySelector('.popup-fullscreen__image');
const popupFullScreenTitleElement = popupFullScreenElement.querySelector('.popup-fullscreen__title');

// Переменная для всех кнопок-кретистиков
const buttonCloseList = document.querySelectorAll('.popup__close-button');

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

// Специальные функции для закрытия каждого попапа
function closeEditPorfilePopup () {
  closePopup(popupEditProfileElement);
}; 

function closeAddCardPopup () {
  closePopup(popupAddCardElement);
};

function closeFullScreenPopup () {
  closePopup(popupFullScreenElement);
};

// Закрытие попапов по клику на оверлей и на клавишу ESC
function closePopupByClickOnOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(event.target);
};

function closePopupByClickOnKeyEsape (event) {
  const popupOpen = document.querySelector('.popup_opened');
  if (event.key === 'Escape') {
    closePopup(popupOpen);
  };  
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
  setEventListenerForCards(itemCard);
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
  openPopup(popupFullScreenElement);
};

// Функция слушателей всех событий для каждой карточки
function setEventListenerForCards (itemCard) {
  itemCard.querySelector('.place__trash').addEventListener('click', handleDelete);
  itemCard.querySelector('.place__select').addEventListener('click', selectCard);
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

// Единый слушать на закрытие всех попапов (кнопкой-крестиком и оверлеем)
buttonCloseList.forEach(button => {
  const popup = button.closest('.popup');
  popup.addEventListener('mousedown', closePopupByClickOnOverlay);
  button.addEventListener('click', () => closePopup(popup));
});

document.addEventListener('keydown', closePopupByClickOnKeyEsape)

// Слушатели отправки формы
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);