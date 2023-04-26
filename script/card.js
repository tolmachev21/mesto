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
    const popupFullscreen = document.querySelector('.popup-fullscreen');
    popupFullscreen.querySelector('.popup-fullscreen__image').src = this._image;
    popupFullscreen.querySelector('.popup-fullscreen__title').textContent = this._title;
    popupFullscreen.querySelector('.popup-fullscreen__image').alt = this._title;
    popupFullscreen.classList.add('popup_opened');
  };

  _handlerDeleteCard(event) {
    const trash = event.target.closest('.place');
    trash.remove();
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