import {getsimilarPosts} from './data.js';

const createPhoto = () => {
  const photoTemplate = document.querySelector('#picture');
  photoTemplate.querySelector('.picture');

  const photos = getsimilarPosts();
  const photoListSection = document.querySelector('.pictures');
  const photosListFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments;
    photosListFragment.append(photo);
  });
  photoListSection.append(photosListFragment);
};
export {createPhoto};

