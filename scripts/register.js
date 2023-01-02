'use strict';

// -------------------------------Handler----------------

btnSubmit.addEventListener('click', function () {
    const data = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        username: inputUsername.value,
        password: inputPassword.value,
        passwordConfirm: inputPasswordConfirm.value,
    };

    if (validate(data)) {
        userArr.push(parseUser(data));
        saveToStorage(KEY, userArr);

        alert('Register is successfully!!!');
        window.location.href = '../pages/login.html';
    }
});

//------------------Validate Function --------------------
function validate(data) {
    return (
        validate.isFirstName(data.firstName) &&
        validate.isLastName(data.lastName) &&
        validate.isUsername(data.username) &&
        validate.isPassword(data.password) &&
        validate.isPasswordConfirmed(data.passwordConfirm, data.password)
    );
}

//------------------ValidateChild function--------------------
validate.isFirstName = function (firstName) {
    if (!firstName.trim()) {
        alert('Please enter first name!');
        return false;
    }
    return true;
};

validate.isLastName = function (lastName) {
    if (!lastName.trim()) {
        alert('Please enter last name!');
        return false;
    }
    return true;
};

validate.isUsername = function (username) {
    if (!username.trim()) {
        alert('Please enter username!');
        return false;
    }
    if (checkUsername(username)) {
        alert('Username must be unique!');
        return false;
    }
    return true;
};

const checkUsername = function (username) {
    return userArr.find(user => user.username === username) !== undefined;
};

validate.isPassword = function (password) {
    if (!password.trim()) {
        alert('Please enter password!');
        return false;
    }
    if (password.length < 8) {
        alert('Password must be more than 8 characters!');
        return false;
    }
    return true;
};

validate.isPasswordConfirmed = function (passwordConfirmed, password) {
    if (!passwordConfirmed) {
        alert('Please enter password confirmed!');
        return false;
    }
    if (passwordConfirmed !== password) {
        alert('Password confirmed must be the same password!');
        return false;
    }
    return true;
};
