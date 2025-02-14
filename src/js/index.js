"use strict";

import * as language from './lang.js';
import * as swiper from './swiper.js';
import * as form from './form.js';
import * as links from './links.js';

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button');
    const menu = document.getElementById('menu');
    const body = document.body;

    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('active');
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            burgerButton.classList.add('hidden');
            body.classList.add('no-scroll');
        } else {
            burgerButton.classList.remove('hidden');
            body.classList.remove('no-scroll');
        }
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
            burgerButton.classList.remove('active');
            menu.classList.remove('active');
            burgerButton.classList.remove('hidden');
            body.classList.remove('no-scroll');
        }
    });

    menu.addEventListener('click', function (event) {
        const targetLi = event.target.closest('li'); // Находим ближайший элемент <li>
        if (targetLi) {
            const link = targetLi.querySelector('a'); // Находим ссылку внутри <li>
            if (link) {
                // Закрываем меню
                burgerButton.classList.remove('active');
                menu.classList.remove('active');
                burgerButton.classList.remove('hidden');
                body.classList.remove('no-scroll');
                // Переход по ссылке
                window.location.href = link.href; // Переход по ссылке
            }
        }
    });
});