'use strict';

//-------When btn submit call login function
btnSubmit.addEventListener('click', login);

//------When in input password box, press enter to auto login
inputPassword.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        login();
    }
});

// ---------Children function

function login() {
    const data = {
        username: inputUsername.value,
        password: inputPassword.value,
    };

    if (!validateLogin(data)) return;

    currentUser = validateLogin(data);
    saveToStorage(KEY_CURRENT_USER, currentUser);

    window.location.href = '../index.html';
}

const validateLogin = function (data) {
    if (
        validateLogin.isUsername(data.username) &&
        validateLogin.isPassword(data.password)
    ) {
        const user = validateLogin.check(data);
        if (!user) {
            alert('Please check your username or password!!!');
            return;
        }
        return user;
    }
};

//-------Check username with user array data
validateLogin.check = function (data) {
    return userArr.find(
        user => user.username === data.username && user.password === data.password
    );
};

validateLogin.isUsername = function (username) {
    if (!username.trim()) {
        alert('Please enter username!');
        inputUsername.value = '';
        return false;
    }
    return true;
};

validateLogin.isPassword = function (password) {
    if (!password.trim()) {
        alert('Please enter password!');
        inputPassword.value = '';
        return false;
    }
    return true;
};
