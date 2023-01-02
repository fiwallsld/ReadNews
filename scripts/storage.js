'use strict';

const initUserArr = [
    {
        firstName: 'John',
        lastName: 'Marsquet',
        username: 'john123',
        password: '12345678',
        numNewsPerPage: 4,
        category: 'General',
    },
    {
        firstName: 'Thanh',
        lastName: 'Hoang',
        username: 'hoangthanh',
        password: '12345678',
        numNewsPerPage: 4,
        category: 'General',
    },
    {
        firstName: 'funix',
        lastName: 'FPT',
        username: 'funix',
        password: '12345678',
        numNewsPerPage: 4,
        category: 'General',
    },
    {
        firstName: 'aaf',
        lastName: 'aal',
        username: 'aaaa',
        password: '12345678',
        numNewsPerPage: 4,
        category: 'General',
    },
    {
        firstName: 'bbf',
        lastName: 'bbl',
        username: 'bbbb',
        password: '12345678',
        numNewsPerPage: 4,
        category: 'General',
    },
];

//If user data is empty
if (!localStorage.USER_ARRAY) {
    saveToStorage(KEY, initUserArr);
}

//Task list
const KEY_TASK_LIST = 'KEY_TASK_LIST';

let todoArr = [];

const innitTaskList = [
    {
        task: 'Hit the gym',
        owner: 'funix',
        isDone: false,
    },
    {
        task: 'Pay bill',
        owner: 'funix',
        isDone: true,
    },
    {
        task: 'Meet Geogre',
        owner: 'funix',
        isDone: true,
    },
    {
        task: 'Buy eggs',
        owner: 'john123',
        isDone: false,
    },
    {
        task: 'Read a book',
        owner: 'john123',
        isDone: false,
    },
    {
        task: 'Organize Office',
        owner: 'john123',
        isDone: false,
    },
    {
        task: 'Play football',
        owner: 'hoangthanh',
        isDone: false,
    },
    {
        task: "Read the book 'Code'",
        owner: 'hoangthanh',
        isDone: false,
    },
    {
        task: 'Complete asm3',
        owner: 'hoangthanh',
        isDone: true,
    },
    {
        task: 'Read book',
        owner: 'hoangthanh',
        isDone: true,
    },
    {
        task: 'viec 1',
        owner: 'funix',
        isDone: false,
    },
    {
        task: 'viec 2',
        owner: 'funix',
        isDone: false,
    },
    {
        task: 'viec 1',
        owner: 'aaaa',
        isDone: false,
    },
    {
        task: 'viec 2',
        owner: 'aaaa',
        isDone: false,
    },
];

if (!localStorage.KEY_TASK_LIST) {
    saveToStorage(KEY_TASK_LIST, innitTaskList);
}
