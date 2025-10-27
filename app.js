// Select the input box element (where user types a task)

const taskInput = document.querySelector("#taskInput");



// Select the "Add" button element

const addBtn = document.querySelector("#addBtn");



// Select the <ul> element where tasks will be shown

const todoList = document.querySelector("#todoList");



// Create an empty array to store all todo tasks

let todos = [];



// ---------------------------------------------

// ✅ Function to add a new task

// ---------------------------------------------

function addTask() {

  // Get the text the user typed, and remove extra spaces

  const title = taskInput.value.trim();



  // If input is empty, stop the function (don’t add anything)

  if (title === "") return;



  // Create a new object for the task with two properties:

  // title = task name, done = whether it’s completed or not

  const newTask = { title, done: false };



  // Add the new task object into the todos array

  todos.push(newTask);



  // Update the displayed list after adding new task

  renderTodos();



  // Clear the input box for next entry

  taskInput.value = "";

}



// ---------------------------------------------

// ✅ Function to toggle (mark/unmark) a task as done

// ---------------------------------------------

function toggleTask(index) {

  // Change the done value: if false → true, if true → false

  todos[index].done = !todos[index].done;



  // Re-render the updated list

  renderTodos();

}



// ---------------------------------------------

// ✅ Function to delete a task from the list

// ---------------------------------------------

function deleteTask(index) {

  // Remove one task from array based on its index

  todos.splice(index, 1);



  // Re-render the updated list

  renderTodos();

}



// ---------------------------------------------

// ✅ Function to display (render) all tasks on screen

// ---------------------------------------------

function renderTodos() {

  // Clear the list before adding updated tasks

  todoList.innerHTML = "";



  // Loop through each task in the todos array

  todos.forEach((t, I) => {

    // Create a <li> element for each task

    const li = document.createElement("li");



    // Set the text of the task

    li.innerText = t.title;



    // If the task is marked as done, add strike-through style

    if (t.done) li.style.textDecoration = "line-through";



    // Create a ✔ button to mark the task as done

    const doneBtn = document.createElement("button");

    doneBtn.innerText = "✔";



    // When ✔ is clicked, call toggleTask() for that task

    doneBtn.addEventListener("click", () => toggleTask(I));



    // Create a ❌ button to delete the task

    const delBtn = document.createElement("button");

    delBtn.innerText = "❌";



    // When ❌ is clicked, call deleteTask() for that task

    delBtn.addEventListener("click", () => deleteTask(I));



    // Add the ✔ and ❌ buttons inside the <li>

    li.appendChild(doneBtn);

    li.appendChild(delBtn);



    // Add this <li> item into the <ul> list

    todoList.appendChild(li);

  });

}



// ---------------------------------------------

// ✅ Event listener: when Add button is clicked → run addTask()

// ---------------------------------------------

addBtn.addEventListener("click", addTask);