const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  invalidButtonClass: 'popup__submit-button_state_invalid',
  validButtonClass: 'popup__submit-button_state_valid',
  inputErrorClass: 'popup__input_type_error'
}; 

// Валидация формы 
const enableValidation = ({formSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    setEventListenerForForm(form, rest);
  });
};

const setEventListenerForForm = (formToValidate, {inputSelector, submitButtonSelector, ...rest}) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disableButton(formButton, rest);
  
  formInputs.forEach((input) => {
    console.log(input);
      input.addEventListener('input', () => {
      checkInputValidity(input, rest);
      if (hasInvalidInput(formInputs)) {
          disableButton(formButton, rest);
      } else {
          enableButton(formButton, rest);
      }
      });
  });
};

const checkInputValidity = (input, {inputErrorClass}) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
      currentInputErrorContainer.textContent = "";
      input.classList.remove(inputErrorClass);
  } else {
      currentInputErrorContainer.textContent = input.validationMessage;
      input.classList.add(inputErrorClass);
  };
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.checkValidity());
};

const disableButton = (button, {invalidButtonClass, validButtonClass}) => {
  button.classList.add(invalidButtonClass);
  button.classList.remove(validButtonClass);
  button.setAttribute('disabled', true);
};

const enableButton = (button, {invalidButtonClass, validButtonClass}) => {
  button.classList.remove(invalidButtonClass);
  button.classList.add(validButtonClass);
  button.removeAttribute('disabled', true);
};

enableValidation(enableValidationConfig);