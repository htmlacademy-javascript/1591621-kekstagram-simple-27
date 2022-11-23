import { showAlert } from './utils';

const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_URL)
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

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      throw new Error('Произошла ошибка отправки данных');
    })
    .catch(() => {
      onFail('Произошла ошибка отправки данных');
    });
};

export { getData, sendData };
