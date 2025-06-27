// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Validate that input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event to remove task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the button to the <li> and then add <li> to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing Enter key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

