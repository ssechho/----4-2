// todoItem.js
export function createTodoItem(todo, index, onDelete, onToggle) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => onToggle(index));
    todoItem.appendChild(checkbox);

    const title = document.createElement('span');
    title.textContent = todo.title + ' - Due: ' + todo.dueDate;
    todoItem.appendChild(title);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => onDelete(index));
    todoItem.appendChild(deleteButton);

    return todoItem;
}
