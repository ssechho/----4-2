// todoList.js
import { createTodoItem } from './todoItem.js';

export function renderTodoList(todos, onDelete, onToggle) {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = createTodoItem(todo, index, onDelete, onToggle);
        todoListContainer.appendChild(todoItem);
    });
}
