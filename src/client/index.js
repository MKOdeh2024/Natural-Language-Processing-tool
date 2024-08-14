import './styles/main.scss'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/handleSubmit';
import { checkForName } from './js/nameChecker';

alert("I EXIST")

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('url-form');
    form.addEventListener('submit', handleSubmit);
});

alert("I EXIST")

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


export {
    handleSubmit,
    checkForName
};