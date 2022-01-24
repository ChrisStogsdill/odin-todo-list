import './style.css'
import createToDoForm from './createToDoForm.js';
import populateCreatedTasksContainer from './populateCreatedTasksContainer.js';
import addProjectButtonLogic from './addProjectButtonLogic.js';

const mainLink = document.getElementById('main-link');
const allLink = document.getElementById('all-link');

createToDoForm();

addProjectButtonLogic();

populateCreatedTasksContainer();

mainLink.addEventListener('click', () => {
    createToDoForm();
    populateCreatedTasksContainer();
});
