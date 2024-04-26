ddocument.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var textNode = document.createTextNode(taskInput.value);
        li.appendChild(textNode);
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents li click event from firing
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        var editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents li click event from firing
            var newText = prompt('Edit task:', li.firstChild.textContent);
            if (newText !== null && newText.trim() !== '') {
                li.firstChild.textContent = newText;
            }
        });
        li.appendChild(editBtn);
    }
});