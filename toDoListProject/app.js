
// Globals
const todoList = document.getElementById('todo-list');
const userSelect = document.getElementById('user-todo');
const form = document.querySelector('form');
let todos = [];
let users = [];

// Attach Events
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);

// Basic logic
function getUserName(userId) {
  const user = users.find(u => u.id === userId);
  return user.name;
}

function printToDo({id, userId, title, completed}) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.dataset.id = id;
  li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;

  const status = document.createElement('input');
  status.type = 'checkbox';
  status.checked = completed;
  status.addEventListener('change', handleTodoChange);

  const close = document.createElement('span');
  close.innerHTML = '&times;';
  close.className = 'close';
  close.addEventListener('click', handleClose);

  li.prepend(status);
  li.append(close);

  todoList.prepend(li);
}

function createUserOption(user) {
  const option = document.createElement('option');
  option.value = user.id;
  option.innerText = user.name;

  userSelect.append(option);
}

function removeTodo(todoId) {
  todos = todos.filter(todo => todo.id !== todoId);

  const todo = todoList.querySelector(`[data-id = "${todoId}"]`);
  todo.querySelector('input').removeEventListener('change', handleTodoChange);
  todo.querySelector('.close').removeEventListener('click', handleClose);

  todo.remove();
}

function alertError(error) {
  alert(error.message);
}

// Event logic
function initApp() {
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values;

    // Отправить в разметку
    todos.forEach((todo) => printToDo(todo));
    users.forEach((user) => createUserOption(user));
  })
}

function handleSubmit(event) {
  
  event.preventDefault(); // Для предотвращения синхронной отправки формы (если хотим работать асинхронно)
  // У форм есть особенность, что формы видят своих детей по атрибуту name, соответсвенно
  // к дочерним элементам можно обратиться через значение атрибута name. Например: 
  // console.log(form.todo.value) - отобразит значение переданное в input с name = todo.
  // console.log(form.user.value) - отобразит значение выбранное в select с name = user.
  
  createTodo({
    userId: Number(form.user.value),
    title: form.todo.value,
    completed: false,
  });
}

function handleTodoChange() {
  const todoId = this.parentElement.dataset.id;
  const completed = this.checked;

  toggleTodoComplete(todoId, completed);
}

function handleClose() {
  const todoId = this.parentElement.dataset.id;
  deleteTodo(todoId);
}

// Async logic
async function getAllTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
  
    return data;
    
  } catch (error) {
    alertError(error);
  }  
}

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
  } catch (error) {
    alertError(error);
  }
  
}

async function createTodo(todo) {// Отправка новых данных на сервис.
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST', // вместо метода по умолчанию GET описываем метод POST
    body: JSON.stringify(todo), // у метода POST обязательно должно быть тело запроса
    headers: {
      'Content-Type': 'application/json', // говорим серверу, что ожидаем получить в ответ JSON файл.      
    },
    });
    const newTodo = await response.json();

    printToDo(newTodo);
  
  } catch (error) {
    alertError(error);
  }   
}

async function toggleTodoComplete(todoId, completed) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({completed: completed}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to connect with server!');
    }  
  } catch (error) {
    alertError(error);
  }
}

async function deleteTodo(todoId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      removeTodo(todoId);
    } else {
      throw new Error('Failed to connect with server!');
    }    
  } catch (error) {
    alertError(error);
  }
}