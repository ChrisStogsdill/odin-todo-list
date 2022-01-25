export default function populateSideBar() {
    const sidebarOuterContainer = document.getElementById('sidebar-outer-container');
    const addProjectButton = document.getElementById('add-project-button');

    let tempTasks = JSON.parse(localStorage.getItem('tasks'));

    //remove all sidebar items before the newproject button
    while(sidebarOuterContainer.childElementCount>1){
        sidebarOuterContainer.removeChild(sidebarOuterContainer.firstElementChild)
    }

    //loop through all object keys
    for (let [key, value] of Object.entries(tempTasks)) {
        //remove the '-tasks' from the key
        let tabName = key.slice(0, -6)
        

        //insert project name link before button
        let newProjectLink = document.createElement('a')
        newProjectLink.href = '#';
        newProjectLink.innerText = tabName;

        sidebarOuterContainer.insertBefore(newProjectLink, addProjectButton)

        //create and add event listener to newly created project
        newProjectLink.addEventListener('click', () => {
            createToDoForm(tabName);
            clearTasks()
            populateCreatedTasksContainer(key)
            
        })

    }

    


}