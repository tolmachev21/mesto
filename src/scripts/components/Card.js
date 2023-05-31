export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteCard, changeLikes) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._image = data.link;
    this._ownId = data.ownId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._likesLength = data.likes.length;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._changeLikes = changeLikes;
  };

  _getTemplate() {
    const cardTemplateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

      return cardTemplateElement;
  };

  _handlerDeleteCard = () => {
    this._handleDeleteCard({card: this, cardId: this._cardId});
  };

  _handlerSelectCard = () => {
    this._changeLikes(this._selectElement, this._cardId)
  };

  _handlerCardClick = () => {
    this._handleCardClick({title: this._title, link: this._image});
  }

  _displayTrashButton() {
    if (this._ownerId === this._ownId ) {
      this._trashElement.style.display = 'block';
    } else {
      this._trashElement.style.display = 'none';
    }
  }

  _displaySelectStatus() {
    this._likes.forEach(user => {
      if (user._id === this._ownId) {
        this._selectElement.classList.add('place__select_active');
        return;
      }
    })
    this._counterElement.textContent = this._likesLength;
  }

  _setEventListeners() {
    this._trashElement = this._element.querySelector('.place__trash');
    this._selectElement = this._element.querySelector('.place__select');
    this._imageElement = this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._counterElement = this._element.querySelector('.place__counter')
    this._trashElement.addEventListener('click', this._handlerDeleteCard);
    this._selectElement.addEventListener('click', this._handlerSelectCard);
    this._imageElement.addEventListener('click', this._handlerCardClick);
  };

  toggleLike(likes) {
    this._selectElement.classList.toggle('place__select_active');
    this._counterElement.textContent = likes.length;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._displayTrashButton();
    this._displaySelectStatus();

    this._titleElement.textContent = this._title;
    this._imageElement.src = this._image;

    return this._element;
  };
};