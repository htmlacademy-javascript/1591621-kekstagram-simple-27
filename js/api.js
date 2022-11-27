<<<<<<< HEAD
import { showAlert } from './util.js';
=======
import { showAlert } from './utils';
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1

const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_URL)
<<<<<<< HEAD
    .then((responce) => responce.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка');
    });};
=======
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки данных');
    })
    .then((photos) => onSuccess(photos))
    .catch((error) =>
      showAlert(error.message));
};
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1

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
<<<<<<< HEAD
      onFail();
    })
    .catch(() => onFail());
=======
      throw new Error('Произошла ошибка отправки данных');
    })
    .catch(() => {
      onFail('Произошла ошибка отправки данных');
    });
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
};

export {getData, postData};
