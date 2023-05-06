export default class Section {
    constructor({data, renderer}, placesContainerSelector) {
        this._renderedItems = data;
        this._renderer = renderer; 
        this._placesContainerSelector = document.querySelector(placesContainerSelector);
    };

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    };

    addItem(element) {
        this._placesContainerSelector.append(element);
    };


};