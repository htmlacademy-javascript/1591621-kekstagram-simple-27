import { resetScale } from './scale.js';
import { resetEffect,form } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage, onMessageEscKeydown} from './message.js';

const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const formButton = document.querySelector('img-upload__submit');

const pristine = new Pristine (form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error-text',
});

const unBlockSubmitButton = () => {
  formButton.disabled = false;
  formButton.textContent = 'Опубликовать';
};

const blockSubmitButton = () => {
  formButton.disabled = true;
  formButton.textContent = 'Публикуем..';
};

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onMessageEscKeydown);
};

const closeModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onMessageEscKeydown);
};

fileField.addEventListener('change', (evt) => {
  evt.preventDefault();
  showModal();
}
);

cancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

const onUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unBlockSubmitButton();
          showSuccessMessage();
        },
        (text) => {
          showErrorMessage(text);
          unBlockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { onUserFormSubmit, closeModal };
