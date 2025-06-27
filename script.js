document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Save the tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Get the current list of tasks from Local Storage
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Function to add a new task (and optionally save it)
    function addTask(taskText, save = true) {
        if (taskText.trim() === '') {
            alert("Please enter a task.");
            return;
        }

        // Create <li> and set its text content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Attach removal behavior
        removeButton.onclick = function () {
            taskList.removeChild(listItem);

            // Remove from local storage
            const tasks = getStoredTasks();
            const updatedTasks = tasks.filter(task => task !== taskText);
            saveTasks(updatedTasks);
        };

        // Append button to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the list
        taskList.appendChild(listItem);

        // Save to Local Storage if needed
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }

        // Clear input field
        taskInput.value = '';
    }

    // Event: Add task when Add button is clicked
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Event: Add task when Enter is pressed in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});


   
