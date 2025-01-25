// DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement('li');
        
        // Create task content
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        // Mark task as complete
        taskContent.addEventListener('click', () => {
            taskContent.classList.toggle('task-completed');
        });

        // Delete task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');
        taskItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });

        // Append new task
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input field
    }
});

// Optional: Allow pressing "Enter" to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
