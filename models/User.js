'use strict';

const inputFirstName = document.getElementById('input-firstname');
const inputLastName = document.getElementById('input-lastname');
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const inputPasswordConfirm = document.getElementById('input-password-confirm');
const btnSubmit = document.getElementById('btn-submit');

const KEY = 'USER_ARRAY';
const KEY_CURRENT_USER = 'CURRENT_USER';

class User {
    constructor(firstName, lastName, username, password, numNewsPerPage, category) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.numNewsPerPage = numNewsPerPage || 4;
        this.category = category || 'General';
    }

    async getApiNews(country, page) {
        try {
            const link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${this.category}&pageSize=${this.numNewsPerPage}&page=${page}&apiKey=c588ced60e9748de81c19664500a64ef`;
            const res = await fetch(link);
            if (!res.ok) throw new Error('Loading news failded! Please try again!!!');

            const data = await res.json();

            return {
                data: data.articles,
                total: data.totalResults,
            };
        } catch (err) {
            alert(err);
        }
    }

    async getApiSearch(keywords, page) {
        try {
            const link = `https://newsapi.org/v2/everything?q=${keywords}&sortBy=relevancy&pageSize=${currentUser.numNewsPerPage}&page=${page}&apiKey=c588ced60e9748de81c19664500a64ef`;
            const res = await fetch(link);
            if (!res.ok) throw new Error('Searching failed! Please try again!!!');

            const data = await res.json();

            return {
                data: data.articles,
                total: data.totalResults,
            };
        } catch (err) {
            alert(err);
        }
    }
}

let currentUser = new User();

function parseUser(userData) {
    const userTmp = new User(
        userData.firstName,
        userData.lastName,
        userData.username,
        userData.password,
        userData.numNewsPerPage,
        userData.category
    );
    return userTmp;
}

const usersArrObj = getFromStorage(KEY) || [];
const userArr = usersArrObj.map(user => parseUser(user));

// Function save and get from localStorage
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

//------- Check current user, will used other page
function checkCurrentUser() {
    const user = getFromStorage(KEY_CURRENT_USER);
    if (!user) {
        alert('Please login for this function!!!');
        window.location.href = '../index.html';
    }
    currentUser = parseUser(user);
}
