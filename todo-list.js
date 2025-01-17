let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dueDateElement = document.querySelector('.js-due-date');

  const dueDate = dueDateElement.value;
  if (!name) {
    alert('Please enter a todo')
  } else if (!dueDate) {
    alert('Please enter a due date');
  } else {
    todoList.push({
      name,
      dueDate
    });
  }
  inputElement.value = '';
  dueDateElement.value = '';
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const {name, dueDate} = todoList[i];

    let html = `
    <div class="todo-list-row">
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="deleteTodo(${i}); saveToStorage();" class="delete-button">Delete</button>
    </div>`
    todoListHTML += html;
  }

  const todoElement = document.querySelector('.js-todo-list');

  todoElement.innerHTML = todoListHTML;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
