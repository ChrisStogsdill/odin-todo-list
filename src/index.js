import './style.css'
import createToDoForm from './createToDoForm.js';
import populateCreatedTasksContainer from './populateCreatedTasksContainer.js';
import addProjectButtonLogic from './addProjectButtonLogic.js';
import populateSideBar from './populateSideBar.js';

const mainLink = document.getElementById('main-link');
const allLink = document.getElementById('all-link');

//check if localStorage doesn't have tasks yet. Then set it.
if (!localStorage.getItem('tasks')) {
    let tasks = {'main-tasks': []};
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

populateSideBar();

createToDoForm();

addProjectButtonLogic();

populateCreatedTasksContainer();

mainLink.addEventListener('click', () => {
    createToDoForm();
    populateCreatedTasksContainer();
});
