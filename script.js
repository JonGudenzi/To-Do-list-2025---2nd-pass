const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", handleAddClick);

function addTask(text) {
  const task = {
    text: text,
    completed: false
  };
  tasks.push(task);
  render();
  saveTasks();
}

function render() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      const index = li.dataset.index;
      deleteTask(index);
    });
    if (task.completed === true) {
      li.style.textDecoration = "line-through";
    }
    li.dataset.index = index;
    li.addEventListener("click", function () {
      const index = li.dataset.index;
      toggleTask(index);
    });
    taskList.appendChild(li);
  });
}

function saveTasks() {}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  render();
  saveTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
  saveTasks();
}

function handleAddClick() {
  const text = taskInput.value.trim();
  if (text === "") {
    errorMsg.textContent = "Please enter a task";
    return;
  }
}
