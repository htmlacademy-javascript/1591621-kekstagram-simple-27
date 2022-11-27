<<<<<<< HEAD
import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';
import { resetEffect, createSlider, updateSlider, onSliderUpdate, onPictureFormChange } from './effects.js';
import { postData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const body = document.body;
const form = document.querySelector('#upload-select-image');
const uploadPhoto = document.querySelector('#upload-file');
=======
import { resetScale } from './scale.js';
import { resetEffect,form } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage, onMessageEscKeydown} from './message.js';
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1

const overlay = document.querySelector('.img-upload__overlay');
const onCanselButton = document.querySelector('.img-upload__cancel');
const effectSlider = document.querySelector('.effect-level__slider');
const submitButton = form.querySelector('.img-upload__submit');

<<<<<<< HEAD
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description-text',
});

const clearErrorMessages = () => {
  const errorMessage = document.querySelector('pristine-error');
  if(errorMessage) {
    errorMessage.innerHTML = '';
  }
};

const onEditorEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal() {
  form.reset();
  clearErrorMessages();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditorEscKeydown);
  onCanselButton.removeEventListener('click', closeModal);
  uploadPhoto.value = '';
  resetScale();
  resetEffect();
}

const onBlockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const onUnblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const initFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid) {
      onBlockSubmitButton();
      postData (
        () => {
          onSuccess();
          onUnblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          onUnblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }});
};
const initUploadPhoto = () => {
  uploadPhoto.addEventListener('change', () => {
    overlay.classList.remove('hidden');
    body.classList.add('modal-open');
    createSlider();
    initScale();
    updateSlider();

    form.addEventListener('change', onPictureFormChange);
    effectSlider.noUiSlider.on('update', onSliderUpdate);
    document.addEventListener('keydown', onEditorEscKeydown);
    onCanselButton.addEventListener('click', closeModal);
    initFormSubmit(closeModal);
  });
};

export {initUploadPhoto, closeModal};

/*import { resetScale } from './scale.js';
import { resetEffect,form } from './effect.js';
import { postData } from './api.js';
//import { showSuccessMessage, showErrorMessage, onMessageEscKeydown} from './message.js';

const uploadButton = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeButton = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const submitButton = imageForm.querySelector('#upload-submit');
const imagePreview = document.querySelector('.img-upload__preview');
const documentBody = document.querySelector('body');

=======
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
const pristine = new Pristine (form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error-text',
});

const disableSubmitButton = () => {
  submitButton.textContent = 'Опубликовать';
  submitButton.disabled = true;
};

export const enableSubmitButton = () => {
  submitButton.textContent = 'Опубликовать';
  submitButton.disabled = false;
};

export const imageFormEditClickHandler = () => {
  imageFormEdit.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  imageForm.reset();
  resetEffect();
  resetScale;
};

const imageFormEditKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    imageFormEditClickHandler();
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  disableSubmitButton();
  const formData = new FormData(evt.target);
  postData(formData, onSuccess, onError);
};

const uploadChangeButtonHandler = () => {
  imageForm.addEventListener('keydown', imageFormEditKeydownHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeButton.addEventListener('click', imageFormEditClickHandler);
  imageFormEdit.classList.remove('hidden');
  documentBody.classList.add('modal-open');
};

uploadButton.addEventListener('change', uploadChangeButtonHandler);

/*
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
<<<<<<< HEAD
*/
=======

export { onUserFormSubmit, closeModal };
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
