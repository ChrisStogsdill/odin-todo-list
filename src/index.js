import './style.css'
import Task from './createTaskClass.js';

const todoSubmitButton = document.getElementById('todo-submit');
const taskForm = document.forms['task-form']

let tasks = [];

let testTast = new Task ('testTitle', 'testDescription', 'testdate', 'urgent');
tasks.push(testTast)
testTast = new Task ('testtitloe2', 'testderasdfg', 'date test', 'not urgent')
tasks.push(testTast)
console.log(tasks)

todoSubmitButton.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    console.log(taskForm.elements['description'].value)
    taskForm.reset()
})

