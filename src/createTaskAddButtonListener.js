import Task from './createTaskClass.js';
import populateCreatedTasksContainer from './populateCreatedTasksContainer.js';

export default function createTaskAddButtonListener(){

    document.getElementById('todo-submit').addEventListener('click', (clickEvent) => {
        let tasks = {};
        clickEvent.preventDefault();
        //the clickEvent.path[1] will give the id of the form.
        let targetForm = clickEvent.path[1];
        // taskKey to be used for the Tasks ID
        let taskKey = targetForm.id;
    
        //task values
        let targetTitle = targetForm.elements['title'].value;
        let targetDescription = targetForm.elements['description'].value;
        let targetDueDate = targetForm.elements['due-date'].value;
        let targetPriority = targetForm.elements['priority'].value;
    
        //create temp task
        let tempTask = new Task(targetTitle, targetDescription, 
                targetDueDate, targetPriority);
    
        
        //check localStorage for tasks, 
        //if it has it, then copy it to function variable
        if (localStorage.getItem('tasks')){
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
      
                
    
        //push tempTask to tasks if it exists. 
        //initialize it if it does not exist
        if (tasks[taskKey]){
            tasks[taskKey].push(tempTask);
        }
        else{
            tasks[taskKey] = [tempTask];
            
        }
        //update localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))
        
        //reset form
        document.forms[0].reset()
        
        //populate tasks
        populateCreatedTasksContainer(taskKey, tasks);
    })

}