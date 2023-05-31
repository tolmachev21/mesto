import './index.css';

import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import {popupEditProfileElement, 
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
  api} from '../scripts/utils/constants.js'

const profileEditFormValidator = new FormValidator(ValidationConfig, formEditProfileElement);
const addCardFormValidator = new FormValidator(ValidationConfig, formAddCardElement);
const editAvatarFormValidator = new FormValidator(ValidationConfig, formEditAvatarElement);  

profileEditFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

//
const openingFullScreenImage = new PopupWithImage(popupFullScreenElement);
openingFullScreenImage.setEventListeners();

const openingDeleteCard = new PopupDeleteCard(popupDeleteCardElement, ({card, cardId}) => {
  openingDeleteCard.renderLoading();
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard();
      openingDeleteCard.close();
    })
    .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
    .finally(() => openingDeleteCard.setDefaultText())
});
openingDeleteCard.setEventListeners();

// Создание готовой карточки через template
function createCard(card) {
  const cardElement = new Card(card, '.template__item', openingFullScreenImage.open, openingDeleteCard.open, (selectElement, cardId) => {
    if (selectElement.classList.contains('place__select_active')) {
      api.deleteLikeCard(cardId)
        .then(res => {
          cardElement.toggleLike(res.likes)
        })
        .catch((error) => {`Ошибка при удалении лайка ${error}`})
    } else {
      api.addLikeCard(cardId)
        .then(res => {
          cardElement.toggleLike(res.likes)
        })
        .catch((error) => {`Ошибка при добавлении лайка ${error}`})
    }
  });
  return cardElement.generateCard();
};

//
const section = new Section((element) => {
    section.addItemAppend(createCard(element))
  }, '.places'
);

// Отвечает за информацию о пользователе на странице
const userInfo = new UserInfo({userNameSelector: profileNameElement, userJobSelector: profileJobElement, userAvatarSelector: profileAvatarElement})

// 
const popupProfile = new PopupWithForm(popupEditProfileElement, (data) => {
  popupProfile.renderLoading();
  api.editUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({user: res.name, job: res.about, avatar: res.avatar})
      popupProfile.close();
    })
    .catch((error) => {`Ошибка при обновлении аватара ${error}`})
    .finally(() => {popupProfile.setDefaultText()})
});
popupProfile.setEventListeners();

// 
const popupCard = new PopupWithForm(popupAddCardElement, (data) => {
  popupCard.renderLoading();
  Promise.all([api.getUserInfo(), api.addNewCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.ownId = dataUser._id;
      section.addItemPrepend(createCard(dataCard));
      popupCard.close();
    })
    .catch((error) => {`Ошибка при добавлении карточки ${error}`})
    .finally(() => {popupCard.setDefaultText()})
});
popupCard.setEventListeners();

const popupAvatar = new PopupWithForm(popupEditAvatarElement, (data) => {
  popupAvatar.renderLoading();
  api.editUserAvatar(data)
    .then((res) => {
      userInfo.setUserInfo({user: res.name, job: res.about, avatar: res.avatar});
      popupAvatar.close();
    })
    .catch((error) => {`Ошибка при обновлении аватара ${error}`})
    .finally(() => {popupAvatar.setDefaultText()})
});
popupAvatar.setEventListeners();

// Слушатели на открытие попапов
popupEditProfileOpenButtonElement.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

popupAddCardOpenButtonElement.addEventListener('click', () => {
  popupCard.open();
});

popupEditAvatarOpenButtonElement.addEventListener('click', () => {
  popupAvatar.open();
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach((item) => item.ownId = dataUser._id);
    userInfo.setUserInfo({user: dataUser.name, job: dataUser.about, avatar: dataUser.avatar});
    section.renderItems(dataCard);
  })
  .catch((error) => {`Ошибка при отрисовке карточек ${error}`})