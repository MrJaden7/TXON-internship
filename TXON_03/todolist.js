// Select elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter-button");

// Add task
addTaskButton.addEventListener("click", addTask);

// Add task on pressing Enter key
taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Delete task
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentNode.remove();
  }
});

// Filter tasks
filterButtons.forEach(button => {
  button.addEventListener("click", function() {
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const filterType = button.id.replace("filter-", "");

    const taskItems = Array.from(taskList.getElementsByTagName("li"));
    taskItems.forEach(taskItem => {
      taskItem.style.display = "flex";
      const isCompleted = taskItem.classList.contains("completed");

      if ((filterType === "completed" && !isCompleted) || (filterType === "active" && isCompleted)) {
        taskItem.style.display = "none";
      }
    });
  });
});

// Mark task as completed
taskList.addEventListener("change", function(event) {
  if (event.target.type === "checkbox") {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
  }
});
