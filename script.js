// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => addTask());

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="mark-complete">
                <span class="task-text">${taskText}</span>
                <div>
                    <i class="fas fa-edit edit-task"></i>
                    <i class="fas fa-trash-alt delete-task"></i>
                </div>
            `;
            taskList.appendChild(listItem);
            inputField.value = '';
            addTaskListeners(listItem);
            alert('Task added!');
        }
    }

    function addTaskListeners(taskItem) {
        const deleteButton = taskItem.querySelector('.delete-task');
        const editButton = taskItem.querySelector('.edit-task');
        const checkBox = taskItem.querySelector('.mark-complete');
        const taskText = taskItem.querySelector('.task-text');
        
        deleteButton.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                taskItem.remove();
            }
        });
        editButton.addEventListener('click', () => editTask(taskItem, taskText));
        checkBox.addEventListener('change', () => {
            taskItem.classList.toggle('task-completed', checkBox.checked);
        });
    }

    function editTask(taskItem, taskTextElement) {
        const newText = prompt("Edit your task:", taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    }
});
