import './style.css'
import Task from './createTaskClass.js';
import createToDoForm from './createForm.js';

const taskForm = document.forms['task-form']

let tasks = [];

createToDoForm();


document.getElementById('todo-submit').addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    let targetForm = clickEvent.path[1];
    console.log(targetForm.elements['due-date'].value)

    document.forms[0].reset()
})

