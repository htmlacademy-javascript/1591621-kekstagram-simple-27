import {getRandomIntInclusive} from './util.js';

/*eslint-disable no-alert*/

const SIMILAR_POST_COUNT = 25;
const DESCRIPTION = [
  'фото кота',
  'фото собаки',
  'фото девушки с цветами',
  'фото праздничного торта',
];

const createPost = () => (
  { description: DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200),
  }
);

const getsimilarPosts = () => {
  const similarPosts = Array.from({length: SIMILAR_POST_COUNT}, createPost);
  const result = similarPosts.map((item,index) => ({ ...item, id: index + 1, url: `photos/${index + 1}.jpg`}));
  return result;
};
getsimilarPosts();
export {getsimilarPosts};
