export default class Section {
    constructor({items, renderer}, placesContainer) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._placesContainer = document.querySelector(placesContainer);
    };

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    };

    addItem(element) {
        this._placesContainer.prepend(element);
    };
};