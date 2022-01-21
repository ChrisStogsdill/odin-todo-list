export default function createToDoForm(projectName= 'main') {
    const taskFormContainer = document.getElementById('task-form-container'); 
    const form = taskFormContainer.appendChild(document.createElement('form'));
    form.id = `${projectName}-tasks`;


    let titleInput = form.appendChild(document.createElement('input'))
    Object.assign(titleInput, {
        type: 'text', 
        name:`title`, 
        placeholder: 'Title'
    })

    let descriptionInput = form.appendChild(document.createElement('textarea'))
    Object.assign(descriptionInput, {
        name: `description`,
        placeholder: 'Description'
    });

    let dateInput = form.appendChild(document.createElement('input'));
    Object.assign(dateInput, {
        type: 'datetime-local',
        name: `due-date`
    });

    let radioButtonContainer = form.appendChild(document.createElement('div'));
    let radioTitle = radioButtonContainer.appendChild(document.createElement('p'));
    radioTitle.innerText = 'Priority';
    let radioButtonLow = radioButtonContainer.appendChild(document.createElement('input'));
    Object.assign(radioButtonLow, {
        type: 'radio',
        name: `priority`,
        value: 'low', 
        id: 'low'
        
    });
    
    let radioButtonLowLabel = radioButtonContainer.appendChild(document.createElement('label'));
    radioButtonLowLabel.setAttribute('for', 'low')
    radioButtonLowLabel.innerText = 'low'
   


    let radioButtonMedium = radioButtonContainer.appendChild(document.createElement('input'));
    Object.assign(radioButtonMedium, {
        type: 'radio',
        name: `priority`,
        value: 'medium', 
        id: 'medium'
        
    });
    
    let radioButtonMediumLabel = radioButtonContainer.appendChild(document.createElement('label'));
    radioButtonMediumLabel.innerText = 'medium'
    radioButtonMediumLabel.setAttribute('for', 'medium')


    let radioButtonHigh = radioButtonContainer.appendChild(document.createElement('input'));
    Object.assign(radioButtonHigh, {
        type: 'radio',
        name: `priority`,
        value: 'high',
        id: 'high'
    });

    let radioButtonHighLabel = radioButtonContainer.appendChild(document.createElement('label'));
    radioButtonHighLabel.innerText = 'high'
    radioButtonHighLabel.setAttribute('for', 'high')


    let addButton = form.appendChild(document.createElement('button'));
    addButton.innerText = 'add';
    addButton.id = 'todo-submit'


};