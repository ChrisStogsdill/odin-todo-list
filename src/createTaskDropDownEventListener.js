

export default function createTaskDropDownEventListener(dropdownParentTarget){
    dropdownParentTarget.addEventListener('click', (clickEvent)=> {
        
        let descriptionArea = dropdownParentTarget.querySelector('.task-description-area')
        
        descriptionArea.classList.toggle('un-hidden')
        //expected result - 'task-description-area'
    })
}