let min;
let max;
let commentstring = "морс";
let mxlen;
let mnlen;

const getRandomIntInclusive = (min, max) => {
  if (min<0) {
    alert("Поменяйте первый параметр");
    return -1;
  }
  if (max<0) {
    alert("Поменяйте второй параметр");
    return -1;
  }
  if (max<=min) {
    alert("Поменяйте один из параметров, чтобы первый был меньше второго");
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

getRandomIntInclusive(1,10);

const getCommentlength = (commentstring, mnlen, mxlen) => {
  if (commentstring.length<mnlen || commentstring.length> mxlen) {
    return false;
  } else {
    return true;
  }
}

getCommentlength(commentstring,2,4);


/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
  http://kodesource.top/javascript/form/string-length.php

*/