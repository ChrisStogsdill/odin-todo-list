import Task from "./createTaskClass.js";
import populateCreatedTasksContainer from "./populateCreatedTasksContainer.js";

export default function createTaskAddButtonListener() {
  document
    .getElementById("todo-submit")
    .addEventListener("click", (clickEvent) => {
      let tasks = {};
      clickEvent.preventDefault();
      // the clickEvent.path[1] will give the id of the form.
      const targetForm = clickEvent.path[1];
      // taskKey to be used for the Tasks ID
      const taskKey = targetForm.id;

      // task values
      const targetTitle = targetForm.elements.title.value;
      const targetDescription = targetForm.elements.description.value;
      const targetDueDate = targetForm.elements["due-date"].value;
      const targetPriority = targetForm.elements.priority.value;

      // create temp task
      const tempTask = new Task(
        targetTitle,
        targetDescription,
        targetDueDate,
        targetPriority
      );

      // check localStorage for tasks,
      // if it has it, then copy it to function variable
      if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }

      // push tempTask to tasks if it exists.
      // initialize it if it does not exist
      if (tasks[taskKey]) {
        tasks[taskKey].push(tempTask);
      } else {
        tasks[taskKey] = [tempTask];
      }
      // update localStorage
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // reset form
      document.forms[0].reset();

      // populate tasks
      populateCreatedTasksContainer(taskKey, tasks);
    });
}
