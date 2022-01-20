export default function createToDoForm(projectName= 'main') {
    const taskFormContainer = document.getElementById('task-form-container'); 
    const form = taskFormContainer.appendChild(document.createElement('form'));
    form.id = `${projectName}-form`;


    let titleInput = form.appendChild(document.createElement('input'))
    Object.assign(titleInput, {
        type: 'text', 
        name:`${projectName}-title`, 
        placeholder: 'Title'
    })



};