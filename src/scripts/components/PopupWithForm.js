import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(popupSelector, renderer) {
		super(popupSelector);
		this._renderer = renderer;
		this._form = this._popup.querySelector('.popup__form');
		this._inputList = this._form.querySelectorAll('.popup__input');
	};

	close() {
			this._form.reset();
			super.close();
	
	};

	_getInputValues() {
		const inputValues = {};
		this._inputList.forEach(input => {
			inputValues[input.name] = input.value;
		});
		return inputValues;
	};

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (event) => {
			event.preventDefault();
			this._renderer(this._getInputValues());
			this.close();
		});
	};
};