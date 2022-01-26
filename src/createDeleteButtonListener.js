import populateCreatedTasksContainer from "./populateCreatedTasksContainer.js";

export default function createDeleteButtonListener(eventTarget) {
  eventTarget.addEventListener("click", () => {
    // populate tasks object from localStorage
    const tempTasks = JSON.parse(localStorage.getItem("tasks"));

    // find the index location of the task in relation to the task container
    const taskElement = eventTarget.parentElement.parentElement;
    const tasksContainerArray = Array.from(taskElement.parentElement.children);
    // use these 2 to get the index number
    const taskIndex = tasksContainerArray.indexOf(taskElement);

    // get the form ID to use as tasksKey
    const taskFormContainer = document.getElementById("task-form-container");
    const taskKey = taskFormContainer.firstChild.id;

    // remove the corresponding task at index location
    tempTasks[taskKey].splice(taskIndex, 1);

    // re-populate tasks
    populateCreatedTasksContainer(taskKey, tempTasks);

    // update localStorage
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  });
}
