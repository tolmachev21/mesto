import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
 constructor(popup, renderer) {
   super(popup);
   this._renderer = renderer;
   this._submitButton = this._form.querySelector('.popup__submit-button');
   this._defaultTextButton =  this._submitButton.textContent;
 }

 setEventListeners() {
   super.setEventListeners();
   this._form.addEventListener('submit', (event) => {
    event.preventDefault();
    this._renderer({card: this._element, cardId: this._cardId});
   });
 }

 open = ({card, cardId}) => {
  super.open();
  this._element = card;
  this._cardId = cardId;
 }

 setDefaultText() {
  this._submitButton.textContent = this._defaultTextButton;
 }

 renderLoading() {
  this._submitButton.textContent = `${this._submitButton.textContent}...`
 }
}