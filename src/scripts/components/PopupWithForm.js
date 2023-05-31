import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(popup, renderer) {
		super(popup);
		this._renderer = renderer;
		this._inputList = this._form.querySelectorAll('.popup__input');
		this._submitButton = this._form.querySelector('.popup__submit-button');
		this._defaultTextButton =  this._submitButton.textContent;
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

	setInputValues(userInfoObj) {
		this._inputList.forEach(input => {
			input.value = userInfoObj[input.name];
		});
	};

	setDefaultText() {
	 this._submitButton.textContent = this._defaultTextButton;
	}

	renderLoading() {
		this._submitButton.textContent = `${this._submitButton.textContent}...`
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (event) => {
			event.preventDefault();
			this._renderer(this._getInputValues());
		});
	};
};