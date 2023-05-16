export default class Popup {
	constructor(popupSelector) {
		this._popup = popupSelector;
	};

	open() {
		this._popup.classList.add('popup_opened');
		document.addEventListener('keydown', () => {this._handleEscClose(event)});
	};

	close() {
		this._popup.classList.remove('popup_opened');
		document.removeEventListener('keydown', () => {this._handleEscClose(event)});
	};

	_handleEscClose(event) {
		if (event.key === 'Escape') {
			this.close();
		};
	};

	setEventListeners() {
		this._popup.querySelector('.popup__close-button').addEventListener('click', () => {this.close()});
		this._popup.addEventListener('mousedown', (event) => {
			if (event.target !== event.currentTarget) {
				return;
			};
			this.close();})
	};
};