import populateCreatedTasksContainer from './populateCreatedTasksContainer.js';
import createToDoForm from './createToDoForm.js';
import clearTasks from './clearTasks.js';
import populateSideBar from './populateSideBar.js';
export default function addProjectButtonLogic(){
    const sidebarOuterContainer = document.getElementById('sidebar-outer-container')
    const addProjectButton = document.getElementById('add-project-button')

    addProjectButton.addEventListener('click', () => {
        //popup for project name
        let newProjectName = prompt('Project Name')

        //put the new project in localStorage
        let tempTasks = JSON.parse(localStorage.getItem('tasks'))
        tempTasks[`${newProjectName}-tasks`] = [];
        localStorage.setItem('tasks', JSON.stringify(tempTasks))


        populateSideBar()


    })

}