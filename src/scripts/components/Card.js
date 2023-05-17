export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardTemplateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

      return cardTemplateElement;
  };

  _handlerDeleteCard() {
    this._element.remove();
    this._element = null;
  };

  _handlerSelectCard() {
    this._selectElement.classList.toggle('place__select_active');
  };

  _setEventListeners() {
    this._trashElement = this._element.querySelector('.place__trash');
    this._selectElement = this._element.querySelector('.place__select');
    this._imageElement = this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title')
    this._trashElement.addEventListener('click', () => {this._handlerDeleteCard()});
    this._selectElement.addEventListener('click', () => {this._handlerSelectCard()});
    this._imageElement.addEventListener('click', () => {this._handleCardClick()});
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._titleElement.textContent = this._title;
    this._imageElement.src = this._image;

    return this._element;
  };
};