import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, renderer) {
        super(popupSelector);
        this._renderer = renderer;

    };

    close() {
        super.close();
        // this._popup.querySelectorAll('.popup__input').value = '';
    };

    _getInputValues() {

    };

    setEventListeners() {
        super.setEventListeners();
        this._getInputValues(); 
        this._popup.querySelector('.popup__form').addEventListener('submit', () => {this._renderer(event)});
    };


};