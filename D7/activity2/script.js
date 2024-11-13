// Add an event listener to the form
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Get the value of the task input field
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();

  // Check if the task value is not empty
  if (taskValue) {
    // Create a new div for the task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Create a span to hold the task text
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", function () {
      taskItem.remove(); // Remove the task item when button is clicked
    });

    // Append the task text and remove button to the task item
    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);

    // Add the new task item to the task list
    document.querySelector(".task-list").appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});
