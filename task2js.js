const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });

    const label = document.createElement('label');
    label.innerText = newTask;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    todoList.appendChild(listItem);

    newTaskInput.value = '';
  }
});