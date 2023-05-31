import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
	constructor(popup) {
		super(popup);
		this._imageElement = this._popup.querySelector('.popup__image');
		this._imageSubtitle = this._popup.querySelector('.popup__subtitle');
	};
	
	open = ({title, link}) => {
		super.open();
		this._imageElement.src = link;
		this._imageElement.alt = `Изображение ${title}`;
		this._imageSubtitle.textContent = title;
	};
};