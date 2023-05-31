export default class Section {
    constructor(renderer, placesContainer) {
        this._renderer = renderer;
        this._placesContainer = document.querySelector(placesContainer);
    };

    renderItems(dataCard) {
        dataCard.forEach((item) => {
            this._renderer(item);
        });
    };

    addItemPrepend(elementDOM) {
        this._placesContainer.prepend(elementDOM);
    };

    addItemAppend(elementDOM) {
        this._placesContainer.append(elementDOM);
    };
};