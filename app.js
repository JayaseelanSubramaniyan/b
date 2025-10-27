const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

let todos = [];

// ✅ Add new task
function addTask() {
  const title = taskInput.value.trim();
  if (title === "") return;

  const newTask = { title, done: false };
  todos.push(newTask);
  renderTodos();
  taskInput.value = "";
}

// ✅ Toggle done
function toggleTask(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

// ✅ Delete task
function deleteTask(index) {
  todos.splice(index, 1);
  renderTodos();
}

// ✅ Render all tasks
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerText = t.title;

    if (t.done) li.style.textDecoration = "line-through";

    // done button
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✔";
    doneBtn.addEventListener("click", () => toggleTask(i));

    // delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => deleteTask(i));

    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);