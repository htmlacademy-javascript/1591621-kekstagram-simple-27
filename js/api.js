import { showAlert } from './util.js';

const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_URL)
    .then((responce) => responce.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка');
    });};

const postData = (onSuccess, onFail, body) => {
  fetch(POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((responce) => {
      if (responce.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => onFail());
};

export {getData, postData};
