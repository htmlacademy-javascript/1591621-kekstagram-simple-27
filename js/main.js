<<<<<<< HEAD
import { createPictures } from './create_pictures.js';
import { initUploadPhoto } from './form.js';
import { getData } from './api.js';

const PICTURE_COUNT = 25;

getData((photos) => {
  createPictures(photos.slice(0, PICTURE_COUNT));
});

initUploadPhoto();
=======
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
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
