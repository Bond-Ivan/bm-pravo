import { ru } from '../../translations/ru.js';
import { en } from '../../translations/en.js';
import { cn } from '../../translations/cn.js';

export function switchLanguage(language) {
    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
        const key = el.id;
        if ({
            ru,
            en,
            cn,
        }[language][key]) {
            el.textContent = {
                ru,
                en,
                cn,
            }[language][key];
        }
    });


    const languageButton = document.getElementById("language-button");
    languageButton.textContent = language.toUpperCase();
}

document.querySelectorAll("#language-dropdown a").forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const language = event.target.getAttribute("data-value");
        switchLanguage(language);

        const dropdownContent = document.getElementById("language-dropdown");
        dropdownContent.classList.remove("show");
    });
});

document.getElementById("language-button").addEventListener("click", () => {
    const dropdownContent = document.getElementById("language-dropdown");
    dropdownContent.classList.toggle("show");
});

document.addEventListener("click", (event) => {
    const dropdownContent = document.getElementById("language-dropdown");
    const languageButton = document.getElementById("language-button");

    if (!languageButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const defaultLanguage = 'ru';
    switchLanguage(defaultLanguage);
});