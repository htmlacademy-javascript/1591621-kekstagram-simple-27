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
  if (isEscEvent(evt)) {
    evt.preventDefault();
    const hiddenPopup = document.querySelector('.error');
    if (!hiddenPopup) {
      closeModal();
    } else {hiddenPopup.remove();
    }
    const hiddenPopupDone = document.querySelector('.success');
    if (hiddenPopupDone) {
      hiddenPopupDone.remove();
    }
  }
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  document.addEventListener('click', onOverlayClick);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
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
