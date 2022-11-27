const pictureContainer = document.querySelector('.container');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureFragment);
};

export {createPictures};
