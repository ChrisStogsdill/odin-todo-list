import './style.css'
import Task from './createTaskClass.js';
import createToDoForm from './createForm.js';

const todoSubmitButton = document.getElementById('todo-submit');
const taskForm = document.forms['task-form']

let tasks = [];

createToDoForm();


todoSubmitButton.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    console.log(taskForm.elements['description'].value)
    taskForm.reset()
})

