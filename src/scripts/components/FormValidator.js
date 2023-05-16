export default class FormValidator {
  constructor(validationConfig, validationForm) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector; 
    this._invalidButtonClass = validationConfig.invalidButtonClass;
    this._validButtonClass = validationConfig.validButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._form = validationForm;
    this._formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._formButton = this._form.querySelector(this._submitButtonSelector);
  };

  _setEventListenerForForm() {
    this._disableButton(this._formButton);
    this._formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        if (this._hasInvalidInput(this._formInputs)) {
          this._disableButton(this._formButton);
        } else {
          this._enableButton(this._formButton);
        };
      });
    });
  };

  _checkInputValidity(input) {
    const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      currentInputErrorContainer.textContent = "";
      input.classList.remove(this._inputErrorClass);
    } else {
      currentInputErrorContainer.textContent = input.validationMessage;
      input.classList.add(this._inputErrorClass);
    };
  };

  _hasInvalidInput() {
    return this._formInputs.some(item => !item.checkValidity());
  };

  _disableButton() {
    this._formButton.classList.add(this._invalidButtonClass);
    this._formButton.classList.remove(this._validButtonClass);
    this._formButton.setAttribute('disabled', true);
  };

  _enableButton() {
    this._formButton.classList.remove(this._invalidButtonClass);
    this._formButton.classList.add(this._validButtonClass);
    this._formButton.removeAttribute('disabled', true);
  };


  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._disableButton(this._formButton);
    })
    this._setEventListenerForForm();
  };
};