/*eslint-disable no-alert*/

const SIMILAR_POST_COUNT = 25;
const DESCRIPTION = [
  'фото кота',
  'фото собаки',
  'фото девушки с цветами',
  'фото праздничного торта',
];

const getRandomIntInclusive = (min, max) => {
  if (min < 0) {
    alert('Поменяйте первый параметр, значение минимума');
    return NaN;
  }
  if (max < 0) {
    alert('Поменяйте второй параметр, значение максимума');
    return NaN;
  }
  if (max <= min) {
    alert('Поменяйте один из параметров, чтобы минимум был меньше максимума');
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};
const createPost = () => (
  { 
    description: DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200),
  }
);

const getsimilarPosts = () => {
   const similarPosts = Array.from({length: SIMILAR_POST_COUNT}, createPost);
   const result = similarPosts.map((item,index) => ({ ...item, id: index + 1, url: `photos/${index + 1}.jpg`}));
  return result;
}

getsimilarPosts();


/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  http://kodesource.top/javascript/form/string-length.php
*/
