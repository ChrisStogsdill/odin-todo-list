export default function clearTasks(){
    const createdTaskContainer = document.getElementById('created-task-area');
    
    while (createdTaskContainer.firstChild) {
        createdTaskContainer.removeChild(createdTaskContainer.firstChild);
    }
    
};