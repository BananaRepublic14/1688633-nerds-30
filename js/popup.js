const link = document.querySelector('.footer-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.button-popup-close');
const form = popup.querySelector('form');
const popupName = popup.querySelector('[name="name"]');
const popupEmail = popup.querySelector('[name="email"]');
const popupText = popup.querySelector('[name="text"]');

let isStorageSupport = true;
const storage = '';

try {
  storage = localStorage.getItem('popupName');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();  
  popup.classList.add('popup-show');
  
  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

popupClose.addEventListener('click', function (evt) {
   evt.preventDefault();
   popup.classList.remove('popup-show');
   popup.classList.remove('popup-error');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup-show');
    popup.classList.remove('popup-error');
  }
});

form.addEventListener('submit', function (evt) {
  if (!popupName.value || !popupEmail.value || !popupText.value) {
    evt.preventDefault();
    popup.classList.remove('popup-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup-error');
    // alert('Пожалуйста, заполните все поля!');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('popupName', popupName.value);
    }
  }
});