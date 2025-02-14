import { send } from "emailjs-com";

const formElement = document.querySelector('.feedback__form');

const formButton = document.querySelector('.feedback__button');
const loader = document.querySelector('.loader');

const inputTel = document.querySelector('.feedback__input-tel');
const inputEmail = document.querySelector('.feedback__input-email');
const inputName = document.querySelector('.feedback__input-name');

const inputTelError = document.querySelector('.feedback__error-tel');
const inputEmailError = document.querySelector('.feedback__error-email');
const inputNameError = document.querySelector('.feedback__error-name');

const modalSuccess = document.querySelector('.modal-success__box');
const modalError = document.querySelector('.modal-error__box');

function validateForml() {
    let errors = 0;

    if (validateEmail() === false) {
        errors = errors + 1;
    }

    if (validateTel() === false) {
        errors = errors + 1;
    }

    if (validateName() === false) {
        errors = errors + 1;
    }
    if (errors > 0) {
        return false;
    }

    return true;
};

function validateEmail() {
    if (inputEmail.value.trim() === '') {
        inputEmailError.classList.add('feedback__error-message--active');
        return false;
    }

    return true;
};

function validateTel() {

    if (Number(inputTel.value) == 0) {
        inputTelError.classList.add('feedback__error-message--active');
        return false;
    }

    return true;
};

function validateName() {
    if (inputName.value.trim() === '') {
        inputNameError.classList.add('feedback__error-message--active');
        return false;
    }

    return true;
};

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForml() === false) {
        return;
    };
    formButton.classList.add('feedback__button--active');
    loader.classList.add('loader--active');
    send(
        'service_cbt8xuh',
        'template_1z3drz4',
        {
            from_name: inputName.value,
            tel: inputTel.value,
            email: inputEmail.value,
        },
        'wX9c1TET_SAhF_j7Q'
    ).then(() => {
        inputTel.value = '';
        inputEmail.value = '';
        inputName.value = '';
        inputNameError.classList.remove('feedback__error-message--active');
        inputTelError.classList.remove('feedback__error-message--active');
        inputEmailError.classList.remove('feedback__error-message--active');

        modalSuccess.classList.add('modal__box--active');

        formButton.classList.remove('feedback__button--active');
        loader.classList.remove('loader--active');
        setTimeout(() => {
            modalSuccess.classList.remove('modal__box--active');
        }, 3000)
    }).catch(() => {
        formButton.classList.remove('feedback__button--active');
        loader.classList.remove('loader--active');
        modalError.classList.add('modal__box--active');
        setTimeout(() => {
            modalError.classList.remove('modal__box--active');
        }, 3000)
    });
}); 