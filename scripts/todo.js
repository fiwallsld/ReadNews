'use strict';

const btnAdd = document.getElementById('btn-add');
const todoListEl = document.getElementById('todo-list');
const inputTasks = document.getElementById('input-task');
const closeBtnArr = document.querySelectorAll('.close');

//--------Check current user, add get current user value
checkCurrentUser();

todoListEl.innerHTML = '';
todoArr = getFromStorage(KEY_TASK_LIST);

renderTaskList(currentUser, todoArr);

//-------------Handle when button add task click---------------
btnAdd.addEventListener('click', addTask);

//---------------Handle when a task checked---------------
todoListEl.addEventListener('click', e => checkTask(e.target));

// ---------------Function children---------------
function addTask() {
    if (!inputTasks.value) {
        alert('Please enter new task!!!');
        return;
    }

    const dataTask = {
        task: inputTasks.value,
        owner: currentUser.username,
        isDone: false,
    };

    todoArr.push(dataTask);
    saveToStorage(KEY_TASK_LIST, todoArr);
    renderOneTask(dataTask);

    inputTasks.value = '';
}

//----------------This function put inline element--------------
function deleteTask(element) {
    //Get task name
    let taskName = getTaskName(element);

    // Delete task by name
    todoArr.splice(
        todoArr.findIndex(
            todoItem =>
                todoItem.task === taskName && todoItem.owner === currentUser.username
        ),
        1
    );

    saveToStorage(KEY_TASK_LIST, todoArr);

    //Remove task out DOM
    element.remove();
}

//----------Handle when click on a task ------------
function checkTask(element) {
    element.classList.toggle('checked');

    const todoItem = todoArr.find(
        item => item.task === getTaskName(element) && item.owner === currentUser.username
    );

    if (todoItem) todoItem.isDone = element.classList.contains('checked') ? true : false;

    saveToStorage(KEY_TASK_LIST, todoArr);
}

function renderTaskList(user, todoArr) {
    todoListEl.innerHTML = '';
    todoArr.forEach(task => {
        if (task.owner === user.username) {
            const taskEl = document.createElement('li');
            if (task.isDone === true) taskEl.classList.add('checked');
            taskEl.innerHTML = `${task.task}<span class="close" onClick="deleteTask(this.parentNode)">×</span>`;
            todoListEl.insertAdjacentElement('beforeend', taskEl);
        }
    });
}

function renderOneTask(task) {
    const taskEl = document.createElement('li');
    taskEl.innerHTML = `${task.task}<span class="close" onClick="deleteTask(this.parentNode)">×</span>`;
    todoListEl.insertAdjacentElement('beforeend', taskEl);
}

//--------Get a task when click in DOM
function getTaskName(taskEl) {
    let taskName = taskEl.innerText;
    // remove letter X
    return taskName.slice(0, -2);
}
