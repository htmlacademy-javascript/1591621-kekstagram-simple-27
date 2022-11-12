import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const pristine = new Pristine (form,{}, true);


const uploadOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

function openUploadOverlay() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', uploadOverlayEscKeydown);
}

uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openUploadOverlay();
  uploadFile.value = '';
}
);

function closeUploadOverlay() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', uploadOverlayEscKeydown);
  uploadFile.value = '';
}

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUploadOverlay();
});

const isValid = pristine.validate();

