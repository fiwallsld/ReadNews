'use strict';

const welcomeEl = document.getElementById('welcome-message');
const loginEl = document.getElementById('login-modal');
const mainContentEl = document.getElementById('main-content');
const btnLogout = document.getElementById('btn-logout');

currentUser = getFromStorage(KEY_CURRENT_USER);

if (currentUser) {
    welcomeEl.innerText = `Welcome ${currentUser.firstName}`;
    loginEl.style.display = 'none';
} else {
    loginEl.style.display = 'block';
    mainContentEl.style.display = 'none';
}

btnLogout.addEventListener('click', () => {
    currentUser = '';
    localStorage.removeItem(KEY_CURRENT_USER);
    mainContentEl.style.display = 'none';
    loginEl.style.display = 'block';
});
