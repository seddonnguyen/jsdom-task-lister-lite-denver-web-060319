document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let element = document.getElementById('tasks')
    let listItem = document.createElement('li')
    listItem.innerHTML = newTaskDescription.value
    element.appendChild(listItem)
  });
});
