import './style.css'
import Task from './createTaskClass.js';
import createToDoForm from './createForm.js';

const taskForm = document.forms['task-form']

let tasks = {'main-tasks': [], };

createToDoForm();


document.getElementById('todo-submit').addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    let targetForm = clickEvent.path[1];
    let taskKey = targetForm.id;
    let targetTitle = targetForm.elements['title'].value;
    let targetDescription = targetForm.elements['description'].value;
    let targetDueDate = targetForm.elements['due-date'].value;
    let targetPriority = targetForm.elements['priority'].value;
    let tempTask = new Task(targetTitle, targetDescription, 
            targetDueDate, targetPriority);

    
    tasks[taskKey].push(tempTask);
    
    console.table(tasks[taskKey])

    document.forms[0].reset()
})

const taskTitle = document.getElementById('task-title-area');
const taskDescription = document.getElementById('task-description-area');
taskTitle.addEventListener('click', (clickEvent) => {
    taskDescription.classList.toggle('un-hidden')
})
