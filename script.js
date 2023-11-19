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
                <span class="task-text">${taskText}</span>
                <div>
                    <input type="checkbox" class="mark-complete">
                    <button class="delete-task">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);
            inputField.value = '';
            addTaskListeners(listItem);
        }
    }

    function addTaskListeners(taskItem) {
        const deleteButton = taskItem.querySelector('.delete-task');
        const checkBox = taskItem.querySelector('.mark-complete');
        
        deleteButton.addEventListener('click', () => taskItem.remove());
        checkBox.addEventListener('change', () => {
            taskItem.classList.toggle('task-completed', checkBox.checked);
        });
    }
});
