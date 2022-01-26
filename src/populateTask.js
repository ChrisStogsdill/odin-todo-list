import createTaskDropDownEventListener from "./createTaskDropDownEventListener.js";
import createDeleteButtonListener from "./createDeleteButtonListener.js";

export default function populateTask(title, description, dueDate, priority) {
  const createdTaskArea = document.getElementById("created-task-area");
  const taskContainer = createdTaskArea.appendChild(
    document.createElement("div")
  );
  taskContainer.classList.add("task-container");

  const taskTitleArea = taskContainer.appendChild(
    document.createElement("div")
  );

  taskTitleArea.classList.add("task-title-area");

  // title text
  taskTitleArea.appendChild(document.createElement("p")).innerText = title;

  // due date text
  taskTitleArea.appendChild(document.createElement("p")).innerText = dueDate;

  // priority text
  taskTitleArea.appendChild(document.createElement("p")).innerText = priority;

  // delete button
  const deleteButton = taskTitleArea.appendChild(document.createElement("a"));
  deleteButton.href = "#";
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteButton.classList.add("delete-button");

  // add delete button listener
  createDeleteButtonListener(deleteButton);

  // create a container for the description. so it can be hidden
  const taskDescriptionContainer = taskContainer.appendChild(
    document.createElement("div")
  );

  // description text
  taskDescriptionContainer.appendChild(document.createElement("p")).innerText =
    description;
  taskDescriptionContainer.classList.add("task-description-area");

  // add event listener
  createTaskDropDownEventListener(taskContainer);
}
