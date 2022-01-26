import populateTask from './populateTask.js';
import clearTasks from './clearTasks.js';

// get tasks from localStorage if it isn't passed into the function
export default function populateCreatedTasksContainer(
  taskKey = 'main-tasks',
  tasks = JSON.parse(localStorage.getItem('tasks')),
) {
  // clear current tasks and fill them back in
  clearTasks();

  // check if taskKey exists
  if (tasks[taskKey]) {
    for (let i = 0; i < tasks[taskKey].length; i += 1) {
      const currentTask = tasks[taskKey][i];
      populateTask(
        currentTask.title,
        currentTask.description,
        currentTask.dueDate,
        currentTask.priority,
      );
    }
  }
}
