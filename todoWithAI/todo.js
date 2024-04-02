// todo.js

let todos = [];

function addTodo() {
    const titleInput = document.getElementById('todoTitle');
    const dueDateInput = document.getElementById('dueDate');

    const title = titleInput.value;
    const dueDate = dueDateInput.value;

    if (title !== '' && dueDate !== '') {
        const todo = {
            title: title,
            dueDate: dueDate,
            completed: false
        };

        todos.push(todo);
        renderTodoList();
        
        // Clear input fields after adding todo
        titleInput.value = '';
        dueDateInput.value = '';
    } else {
        alert('Please enter both title and due date.');
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
}

function renderTodoList() {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleComplete(index));
        todoItem.appendChild(checkbox);

        const title = document.createElement('span');
        title.textContent = todo.title + ' - Due: ' + todo.dueDate;
        todoItem.appendChild(title);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(index));
        todoItem.appendChild(deleteButton);

        todoListContainer.appendChild(todoItem);
    });
}

// Initial render
renderTodoList();
