
export function listFunctionality() {
    const listHeader = document.createElement('header');
    const listUp = document.createElement('form');
    listUp.setAttribute('id', 'add-new-task');
    const inputField = document.createElement('input');
    inputField.setAttribute('type','text')
    inputField.setAttribute('id','new-task-input');
    inputField.setAttribute('placeholder','What do you wish for?');
    listUp.appendChild(inputField);
    const submitField = document.createElement('input');
    submitField.setAttribute('type','submit')
    submitField.setAttribute('id','new-task-submit')
    submitField.setAttribute('value','SUBMIT!');
    listUp.appendChild(submitField);
    listHeader.appendChild(listUp);

    return listHeader;
}

export function listMain() {

    const listMain = document.createElement('main');
    const sectionMain = document.createElement('section');
    
    const sectionHeader = document.createElement('h3');
    sectionHeader.textContent = "My wishes:";
    sectionHeader.setAttribute('id','sH3');
    sectionMain.appendChild(sectionHeader);


    const divMain = document.createElement('div');    
    divMain.setAttribute('id', 'tasks'); // so we can style them later
    sectionMain.appendChild(divMain);
    listMain.appendChild(sectionMain);
    
    return listMain;
}

export function listElementContainer(textContent) {

    //actual 'row container'
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    
    // text content of the row
    const taskContent = document.createElement('div');
    taskContent.classList.add('content');
    taskContent.setAttribute('type', 'text');
    taskContent.setAttribute('class', 'text');

    const taskInputElement = document.createElement('input'); // input'block' so we can edit it
    taskInputElement.setAttribute('type', 'text');
    taskInputElement.setAttribute('class', 'text');
    taskInputElement.value = textContent;
    taskInputElement.readOnly = true;
    taskContent.appendChild(taskInputElement);

    // buttons of each row element
    const editButton = document.createElement('button');
    editButton.classList.add('btn');
    editButton.textContent = "Edit";

    // edit button functionality
    editButton.addEventListener('click', () => {
        if (editButton.textContent.toLowerCase() == 'edit') {
            taskInputElement.readOnly = false;
            taskContent.focus();
            editButton.textContent = "Save";
        }
        else {
            taskInputElement.readOnly = true;
            editButton.textContent = "Edit";
        }
    });

    // deletebutton functionality
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', () => {
        const listElements = document.querySelector('#tasks');
        listElements.removeChild(taskContainer);
    })

    taskContainer.appendChild(taskContent);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);
    return taskContainer;
}
