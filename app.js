document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');
  const darkModeToggle = document.getElementById('darkModeToggle');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTask(text, index) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.index = index;

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.dataset.index = index;
    deleteBtn.textContent = '×';

    deleteBtn.addEventListener('click', () => {
      li.style.opacity = '0';
      setTimeout(() => {
        tasks.splice(index, 1);
        saveTasks();
        renderAll();
      }, 300);
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function renderAll() {
    taskList.innerHTML = '';
    tasks.forEach((t, i) => renderTask(t, i));
  }

  function addTask(text) {
    if (!text.trim()) return;
    tasks.push(text);
    saveTasks();
    renderAll();
    taskInput.value = '';
  }

  addBtn.addEventListener('click', () => addTask(taskInput.value));
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask(taskInput.value);
  });

  // Dark mode
  function updateDarkMode() {
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
  }

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  updateDarkMode();

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateDarkMode();
  });

  renderAll();
});
