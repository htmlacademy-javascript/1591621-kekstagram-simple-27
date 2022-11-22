import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage} from './message.js';

const uploadForm = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const formButton = document.querySelector('img-upload__submit');

const pristine = new Pristine (uploadForm, {
  classTo: 'iimg-upload__text',
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
  document.addEventListener('keydown', onEscKeydown);
};

const closeModal = () => {
  uploadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
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
  uploadForm.addEventListener('submit', (evt) => {
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

export { onUserFormSubmit };
