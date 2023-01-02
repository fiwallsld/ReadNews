'use strict';

const newsPerPage = document.getElementById('input-page-size');
const inputCategory = document.getElementById('input-category');
const btnCategory = document.getElementById('btn-submit');

//--------Check current user, add get current user value
checkCurrentUser();

btnCategory.addEventListener('click', () => {
    if (newsPerPage.value) {
        let num = Number.parseInt(newsPerPage.value);

        //-----Check input number with maximum is 100------
        if (num > 100) {
            alert('News per page must be less than 100!!');
            newsPerPage.value = '';
            return;
        }

        //-------Get news value for currentUser------
        currentUser.numNewsPerPage = num;
        currentUser.category = inputCategory.value;

        saveToStorage(KEY_CURRENT_USER, currentUser);

        //-------Update userArray and save to LocalStorage------
        let index = userArr.findIndex(user => user.username === currentUser.username);
        userArr[index] = parseUser(currentUser);
        saveToStorage(KEY, userArr);

        alert('Setting successfully');
    } else {
        alert('Please put news per page!!!');
    }
});
