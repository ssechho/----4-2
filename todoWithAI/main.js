// main.js
import { renderTodoList } from './todoList.js';

let todos = [];

document.getElementById('addButton').addEventListener('click', addTodo);

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
        renderTodoList(todos, deleteTodo, toggleComplete);
        
        // Clear input fields after adding todo
        titleInput.value = '';
        dueDateInput.value = '';
    } else {
        alert('Please enter both title and due date.');
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList(todos, deleteTodo, toggleComplete);
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList(todos, deleteTodo, toggleComplete);
}

// Initial render
renderTodoList(todos, deleteTodo, toggleComplete);
