export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._title = data.name;
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

  _handlerSelectCard(event) {
    const select = event.target;
    select.classList.toggle('place__select_active');
  };

  _setEventListeners() {
    this._element.querySelector('.place__trash').addEventListener('click', () => {this._handlerDeleteCard(event)});
    this._element.querySelector('.place__select').addEventListener('click', () => {this._handlerSelectCard(event)});
    this._element.querySelector('.place__image').addEventListener('click', () => {this._handleCardClick()});
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place__image').src = this._image;

    return this._element;
  };
};