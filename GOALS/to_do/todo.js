

    

let tasks = [];

    function renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : 'todo-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleCompleted(index));
            li.appendChild(checkbox);
            const span = document.createElement('span');
            span.textContent = task.name;
            li.appendChild(span);
            const editButton = document.createElement('button');
            editButton.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
            editButton.addEventListener('click', () => editTask(index));
            li.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
            deleteButton.addEventListener('click', () => deleteTask(index));
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    }

    function editTask(index) {
        const newTaskName = prompt('Enter new task name:');
        if (newTaskName !== null) {
            tasks[index].name = newTaskName;
            renderTasks();
        }
    }

    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            renderTasks();
        }
    }

    function toggleCompleted(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    renderTasks();