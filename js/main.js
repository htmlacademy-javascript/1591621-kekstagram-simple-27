/*eslint-disable no-alert*/
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
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomIntInclusive(1,10);

const COMMENT_STRING = 'мопс';
const getCommentlength = (COMMENT_STRING, mnlen, mxlen) => {
  if (typeof mnlen === 'number' && typeof mxlen === 'number' && typeof COMMENT_STRING === 'string') {
    return true;
  }
  else {
    return false;
  }
  if (COMMENT_STRING.length < mnlen || COMMENT_STRING.length > mxlen) {
    return false;
  }
  else {
    return true;
  }
};
getCommentlength(COMMENT_STRING,2,4);
/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  http://kodesource.top/javascript/form/string-length.php
*/