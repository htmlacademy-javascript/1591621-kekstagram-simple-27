<<<<<<< HEAD
import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const onSuccessButton = successMessageTemplate.querySelector('.success__button');
const onErrorButton = errorMessageTemplate.querySelector('.error__button');
=======
import { closeModal } from './form.js';

const successMessageTemplate = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error')
  .content.querySelector('.error');
const bodyElement = document.querySelector('body');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onErrorButtonClick = () => {
  hideMessage();
};

const onSuccessButtonClick = () => {
  hideMessage();
};
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1

const onOverlayClick = (evt) => {
  const hiddenPopupOverlay = document.querySelector('.error');
  if (evt.target === hiddenPopupOverlay) {
    evt.preventDefault();
    hiddenPopupOverlay.remove();
  }
  const hiddenPopupDoneOverlay = document.querySelector('.success');
  if (evt.target === hiddenPopupDoneOverlay) {
    evt.preventDefault();
    hiddenPopupDoneOverlay.remove();
  }
};

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
<<<<<<< HEAD
    closeMessage();
=======
    const hiddenPopup = document.querySelector('.error');
    if (!hiddenPopup) {
      closeModal();
    } else {hiddenPopup.remove();
    }
    const hiddenPopupDone = document.querySelector('.success');
    if (hiddenPopupDone) {
      hiddenPopupDone.remove();
    }
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
  }
};

const onOverlayClick = (evt) => {
  if(!evt.target.classList.contains('error__inner')) {
    closeMessage();
  }
};

const closeButtonClick = () => {
  closeMessage();
};

const showSuccessMessage = () => {
<<<<<<< HEAD
  const successMessage = successMessageTemplate.cloneNode(true);
=======
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  onSuccessButton.addEventListener('click', closeButtonClick);
  document.body.append(successMessage);
};

const showErrorMessage = () => {
<<<<<<< HEAD
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  onErrorButton.addEventListener('click', closeButtonClick);
  document.body.append(errorMessage);
};

function closeMessage() {
  const message =
    document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('click',onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown, true);
}

export {showSuccessMessage, showErrorMessage};
=======
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click',onOverlayClick);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown',onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
}

export { showSuccessMessage, showErrorMessage, onMessageEscKeydown };
>>>>>>> e776eaf375c7ee76faadee83446c966167a8ecb1
