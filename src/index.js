document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');

    // Function to create a new task
    function createTask(taskDescription) {
        const li = document.createElement('li');
        li.textContent = taskDescription;

        // Create Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(li, taskDescription);

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(li);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // Function to handle form submission
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page refresh
        const taskInput = document.getElementById('new-task-description');
        const taskDescription = taskInput.value.trim();

        if (taskDescription) {
            createTask(taskDescription);
            taskInput.value = ''; // Clear the input field after submission
        }
    });

    // Function to delete a task
    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    // Function to edit a task
    function editTask(taskItem, oldDescription) {
        const taskInput = document.getElementById('new-task-description');
        taskInput.value = oldDescription; // Set input to current task description
        deleteTask(taskItem); // Remove the task from the list
    }
});
