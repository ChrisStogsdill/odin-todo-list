import populateCreatedTasksContainer from './populateCreatedTasksContainer.js';
import createToDoForm from './createToDoForm.js';
import clearTasks from './clearTasks.js';
export default function addProjectButtonLogic(){
    const sidebarOuterContainer = document.getElementById('sidebar-outer-container')
    const addProjectButton = document.getElementById('add-project-button')

    addProjectButton.addEventListener('click', () => {
        //popup for project name
        let newProjectName = prompt('Project Name')

        //insert project name link before button
        let newProjectLink = document.createElement('a')
        newProjectLink.href = '#';
        newProjectLink.innerText = newProjectName;

        sidebarOuterContainer.insertBefore(newProjectLink, addProjectButton)

        //create and add event listener to newly created project
        newProjectLink.addEventListener('click', () => {
            createToDoForm(newProjectName);
            clearTasks()
            populateCreatedTasksContainer(`${newProjectName}-tasks`)
            
        })


    })


}