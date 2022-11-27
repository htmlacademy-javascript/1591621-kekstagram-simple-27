const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPictures = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();
  similarPictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.append(pictureElement);
  });

  picturesContainer.append(similarListFragment);
};

export { createPictures };
