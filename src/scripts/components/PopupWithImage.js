import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
	constructor(popup) {
		super(popup);
		this._imageElement = this._popup.querySelector('.popup__image');
		this._imageSubtitle = this._popup.querySelector('.popup__subtitle');
	};
	
	open(data) {
		super.open();
		this._imageElement.src = data.link;
		this._imageElement.alt = `Изображение ${data.title}`;
		this._imageSubtitle.textContent = data.title;
	};
};