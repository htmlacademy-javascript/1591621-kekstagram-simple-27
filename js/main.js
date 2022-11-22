import { createPictures } from './create-pictures.js';
import { onUserFormSubmit, closeModal } from './form.js';
import './scale.js';
import './effect.js';
import { getData } from './api.js';
import './message.js';
import './utils';

const PHOTOS_COUNT = 25;

const getSuccess = (photos) => {
  createPictures(photos.slice(0, PHOTOS_COUNT));
};
getData(getSuccess);

onUserFormSubmit(closeModal);
