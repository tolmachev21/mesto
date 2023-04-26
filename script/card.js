import {popupFullScreenElement, popupFullScreenImageElement, popupFullScreenTitleElement, openPopup} from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._image = data.link;
  };

  _getTemplate() {
    const cardTemplateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

      return cardTemplateElement;
  };

  _openFullScreen() {
    popupFullScreenImageElement.src = this._image;
    popupFullScreenTitleElement.textContent = this._title;
    popupFullScreenImageElement.alt = this._title;
    openPopup(popupFullScreenElement);
  };

  _handlerDeleteCard() {
    this._element.remove();
    this._element = null;
  };

  _handlerSelectCard(event) {
    const select = event.target;
    select.classList.toggle('place__select_active');
  };

  _setEventListeners() {
    this._element.querySelector('.place__trash').addEventListener('click', () => {this._handlerDeleteCard(event)});
    this._element.querySelector('.place__select').addEventListener('click', () => {this._handlerSelectCard(event)});
    this._element.querySelector('.place__image').addEventListener('click', () => {this._openFullScreen()});
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place__image').src = this._image;

    return this._element;
  };
};

export {Card};