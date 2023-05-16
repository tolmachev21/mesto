export default class Section {
    constructor({items, renderer}, placesContainerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._placesContainerSelector = document.querySelector(placesContainerSelector);
    };

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    };

    addItem(element) {
        this._placesContainerSelector.prepend(element);
    };
};