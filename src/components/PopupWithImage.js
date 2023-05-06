import Popup from './Popup.js';
import {popupFullScreenImageElement, popupFullScreenTitleElement} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);

        this._title = data.name;
        this._image = data.link;
    };

    open() {
        super.open();
        popupFullScreenImageElement.src = this._image;
        popupFullScreenImageElement.alt = this._title;
        popupFullScreenTitleElement.textContent = this._title;
    };

};