document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  let tasks = [];

  function renderTask(text, index) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.index = index;

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    li.appendChild(textSpan);
    taskList.appendChild(li);
  }

  function renderAll() {
    taskList.innerHTML = '';
    tasks.forEach((t, i) => renderTask(t, i));
  }

  function addTask(text) {
    if (!text.trim()) return;
    tasks.push(text);
    renderAll();
    taskInput.value = '';
  }

  addBtn.addEventListener('click', () => addTask(taskInput.value));
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask(taskInput.value);
  });

  renderAll();
});
